# 🌐 Nivel 2 — CloudFront (CDN + HTTPS)

## 🎯 Objetivo del Nivel
Configurar Amazon CloudFront para que el sitio web:
1. **Cargue más rápido** en todo el mundo (CDN)
2. **Tenga HTTPS** (conexión segura con candado 🔒)
3. **Reduzca costos** de transferencia de datos

**Concepto:** CloudFront es una red de distribución de contenido (CDN). Imagina que tienes copias de tu sitio en servidores por todo el mundo. Cuando alguien de España visita tu sitio, CloudFront le sirve desde un servidor cercano a España, no desde Virginia (EE.UU.). Esto hace todo MUCHO más rápido.

**Capa gratuita:** 1 TB de transferencia + 10 millones de requests por mes durante 12 meses.

---

## 📝 Pasos Realizados

### 1. Crear una distribución de CloudFront

**¿Qué es una distribución?** Es como una "conexión" entre CloudFront y tu bucket S3. CloudFront copia los archivos de S3 y los distribuye por el mundo.

**Qué hice:**
1. En la consola de AWS, busqué "CloudFront"
2. Hice clic en "Create distribution" (Crear distribución)
3. En "Origin domain" (Origen):
   - **IMPORTANTE:** No seleccioné el bucket S3 directamente del dropdown
   - En su lugar, copié y pegué manualmente la URL del **Static Website Endpoint** de S3
   - Por ejemplo: `portfolio-responsive-gallery.s3-website-us-east-1.amazonaws.com`
   
**⚠️ POR QUÉ ES IMPORTANTE:** Si seleccionas el bucket del dropdown, CloudFront trata de acceder a S3 como almacenamiento, no como sitio web, y las URLs no funcionarán correctamente.

**Por qué:** Le estamos diciendo a CloudFront: "Toma el contenido de este sitio S3 y distribúyelo".

![Configuración de origen](Screenshots/Screenshots-level-2/03-origin-s3.png)

---

### 2. Configurar el protocolo del origen

**Qué hice:**
1. En "Origin protocol policy":
   - Seleccioné: **HTTP only**
   
**Por qué:** El endpoint de S3 Static Website solo funciona con HTTP. CloudFront se encargará de agregar HTTPS entre el usuario y CloudFront.

---

### 3. Configurar el comportamiento del caché

**Qué es el caché?** CloudFront guarda copias de tus archivos por un tiempo. Así no tiene que pedirle a S3 cada vez que alguien visita el sitio.

**Qué hice:**
1. En "Default cache behavior":
   - **Viewer protocol policy:** Seleccioné **Redirect HTTP to HTTPS**
   - Esto fuerza que todo el tráfico use HTTPS (conexión segura)
2. **Allowed HTTP methods:** Dejé `GET, HEAD` (solo lectura, perfecto para sitios estáticos)
3. **Cache policy:** Seleccioné `CachingOptimized`

**Por qué:** Queremos que SIEMPRE se use HTTPS, y que los archivos se guarden en caché para cargar rápido.

---

### 4. Configurar el certificado SSL (HTTPS)

**¿Qué es SSL/TLS?** Es lo que hace que tu sitio tenga el candado 🔒 en el navegador. Encripta la comunicación.

**Qué hice:**
1. En "Settings" → "SSL Certificate":
   - Seleccioné: **Default CloudFront Certificate (*.cloudfront.net)**
   - Esto me da HTTPS gratis usando el dominio de CloudFront

**Por qué:** Queremos HTTPS sin tener que comprar un certificado. El de CloudFront es gratis y funciona perfectamente.

**Nota:** Si tuvieras un dominio propio (como `miportfolio.com`), aquí podrías usar AWS Certificate Manager para obtener un certificado gratis para tu dominio.

![Certificado SSL](Screenshots/Screenshots-level-2/04-ssl-certificate.png)

---

### 5. Configurar la página principal (Default root object)

**Qué hice:**
1. En "Default root object": escribí `index.html`

**Por qué:** Cuando alguien visite `https://tu-distribucion.cloudfront.net/`, CloudFront automáticamente mostrará `index.html`.

---

### 6. Crear la distribución

**Qué hice:**
1. Revisé toda la configuración
2. Hice clic en "Create distribution"
3. **Esperé unos 10-15 minutos** mientras CloudFront desplegaba la distribución

**Por qué:** CloudFront tiene que copiar tus archivos a servidores por todo el mundo. Esto toma tiempo.

**Resultado:** ✅ Distribución creada con estado "Deploying" → después cambió a "Enabled"

![Distribución creada](Screenshots/Screenshots-level-2/01-distribucion-cloudfront.png)

---

### 7. Obtener la URL de CloudFront

**Qué hice:**
1. Una vez que el estado cambió a "Enabled"
2. Copié el "Domain name" de la distribución
   - Algo como: `d1a2b3c4d5e6f7.cloudfront.net`
3. Abrí esa URL en el navegador **con HTTPS:**
   - `https://d1a2b3c4d5e6f7.cloudfront.net`

**Resultado:** 🎉 ¡El sitio funciona con HTTPS!

![Domain CloudFront](Screenshots/Screenshots-level-2/02-domain-cloudfront.png)

---

### 8. Verificar que HTTPS funciona

**Qué hice:**
1. En el navegador, verifiqué que aparece el candado 🔒 junto a la URL
2. Hice clic en el candado
3. Vi que dice "Connection is secure" (La conexión es segura)

**Resultado:** ✅ HTTPS funcionando perfectamente

![HTTPS funcionando](Screenshots/Screenshots-level-2/05-https-funcionando.png)

---

### 9. Probar la velocidad del CDN

**Qué hice:**
1. Abrí las herramientas de desarrollador del navegador (F12)
2. Fui a la pestaña "Network"
3. Recargué la página
4. Vi los tiempos de carga de cada archivo

**Resultado:** Los archivos cargan mucho más rápido que con S3 directo, especialmente para usuarios fuera de EE.UU.

![Tiempos de carga](Screenshots/Screenshots-level-2/06-tiempos-carga.png)

**Comparación:**
- **S3 directo (Nivel 1):** ~500ms desde Virginia
- **CloudFront (Nivel 2):** ~50-100ms desde el edge location más cercano

---

## ⚙️ Configuraciones Finales

| Configuración | Valor |
|--------------|-------|
| **Origin domain** | `portfolio-responsive-gallery.s3-website-us-east-1.amazonaws.com` |
| **Origin protocol** | HTTP only |
| **Viewer protocol** | Redirect HTTP to HTTPS |
| **Allowed methods** | GET, HEAD |
| **Cache policy** | CachingOptimized |
| **SSL Certificate** | Default CloudFront Certificate |
| **Default root object** | `index.html` |
| **CloudFront domain** | `d1a2b3c4d5e6f7.cloudfront.net` |
| **Status** | Enabled ✅ |

---

## 🔧 Problemas Encontrados y Soluciones

### Problema 1: Los estilos CSS no cargan (403 Forbidden)
**Causa:** Usé el bucket S3 directamente como origen en vez del Static Website Endpoint.

**Solución:** 
1. Edité la distribución de CloudFront
2. Cambié el origen a la URL completa del Static Website Endpoint
3. Esperé a que se propagara el cambio (~5 minutos)

### Problema 2: "La distribución sigue en estado 'Deploying' después de 30 minutos"
**Causa:** CloudFront a veces tarda más de lo esperado.

**Solución:** Paciencia. Puede tardar hasta 45 minutos en casos raros. No hay que hacer nada, solo esperar.

### Problema 3: Los cambios en S3 no se reflejan en CloudFront
**Causa:** CloudFront tiene los archivos viejos en caché.

**Solución:** 
1. Ir a la distribución en CloudFront
2. Pestaña "Invalidations"
3. Crear una invalidación para `/*` (todos los archivos)
4. Esperar 5 minutos

---

## 💰 Costos Estimados

Con la capa gratuita de AWS:
- **Transferencia de datos:** Gratis hasta 1 TB/mes
- **Requests:** Gratis hasta 10 millones/mes
- **HTTPS requests:** Incluidos en lo anterior

**Estimado para este proyecto:** $0.00/mes (dentro de la capa gratuita)

Después de la capa gratuita:
- ~$0.085 por GB transferido (varía por región)
- ~$0.01 por 10,000 requests

**Para un portfolio con poco tráfico:** < $1/mes

---

## 🚀 Mejoras Obtenidas vs Nivel 1

| Aspecto | S3 Solo (Nivel 1) | S3 + CloudFront (Nivel 2) |
|---------|-------------------|--------------------------|
| **Protocolo** | HTTP ❌ | HTTPS ✅ |
| **Seguridad** | Sin encriptación | Encriptado con SSL/TLS |
| **Velocidad (latencia)** | ~500ms | ~50-100ms |
| **Alcance global** | Solo desde Virginia | 450+ edge locations |
| **Costos de transferencia** | $0.09/GB | $0.085/GB + capa gratuita |
| **SEO** | Penalizado por no HTTPS | Beneficiado por HTTPS |
| **Confianza del usuario** | Sin candado 🔒 | Con candado ✅ |

---

## ✅ Lista de Verificación Final

- [x] Distribución de CloudFront creada
- [x] Origen configurado correctamente (Static Website Endpoint)
- [x] HTTPS habilitado y funcionando
- [x] Redirección HTTP → HTTPS activa
- [x] Certificado SSL configurado
- [x] Default root object configurado
- [x] Sitio accesible desde CloudFront URL
- [x] Candado 🔒 visible en el navegador
- [x] Velocidad de carga mejorada
- [x] Caché funcionando correctamente

---

## 🌍 Ventajas del CDN

**Sin CloudFront (solo S3):**
```
Usuario en Australia → ~18,000 km → Virginia (EE.UU.) → ~500ms
Usuario en España → ~6,500 km → Virginia (EE.UU.) → ~300ms
```

**Con CloudFront:**
```
Usuario en Australia → ~50 km → Sydney edge location → ~20ms
Usuario en España → ~30 km → Madrid edge location → ~15ms
```

**Mejora:** Entre 10x y 30x más rápido dependiendo de la ubicación del usuario.

---

## 🚨 Notas de Seguridad

- ✅ Todo el tráfico ahora está encriptado (HTTPS)
- ✅ Los datos de los usuarios están protegidos
- ✅ El sitio cumple con estándares modernos de seguridad
- ✅ Mejor posicionamiento en Google (SEO)
- ✅ Los navegadores modernos no muestran advertencias

---

## 📚 Recursos Útiles

- [Documentación CloudFront](https://docs.aws.amazon.com/cloudfront/)
- [Cómo funciona un CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/)
- [Por qué HTTPS es importante](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https)
- [CloudFront Pricing](https://aws.amazon.com/cloudfront/pricing/)

---

## 🧪 Cómo Probar que Todo Funciona

### Test 1: Verificar HTTPS
```
1. Abre: https://tu-distribucion.cloudfront.net
2. Busca el candado 🔒 en la barra de direcciones
3. Haz clic en el candado
4. Debe decir "Connection is secure"
```

### Test 2: Verificar redirección HTTP → HTTPS
```
1. Intenta abrir: http://tu-distribucion.cloudfront.net
2. Debería redirigir automáticamente a https://
```

### Test 3: Verificar velocidad desde diferentes ubicaciones
```
1. Ve a: https://www.webpagetest.org/
2. Ingresa tu URL de CloudFront
3. Selecciona diferentes ubicaciones de prueba
4. Ejecuta las pruebas
5. Deberías ver tiempos bajos (<200ms) en todas las regiones
```

---

## ➡️ Próximo Nivel

**Nivel 3:** Configurar Lambda + SES para el formulario de contacto
- Los usuarios podrán enviarte emails desde el portfolio
- Sin servidor backend propio (serverless)
- Todo manejado por funciones Lambda
- 1 millón de invocaciones gratis al mes

---

**Fecha de completado:** [Agrega la fecha]  
**Tiempo invertido:** [Agrega cuánto tiempo te tomó]  
**Dificultad:** ⭐⭐⭐☆☆ (Intermedio)

---

## 🔄 Actualizaciones Futuras

Cuando hagas cambios en el sitio:
1. Sube los archivos nuevos a S3
2. Invalida el caché de CloudFront (`/*`)
3. Espera 5 minutos
4. ¡Los cambios estarán en vivo!
