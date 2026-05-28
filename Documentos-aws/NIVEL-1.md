# 📦 Nivel 1 — S3 Static Hosting

## 🎯 Objetivo del Nivel
Subir los archivos HTML/CSS/JS de nuestro portfolio a AWS y hacer que funcione como un sitio web público usando Amazon S3 (Simple Storage Service).

**Concepto:** Amazon S3 es como un disco duro gigante en la nube donde puedes guardar archivos. Puede servir sitios web estáticos (HTML, CSS, JS) directamente sin necesidad de un servidor tradicional.

**Capa gratuita:** 5 GB de almacenamiento + 20,000 solicitudes por mes durante 12 meses.

---

## 📝 Pasos Realizados

### 1. Creación del Bucket S3

**¿Qué es un bucket?** Es como una carpeta principal en S3 donde guardas todos tus archivos.

**Qué hice:**
1. Entré a la consola de AWS
2. Busqué el servicio "S3" en la barra de búsqueda
3. Hice clic en "Create bucket" (Crear bucket)
4. Configuré:
   - **Bucket name:** `portfolio-responsive-gallery` (tiene que ser único en todo AWS)
   - **Region:** `US East (N. Virginia) us-east-1` (la región más común)
   - Dejé las demás opciones por defecto

**Por qué:** Necesitamos un lugar donde alojar todos los archivos del portfolio.

**Resultado:** ✅ Bucket creado exitosamente

![Lista de buckets](Screenshots/Screenshots-level-1/01-lista-buckets.png)

---

### 2. Subir archivos del portfolio al bucket

**Qué hice:**
1. Entré al bucket haciendo clic en su nombre
2. Hice clic en "Upload" (Subir)
3. Arrastré todos los archivos del proyecto:
   - `index.html`
   - Carpeta `css/`
   - Carpeta `js/`
   - Carpeta `images/`
4. Hice clic en "Upload" para confirmar

**Por qué:** S3 necesita tener una copia de todos los archivos para poder servirlos como sitio web.

**Resultado:** ✅ Todos los archivos subidos correctamente

![Archivos en S3](Screenshots/Screenshots-level-1/05-archivos-subidos.png)

---

### 3. Configurar permisos públicos

**¿Por qué es necesario?** Por defecto, todo en S3 es privado. Necesitamos hacer los archivos públicos para que cualquiera pueda ver el sitio web.

**Qué hice:**
1. Fui a la pestaña "Permissions" (Permisos) del bucket
2. Busqué la sección "Block public access (bucket settings)"
3. Hice clic en "Edit"
4. **Desmarqué** la opción "Block all public access"
5. Confirmé escribiendo "confirm" cuando me lo pidió
6. Guardé los cambios

**⚠️ IMPORTANTE:** Este paso puede parecer peligroso, pero es necesario para sitios web públicos. Solo hazlo si realmente quieres que el sitio sea accesible para todos.

**Resultado:** ✅ Bucket ahora permite acceso público

![Permisos públicos](Screenshots/Screenshots-level-1/04-permisos-publicos.png)

---

### 4. Agregar política de bucket (Bucket Policy)

**¿Qué es una política?** Es un documento JSON que define quién puede hacer qué con tu bucket.

**Qué hice:**
1. En la misma pestaña "Permissions"
2. Bajé hasta "Bucket policy"
3. Hice clic en "Edit"
4. Pegué esta política (reemplazando `NOMBRE-DE-TU-BUCKET` con el nombre real):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::NOMBRE-DE-TU-BUCKET/*"
        }
    ]
}
```

5. Hice clic en "Save changes"

**Por qué:** Esta política dice: "Permite que cualquiera (`*`) pueda leer (`GetObject`) todos los archivos del bucket".

**Resultado:** ✅ Política aplicada correctamente

---

### 5. Habilitar Static Website Hosting

**Este es el paso mágico** que convierte tu bucket en un servidor web.

**Qué hice:**
1. Fui a la pestaña "Properties" (Propiedades)
2. Bajé hasta el final donde dice "Static website hosting"
3. Hice clic en "Edit"
4. Seleccioné "Enable" (Habilitar)
5. Configuré:
   - **Hosting type:** Static website hosting
   - **Index document:** `index.html` (la página principal)
   - **Error document:** `error.html` (opcional, para errores 404)
6. Guardé los cambios

**Por qué:** Esto le dice a S3: "Sirve estos archivos como un sitio web, y cuando alguien entre, muéstrale index.html primero".

**Resultado:** ✅ Sitio web habilitado, AWS generó una URL pública

![Static Hosting habilitado](Screenshots/Screenshots-level-1/02-static-hosting-enabled.png)

---

### 6. Obtener y probar la URL del sitio

**Qué hice:**
1. En la misma sección de Static website hosting
2. Copié la URL que aparece en "Bucket website endpoint"
   - Algo como: `http://portfolio-responsive-gallery.s3-website-us-east-1.amazonaws.com`
3. Abrí esa URL en el navegador

**Resultado:** 🎉 ¡El sitio web funciona perfectamente!

![Endpoint URL](Screenshots/Screenshots-level-1/03-endpoint-url.png)

![Sitio funcionando](Screenshots/Screenshots-level-1/06-sitio-funcionando.png)

**URL del sitio:** `http://[tu-bucket].s3-website-us-east-1.amazonaws.com`

---

## ⚙️ Configuraciones Finales

| Configuración | Valor |
|--------------|-------|
| **Nombre del Bucket** | `portfolio-responsive-gallery` |
| **Región** | `us-east-1` (N. Virginia) |
| **Acceso Público** | Habilitado |
| **Static Website Hosting** | Habilitado |
| **Index Document** | `index.html` |
| **Endpoint URL** | `http://[bucket].s3-website-us-east-1.amazonaws.com` |

---

## 🔧 Problemas Encontrados y Soluciones

### Problema 1: "Access Denied" al abrir la URL
**Causa:** Los permisos públicos no estaban configurados correctamente.

**Solución:** 
1. Verificar que "Block public access" esté desactivado
2. Verificar que la bucket policy esté aplicada correctamente
3. Esperar 1-2 minutos para que los cambios se propaguen

### Problema 2: La página no carga los estilos CSS
**Causa:** Las rutas de los archivos CSS/JS estaban mal en el HTML.

**Solución:** Verificar que las rutas en `index.html` sean relativas (ej: `css/style.css` y no `/css/style.css`)

---

## 💰 Costos Estimados

Con la capa gratuita de AWS:
- **Almacenamiento:** Gratis hasta 5 GB
- **Requests:** Gratis hasta 20,000 por mes
- **Transferencia de datos:** Gratis hasta 1 GB saliente

**Estimado para este proyecto:** $0.00/mes (dentro de la capa gratuita)

---

## ✅ Lista de Verificación Final

- [x] Bucket S3 creado
- [x] Archivos del portfolio subidos
- [x] Permisos públicos configurados
- [x] Bucket policy aplicada
- [x] Static website hosting habilitado
- [x] URL del sitio funcionando correctamente
- [x] Todos los recursos (imágenes, CSS, JS) cargan bien

---

## 🚨 Notas de Seguridad

- ✅ Usé usuario IAM con permisos limitados (no root)
- ✅ MFA (autenticación multifactor) habilitada en la cuenta
- ⚠️ El bucket es público por diseño (necesario para sitios web)
- ⚠️ No subí archivos sensibles (contraseñas, tokens, etc.)

---

## 📚 Recursos Útiles

- [Documentación oficial S3 Static Website](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [AWS Free Tier](https://aws.amazon.com/free/)
- [S3 Pricing Calculator](https://calculator.aws/)

---

## ➡️ Próximo Nivel

**Nivel 2:** Configurar CloudFront (CDN) para que el sitio:
- Cargue más rápido en todo el mundo
- Tenga HTTPS (conexión segura con 🔒)
- Reduzca costos de transferencia de datos

---

**Fecha de completado:** [Agrega la fecha]  
**Tiempo invertido:** [Agrega cuánto tiempo te tomó]  
**Dificultad:** ⭐⭐☆☆☆ (Fácil)
