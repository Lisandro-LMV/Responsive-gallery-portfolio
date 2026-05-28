# Bonus — CI/CD con GitHub Actions

## Objetivo

Automatizar el despliegue del portfolio a AWS cada vez que se hace push a la rama `main`. El pipeline sincroniza los archivos estáticos al bucket S3 e invalida la caché de CloudFront para que los cambios sean visibles en segundos, sin necesidad de intervención manual.

---

## Arquitectura del Pipeline

```
Desarrollador
  │
  │  git push origin main
  ▼
GitHub Repository
  │
  │  dispara workflow .github/workflows/deploy.yml
  ▼
GitHub Actions Runner
  │
  ├── 1. Checkout del código
  ├── 2. Configurar credenciales AWS
  ├── 3. Sincronizar archivos → S3
  └── 4. Invalidar caché → CloudFront
           │
           ▼
       Sitio actualizado en ~30 segundos
```

---

## Archivo del Workflow

**Ruta:** `.github/workflows/deploy.yml`

```yaml
name: Deploy to AWS S3 + CloudFront

on:
  push:
    branches:
      - main

jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id:     ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region:            ap-southeast-2

      - name: Sync files to S3
        run: |
          aws s3 sync . s3://${{ secrets.S3_BUCKET_NAME }} \
            --exclude ".git/*" \
            --exclude ".github/*" \
            --exclude "Documentos-aws/*" \
            --exclude "README.md" \
            --delete

      - name: Invalidate CloudFront cache
        run: |
          aws cloudfront create-invalidation \
            --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} \
            --paths "/*"
```

---

## Configuración de Secrets en GitHub

Los secretos se almacenan cifrados en el repositorio y se inyectan en el workflow en tiempo de ejecución.

**Ruta en GitHub:** `Settings → Secrets and variables → Actions → New repository secret`

| Secret | Descripción | Ejemplo |
|---|---|---|
| `AWS_ACCESS_KEY_ID` | Access Key del usuario IAM de CI/CD | `AKIAIOSFODNN7EXAMPLE` |
| `AWS_SECRET_ACCESS_KEY` | Secret Key del usuario IAM | `wJalrXUtnFEMI/K7MDENG/...` |
| `S3_BUCKET_NAME` | Nombre del bucket S3 de destino | `mi-portfolio-bucket` |
| `CLOUDFRONT_DISTRIBUTION_ID` | ID de la distribución de CloudFront | `EXXXXXXXXXX` |

> ⚠️ Nunca commitear credenciales AWS en el código fuente. Siempre usar GitHub Secrets.

**Screenshots:**

| Descripción | Screenshot |
|---|---|
| Lista de pipelines ejecutados | ![Pipeline Lista](Screenshots/Bonus-CICD/bonus-cicd-pipeline-lista.png.png) |
| Pasos en verde (deploy exitoso) | ![Pasos Verde](Screenshots/Bonus-CICD/bonus-cicd-pasos-verde.png.png) |
| Secrets configurados en GitHub | ![GitHub Secrets](Screenshots/Bonus-CICD/bonus-cicd-github-secrets.png.png) |

---

## Usuario IAM para CI/CD

Se creó un usuario IAM dedicado exclusivamente al pipeline, siguiendo el principio de **mínimo privilegio**. Este usuario no tiene acceso a la consola de AWS, solo acceso programático.

### Política IAM aplicada

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "S3Deploy",
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::NOMBRE-DEL-BUCKET",
        "arn:aws:s3:::NOMBRE-DEL-BUCKET/*"
      ]
    },
    {
      "Sid": "CloudFrontInvalidation",
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation"
      ],
      "Resource": "arn:aws:cloudfront::ACCOUNT-ID:distribution/DISTRIBUTION-ID"
    }
  ]
}
```

---

## Flujo Completo Paso a Paso

### 1. Desarrollo local
```bash
# Editar archivos del portfolio
# Probar cambios en el navegador
git add .
git commit -m "feat: actualizar sección de proyectos"
git push origin main
```

### 2. GitHub Actions detecta el push
- El evento `push` en `main` dispara el workflow automáticamente
- Se aprovisiona un runner Ubuntu limpio

### 3. Checkout
- Se clona el repositorio en el runner con `actions/checkout@v4`

### 4. Credenciales AWS
- `aws-actions/configure-aws-credentials@v4` inyecta las claves de los Secrets
- El CLI de AWS queda autenticado en `ap-southeast-2`

### 5. Sincronización a S3
```bash
aws s3 sync . s3://BUCKET-NAME \
  --exclude ".git/*" \
  --exclude ".github/*" \
  --exclude "Documentos-aws/*" \
  --exclude "README.md" \
  --delete
```
- `--delete` elimina del bucket archivos que ya no existen en el repo
- Los archivos excluidos son documentación interna y configuración de git

### 6. Invalidación de CloudFront
```bash
aws cloudfront create-invalidation \
  --distribution-id DISTRIBUTION-ID \
  --paths "/*"
```
- Invalida toda la caché (`/*`) para forzar que CloudFront sirva el contenido actualizado
- La propagación tarda entre 30 segundos y 2 minutos

---

## Screenshot — Archivos en el Bucket S3

![S3 README](Screenshots/Screenshots-s3-readme/readme-s3-bucket-archivos.png.png)

## Screenshot — CloudFront Activo

![CloudFront Activo](Screenshots/Bonus-CICD/readme-cloudfront-activo.png.png)

---

## Tiempos Típicos del Pipeline

| Paso | Tiempo aproximado |
|---|---|
| Checkout | ~5 seg |
| Configurar credenciales | ~3 seg |
| Sync a S3 (primera vez, sitio completo) | ~30-60 seg |
| Sync a S3 (cambios parciales) | ~5-15 seg |
| Invalidación CloudFront | ~5 seg |
| **Total** | **~1-2 minutos** |

---

## Buenas Prácticas Implementadas

- ✅ Credenciales en Secrets, nunca en código
- ✅ Usuario IAM dedicado con mínimo privilegio
- ✅ `--delete` en sync para mantener el bucket limpio
- ✅ Exclusión de archivos internos del despliegue
- ✅ Invalidación automática de CloudFront tras cada deploy
- ✅ Workflow activado solo en `main` (rama de producción)

---

## Troubleshooting

| Problema | Causa probable | Solución |
|---|---|---|
| Error `AccessDenied` en S3 | Política IAM incompleta | Verificar permisos `PutObject`, `ListBucket` y `DeleteObject` |
| Error `AccessDenied` en CloudFront | Falta permiso `CreateInvalidation` | Agregar el permiso en la política IAM |
| Secrets no encontrados | Nombre del secret con typo | Revisar que el nombre en el workflow coincida exactamente con el secret en GitHub |
| Pipeline no se dispara | Push no fue a `main` | Verificar la rama o ajustar el trigger en `on.push.branches` |
| Cambios no visibles tras deploy | CloudFront en caché | Esperar 2 minutos o verificar que la invalidación fue exitosa |
