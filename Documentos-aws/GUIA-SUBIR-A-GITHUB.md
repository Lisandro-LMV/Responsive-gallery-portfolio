# 🚀 GUÍA PASO A PASO: Subir Documentación a GitHub

## 📋 Lo que Ya Tienes Listo

✅ Carpeta **Documentos-aws** creada  
✅ Carpeta **Screenshots** dentro con:
  - Screenshots level 1
  - Screenshots level 2  
  - Screenshots user IAM  
✅ Capturas de pantalla organizadas en sus carpetas

---

## 🎯 PRÓXIMOS PASOS

### Paso 1: Descargar los archivos .md de esta conversación

Los archivos que necesitas descargar (están disponibles arriba en esta conversación):

1. ✅ **NIVEL-1.md** ← Descárgalo
2. ✅ **NIVEL-2.md** ← Descárgalo
3. ✅ **IAM-SETUP.md** ← Descárgalo
4. ✅ **README-AWS.md** ← Descárgalo
5. ✅ **TEXTO-PARA-README.md** ← Descárgalo (para actualizar el README principal)

---

### Paso 2: Colocar los archivos en tu carpeta Documentos-aws

**Mueve todos los archivos .md que descargaste** a la carpeta `Documentos-aws/`

Tu estructura final debería verse así:

```
2Front-End-PROYECTO2/
├── index.html
├── css/
├── js/
├── Img/
├── README.md                          ← Ya existe
└── Documentos-aws/                    ← Tu carpeta
    ├── README-AWS.md                  ← NUEVO (descargado)
    ├── NIVEL-1.md                     ← NUEVO (descargado)
    ├── NIVEL-2.md                     ← NUEVO (descargado)
    ├── IAM-SETUP.md                   ← NUEVO (descargado)
    └── Screenshots/                   ← Ya existe
        ├── Screenshots level 1/       ← Ya existe con tus capturas
        ├── Screenshots level 2/       ← Ya existe con tus capturas
        └── Screenshots user IAM/      ← Ya existe con tus capturas
```

---

### Paso 3: Renombrar las capturas de pantalla (IMPORTANTE)

Para que las imágenes se vean en GitHub, necesitas que los nombres de tus capturas coincidan con lo que está en los archivos .md.

#### Para Screenshots level 1:

Renombra tus capturas así:
- `01-lista-buckets.png` ← Lista de buckets S3
- `02-static-hosting-enabled.png` ← Static hosting habilitado
- `03-endpoint-url.png` ← URL del endpoint
- `04-permisos-publicos.png` ← Configuración de permisos
- `05-archivos-subidos.png` ← Archivos en el bucket
- `06-sitio-funcionando.png` ← Sitio web funcionando

#### Para Screenshots level 2:

Renombra tus capturas así:
- `01-distribucion-cloudfront.png` ← Distribución creada
- `02-domain-cloudfront.png` ← Domain name de CloudFront
- `03-origin-s3.png` ← Configuración del origen
- `04-ssl-certificate.png` ← Certificado SSL
- `05-https-funcionando.png` ← Sitio con HTTPS y candado
- `06-tiempos-carga.png` ← Tiempos de carga (opcional)

#### Para Screenshots user IAM:

Renombra tus capturas así:
- `01-usuario.png` ← Usuario IAM creado
- `02-mfa-habilitado.png` ← MFA habilitado
- `03-permisos.png` ← Permisos asignados

**Cómo renombrar en Windows:**
1. Entra a la carpeta de screenshots
2. Clic derecho en la imagen → Cambiar nombre
3. Escribe el nuevo nombre (sin olvidar el .png al final)

---

### Paso 4: Personalizar los archivos .md antes de subir

Abre cada archivo .md con un editor de texto (Notepad, Notepad++, VS Code) y reemplaza:

#### En NIVEL-1.md y NIVEL-2.md:
- Busca `[tu-bucket]` y reemplázalo con el nombre real de tu bucket S3
- Busca `[distribution]` y reemplázalo con tu domain de CloudFront
- Al final del archivo, agrega:
  - **Fecha de completado:** La fecha que terminaste
  - **Tiempo invertido:** Cuánto tiempo te tomó

#### En README-AWS.md:
- En la tabla de URLs, reemplaza:
  - `[bucket]` con tu bucket real
  - `[distribution]` con tu CloudFront real
- En "Notas del Desarrollador", agrega:
  - **Última actualización:** Fecha de hoy
  - **Proyecto iniciado:** Fecha cuando empezaste
  - **Tiempo total invertido:** Total de horas

#### En TEXTO-PARA-README.md:
- Reemplaza `[distribution]` y `[bucket]` con tus URLs reales

---

### Paso 5: Actualizar tu README.md principal

1. **Abre** el archivo `README.md` que ya existe en la raíz de tu proyecto
2. **Ve hasta el final** del archivo
3. **Copia y pega** TODO el contenido del archivo `TEXTO-PARA-README.md`
4. **Guarda** el README.md

---

## 🌐 OPCIÓN 1: Subir desde la Web de GitHub (RECOMENDADO - MÁS FÁCIL)

### Paso A: Subir la carpeta Documentos-aws

1. **Abre tu navegador** y ve a:
   ```
   https://github.com/Lisandro-LMV/Responsive-gallery-portfolio
   ```

2. **Haz clic** en el botón verde **"Add file"** (arriba a la derecha)

3. **Selecciona** "Upload files"

4. **Arrastra** la carpeta completa **Documentos-aws** a la zona de arrastre
   - Incluye todo: los .md y la carpeta Screenshots con todas las imágenes

5. **Espera** a que se suban todos los archivos (puede tardar si las imágenes son grandes)

6. **En "Commit changes"** (abajo), escribe:
   ```
   📚 Docs: Agregada documentación completa AWS (Niveles 1 y 2)
   
   - Documentación detallada de S3 Static Hosting (Nivel 1)
   - Documentación de CloudFront + HTTPS (Nivel 2)
   - Configuración de seguridad IAM + MFA
   - Screenshots organizados por nivel
   - Arquitectura y costos del proyecto
   ```

7. **Asegúrate** que esté seleccionado "Commit directly to the **main** branch"
   (o "master" si tu rama se llama así)

8. **Haz clic** en **"Commit changes"** (botón verde)

---

### Paso B: Actualizar el README principal

1. En tu repositorio, **haz clic** en el archivo `README.md`

2. **Haz clic** en el ícono del lápiz ✏️ (arriba a la derecha) "Edit this file"

3. **Ve hasta el final** del archivo (scroll down)

4. **Pega** el contenido que ya preparaste del `TEXTO-PARA-README.md`

5. **Verifica** que las URLs estén correctas (sin [distribution] ni [bucket])

6. **Abajo en "Commit changes"**, escribe:
   ```
   📝 Docs: Actualizado README con información del despliegue AWS
   ```

7. **Haz clic** en **"Commit changes"**

---

### Paso C: Verificar que todo se vea bien

1. **Refresca** la página principal de tu repositorio

2. **Deberías ver:**
   - La carpeta `Documentos-aws/` en la lista de archivos
   - El README actualizado con la nueva sección AWS
   - Todo bien organizado

3. **Haz clic** en `Documentos-aws/`
   - Verifica que estén todos los archivos .md
   - Verifica que esté la carpeta Screenshots

4. **Haz clic** en `README-AWS.md`
   - Debería verse bien formateado
   - Los enlaces internos deberían funcionar

5. **Haz clic** en `NIVEL-1.md`
   - Verifica que las imágenes se vean
   - Si no se ven, revisa los nombres de los archivos

---

## 💻 OPCIÓN 2: Subir desde la Terminal con Git

### Prerrequisitos
- Git instalado en tu computadora
- Repositorio clonado localmente

---

### Paso 1: Abrir terminal en la carpeta del proyecto

**Windows:**
1. Abre la carpeta `2Front-End-PROYECTO2` en el Explorador
2. **Shift + Clic derecho** en un espacio vacío
3. Selecciona "Abrir ventana de PowerShell aquí" o "Git Bash Here"

**Mac/Linux:**
1. Abre Terminal
2. Navega: `cd ~/ruta/a/2Front-End-PROYECTO2`

---

### Paso 2: Verificar ubicación

```bash
# Ver dónde estás
pwd

# Deberías ver algo como:
# C:\Users\lisandro\Desktop\2Front-End-PROYECTO2
```

---

### Paso 3: Ver qué archivos vas a subir

```bash
# Ver estado
git status

# Deberías ver:
# Untracked files:
#   Documentos-aws/
#   
# Modified:
#   README.md
```

---

### Paso 4: Agregar los archivos

```bash
# Agregar la carpeta completa de documentación
git add Documentos-aws/

# Agregar el README actualizado
git add README.md

# Verificar que se agregaron
git status

# Deberías ver en verde:
# Changes to be committed:
#   new file: Documentos-aws/README-AWS.md
#   new file: Documentos-aws/NIVEL-1.md
#   new file: Documentos-aws/NIVEL-2.md
#   new file: Documentos-aws/IAM-SETUP.md
#   new file: Documentos-aws/Screenshots/...
#   modified: README.md
```

---

### Paso 5: Hacer commit

```bash
git commit -m "📚 Docs: Agregada documentación completa AWS (Niveles 1 y 2)

- Documentación detallada de S3 Static Hosting (Nivel 1)
- Documentación de CloudFront + HTTPS (Nivel 2)
- Configuración de seguridad IAM + MFA
- Screenshots organizados por nivel
- Actualizado README principal con info AWS"
```

---

### Paso 6: Subir a GitHub

```bash
# Verificar el nombre de tu rama
git branch
# Debería mostrar: * main  o  * master

# Subir (usa el nombre de tu rama)
git push origin main

# O si tu rama es master:
git push origin master
```

**Si te pide autenticación:**
- Usuario: tu usuario de GitHub
- Contraseña: usa un **Personal Access Token** (no tu contraseña)
  - Crea uno en: GitHub → Settings → Developer settings → Personal access tokens
  - Genera un token con scope "repo"
  - Cópialo y úsalo como contraseña

---

### Paso 7: Verificar en GitHub

1. Ve a tu repositorio en el navegador
2. Refresca la página
3. Verifica que todo esté subido correctamente

---

## 🔧 Solución de Problemas Comunes

### ❌ Las imágenes no se ven en GitHub

**Causa:** Los nombres de los archivos no coinciden con las rutas en los .md

**Solución:**
1. Verifica que las capturas estén en: `Documentos-aws/Screenshots/Screenshots level 1/`
2. Verifica que los nombres sean EXACTAMENTE como los especificados
3. GitHub distingue mayúsculas de minúsculas
4. Los espacios en "Screenshots level 1" deben estar

---

### ❌ Error: "Push rejected"

**Causa:** Alguien hizo cambios en GitHub que no tienes localmente

**Solución:**
```bash
# Primero descarga los cambios
git pull origin main

# Luego sube de nuevo
git push origin main
```

---

### ❌ Git no reconoce mis cambios

**Solución:**
```bash
# Ver diferencias
git diff

# Agregar TODO
git add .

# Intentar de nuevo
git commit -m "mensaje"
```

---

## ✅ Checklist Final

Antes de dar por terminado, verifica:

### Archivos
- [ ] Carpeta `Documentos-aws/` creada
- [ ] `README-AWS.md` dentro de Documentos-aws
- [ ] `NIVEL-1.md` dentro de Documentos-aws
- [ ] `NIVEL-2.md` dentro de Documentos-aws
- [ ] `IAM-SETUP.md` dentro de Documentos-aws
- [ ] Carpeta `Screenshots/` con las 3 subcarpetas
- [ ] Todas las capturas renombradas correctamente
- [ ] README.md principal actualizado

### En GitHub
- [ ] Todo subido correctamente
- [ ] Las imágenes se ven
- [ ] Los enlaces funcionan
- [ ] El README principal muestra la sección AWS
- [ ] No hay errores 404

---

## 🎉 ¡Listo!

Si seguiste todos los pasos, ahora tienes:

✅ Documentación profesional de tu proyecto AWS  
✅ Todo versionado en GitHub  
✅ Capturas de pantalla organizadas  
✅ Guías detalladas para cada nivel  
✅ Un portafolio que muestra tus habilidades en cloud  

---

## 📅 Para Futuros Niveles

Cuando completes el Nivel 3:
1. Toma screenshots mientras trabajas
2. Crea `NIVEL-3.md` siguiendo la misma estructura
3. Agrega screenshots en `Screenshots/Screenshots level 3/`
4. Actualiza `README-AWS.md`
5. Sube todo con `git add` y `git commit`

---

**¿Tienes dudas?** ¡Pregúntame lo que necesites!
