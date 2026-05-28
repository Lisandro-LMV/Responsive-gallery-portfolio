# 📄 Texto para agregar al README.md principal del proyecto

Copia y pega esto **AL FINAL** de tu archivo README.md existente:

---

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

---
