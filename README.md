# Proyecto Landing Page - Lisandro Designe LMV

Landing page responsive creada con HTML, CSS y JavaScript para mostrar servicios, portafolio y expertos.

## Capturas de Pantalla

| Móvil | Escritorio |
|------|------------|
| ![Vista en móvil](Img/demo-movil.jpg) | ![Vista en escritorio](Img/demo-desktop.png) |

## Funcionalidad clave: Lightbox

![Lightbox en acción](Img/demo-lightbox.jpg)

## Demo en Vivo
[Ver el portafolio online](https://lisandro-lmv.github.io/Responsive-gallery-portfolio/)  
*(Haz clic para navegar por el menú, la galería y el Lightbox en tiempo real)*

## Funcionalidades
- Menú hamburguesa responsive
- Galería con Lightbox
- Secciones: Inicio, Servicio, Portafolio, Expertos y Contacto
- Footer con redes sociales
- Diseño responsive para desktop y móviles

## Tecnologías
- HTML5, CSS3 (Flexbox, Media Queries, Transiciones)
- JavaScript (DOM, eventos, lightbox)
- Iconos: Boxicons

## Estructura del proyecto
```
Front-End-PROY...
├─ css/
│   └─ estilos.css
├─ Html/
│   └─ index.html
├─ img/
│   (tus imágenes)
├─ js/
│   ├─ lightbox.js
│   └─ menu.js
└─ README.md
```

## Uso
1. Clonar el repositorio: `git clone https://github.com/Lisandro-LMV/Responsive-gallery-portfolio.git`
2. Abrir `index.html` en un navegador moderno.
3. Navegar por el menú o hacer scroll.
4. Click en imágenes para abrir Lightbox.

## 📦 Despliegue en AWS

Este proyecto está siendo desplegado en Amazon Web Services (AWS) como parte de un proceso de aprendizaje de arquitectura cloud y servicios serverless.

### 🗺️ Roadmap de Implementación

- ✅ **Nivel 1 - S3 Static Hosting:** Almacenamiento y hosting web estático
- ✅ **Nivel 2 - CloudFront (CDN + HTTPS):** Red de distribución global con SSL
- 🔄 **Nivel 3 - Lambda + SES:** Formulario de contacto serverless
- ⏳ **Nivel 4 - CloudWatch:** Métricas y monitoreo en tiempo real

### 📚 Documentación Completa

Toda la documentación técnica del despliegue está disponible en:

**➡️ [Ver documentación AWS completa](Documentos-aws/README-AWS.md)**

Incluye:
- Guías paso a paso de cada nivel
- Screenshots de configuraciones
- Solución de problemas comunes
- Configuración de seguridad (IAM + MFA)
- Estimación de costos
- Recursos de aprendizaje

### 🌐 URLs del Proyecto

| Entorno | URL | Estado |
|---------|-----|--------|
| **Producción (CloudFront)** | `d5q5g3hfj9ssq.cloudfront.net` | ✅ Activo |
| **Direct S3 Endpoint** | `http://portfolio-lisandro-lmv.s3-website-us-east-1.amazonaws.com` | 🔒 Restricted via CloudFront OAC |

### 🏗️ Arquitectura AWS Actual

```
Usuario → CloudFront (CDN + HTTPS) → S3 (Static Website)
         ↓
    450+ edge locations
    globalmente distribuidas
```

### 📊 Servicios AWS Utilizados

![AWS S3](https://img.shields.io/badge/AWS-S3-orange?logo=amazon-aws&logoColor=white)
![AWS CloudFront](https://img.shields.io/badge/AWS-CloudFront-orange?logo=amazon-aws&logoColor=white)
![AWS IAM](https://img.shields.io/badge/AWS-IAM-orange?logo=amazon-aws&logoColor=white)

**Próximamente:** Lambda · SES · CloudWatch

### 💰 Costo del Despliegue

**Actual:** $0.00/mes (dentro de AWS Free Tier)

## Autor
**Lisandro Molina Viamonte**
- GitHub: [Lisandro-LMV](https://github.com/Lisandro-LMV)

