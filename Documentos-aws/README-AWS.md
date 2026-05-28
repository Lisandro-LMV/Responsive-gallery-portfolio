# 📚 Documentación del Despliegue AWS

## 🎯 Objetivo del Proyecto
Desplegar un portfolio responsive de galería en AWS utilizando servicios cloud modernos, implementando las mejores prácticas de arquitectura serverless, seguridad y optimización de costos.

---

## 🗺️ Roadmap Completo - 4 Niveles

### ✅ Nivel 1 - S3 Static Hosting
**Estado:** Completado  
**Concepto:** Almacenamiento en la nube + hosting web estático  
**Servicios:** Amazon S3  
**Capa gratuita:** 5 GB + 20k requests/mes

📖 **[Ver documentación completa →](NIVEL-1.md)**

**Resumen:**
- Bucket S3 creado y configurado
- Archivos del portfolio subidos
- Static website hosting habilitado
- Sitio web público accesible

---

### ✅ Nivel 2 - CloudFront (CDN + HTTPS)
**Estado:** Completado  
**Concepto:** Red de distribución de contenido (CDN) + certificado SSL  
**Servicios:** Amazon CloudFront  
**Capa gratuita:** 1 TB + 10M requests/mes

📖 **[Ver documentación completa →](NIVEL-2.md)**

**Resumen:**
- Distribución de CloudFront configurada
- HTTPS habilitado con certificado SSL gratuito
- Sitio replicado en 450+ ubicaciones globales
- Redirección automática HTTP → HTTPS

---

### 🔄 Nivel 3 - Lambda + SES (Formulario de Contacto)
**Estado:** En progreso  
**Concepto:** Funciones serverless + envío de emails  
**Servicios:** AWS Lambda, Amazon SES  
**Capa gratuita:** 1M invocaciones/mes + 62k emails/mes

📖 **Documentación:** Próximamente

**Qué hará:**
- Formulario de contacto funcional
- Envío de emails sin servidor backend
- Validación y seguridad implementadas
- Sin costos de servidor 24/7

---

### ⏳ Nivel 4 - CloudWatch (Métricas y Monitoreo)
**Estado:** Pendiente  
**Concepto:** Observabilidad y dashboards  
**Servicios:** Amazon CloudWatch  
**Capa gratuita:** 10 métricas + alarmas básicas

📖 **Documentación:** Próximamente

**Qué hará:**
- Ver visitas en tiempo real
- Detectar errores automáticamente
- Alertas por email/SMS
- Dashboard de métricas

---

## 🔐 Configuración de Seguridad

📖 **[Ver configuración IAM + MFA →](IAM-SETUP.md)**

**Implementado:**
- ✅ Usuario IAM con permisos limitados
- ✅ MFA (autenticación multifactor) habilitado
- ✅ Cuenta root protegida
- ✅ Políticas de mínimo privilegio
- ✅ CloudTrail para auditoría

---

## 🏗️ Arquitectura Actual

```
┌─────────────────────────────────────────────────────────────┐
│                         INTERNET                            │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       │ HTTPS
                       ▼
         ┌─────────────────────────────┐
         │      CloudFront (CDN)       │
         │  ✅ 450+ edge locations     │
         │  ✅ SSL/TLS Certificate     │
         │  ✅ Cache enabled           │
         └─────────────┬───────────────┘
                       │
                       │ HTTP
                       ▼
              ┌──────────────────┐
              │     S3 Bucket    │
              │  ✅ Static Site  │
              │  ✅ HTML/CSS/JS  │
              │  ✅ Images       │
              └───────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  Próximamente: Lambda + SES (formulario contacto)           │
│  Próximamente: CloudWatch (métricas y monitoreo)            │
└──────────────────────────────────────────────────────────────┘
```

---

## 📊 Recursos y Costos

### Servicios Utilizados

| Servicio | Uso | Capa Gratuita | Costo Actual |
|----------|-----|---------------|--------------|
| **S3** | Hosting estático | 5 GB + 20k requests | $0.00 |
| **CloudFront** | CDN global | 1 TB + 10M requests | $0.00 |
| **IAM** | Gestión usuarios | Ilimitado | $0.00 |
| **Lambda** | ⏳ Próximamente | 1M invocaciones | - |
| **SES** | ⏳ Próximamente | 62k emails | - |
| **CloudWatch** | ⏳ Próximamente | 10 métricas | - |

**Total mensual estimado:** $0.00 (dentro de capa gratuita)

---

## 🎓 Habilidades Aprendidas

### Nivel 1 - Fundamentos Cloud
- [x] Crear y configurar buckets S3
- [x] Subir y gestionar archivos en la nube
- [x] Configurar políticas de acceso público
- [x] Habilitar static website hosting
- [x] Trabajar con la consola de AWS

### Nivel 2 - Redes y Seguridad
- [x] Configurar una red CDN global
- [x] Implementar HTTPS/SSL
- [x] Gestionar distribuciones de CloudFront
- [x] Optimizar tiempos de carga
- [x] Cachear contenido estratégicamente

### Seguridad (Transversal)
- [x] Crear usuarios IAM
- [x] Configurar MFA
- [x] Aplicar principio de mínimo privilegio
- [x] Gestionar políticas de seguridad
- [x] Proteger credenciales

### Próximamente
- [ ] Programación serverless (Lambda)
- [ ] Envío de emails programático (SES)
- [ ] Monitoreo y observabilidad (CloudWatch)
- [ ] Automatización con CI/CD

---

## 🚀 URLs del Proyecto

| Servicio | URL | Estado |
|----------|-----|--------|
| **Direct S3 Endpoint** | `http://portfolio-lisandro-lmv.s3-website-us-east-1.amazonaws.com` | 🔒 Restricted via CloudFront OAC |
| **Producción (CloudFront)** | `https://d5q5g3hfj9ssq.cloudfront.net` | ✅ Activo |
| **Dominio propio** | _Próximamente con Route 53_ | ⏳ Pendiente |

---

## 📸 Galería de Screenshots

Todas las capturas de pantalla están organizadas por nivel:

```
Screenshots/
├── Screenshots-level-1/          # S3 Static Hosting
├── Screenshots-level-2/          # CloudFront CDN
├── Screenshots-level-3/          # Lambda + SES (próximamente)
├── Screenshots-level-4/          # CloudWatch (próximamente)
└── Screenshots-user-IAM/         # Configuración de seguridad
```

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)
- Responsive Design

### AWS Services
- ✅ Amazon S3
- ✅ Amazon CloudFront
- ✅ AWS IAM
- ⏳ AWS Lambda
- ⏳ Amazon SES
- ⏳ Amazon CloudWatch

### Herramientas
- Git & GitHub
- AWS Console
- Google Authenticator (MFA)

---

## 📖 Cómo Usar Esta Documentación

1. **Si eres nuevo en AWS:** Empieza por [IAM-SETUP.md](IAM-SETUP.md) para configurar tu cuenta de forma segura

2. **Para replicar el proyecto:** Lee los niveles en orden:
   - [NIVEL-1.md](NIVEL-1.md) - S3 Static Hosting
   - [NIVEL-2.md](NIVEL-2.md) - CloudFront CDN
   - NIVEL-3.md (próximamente)
   - NIVEL-4.md (próximamente)

3. **Para entender un servicio específico:** Ve directamente al nivel que lo utiliza

4. **Para ver capturas de pantalla:** Navega a `Screenshots/[nivel]/`

---

## ✅ Checklist de Progreso

### Fundamentos
- [x] Cuenta AWS creada
- [x] Usuario IAM configurado
- [x] MFA habilitado
- [x] Billing alerts configuradas

### Nivel 1 - S3
- [x] Bucket creado
- [x] Archivos subidos
- [x] Permisos públicos configurados
- [x] Static hosting habilitado
- [x] Sitio accesible

### Nivel 2 - CloudFront
- [x] Distribución creada
- [x] Origen configurado
- [x] HTTPS habilitado
- [x] Caché optimizado
- [x] Sitio global funcionando

### Nivel 3 - Lambda + SES
- [ ] Función Lambda creada
- [ ] SES configurado y verificado
- [ ] Formulario de contacto implementado
- [ ] Emails enviándose correctamente

### Nivel 4 - CloudWatch
- [ ] Métricas configuradas
- [ ] Dashboard creado
- [ ] Alarmas establecidas
- [ ] Logs centralizados

---

## 🔮 Bonus Opcionales (Más Adelante)

### CI/CD con GitHub Actions
- Despliegue automático al hacer push
- Invalidación automática de caché
- Tests antes del deploy

### Dominio Propio
- Registrar dominio con Route 53
- Configurar DNS
- Certificado SSL personalizado

### Optimizaciones Avanzadas
- Compresión de imágenes automática
- Lazy loading
- Service Worker para PWA

---

## 📚 Recursos de Aprendizaje

### Documentación Oficial AWS
- [AWS Documentation](https://docs.aws.amazon.com/)
- [AWS Free Tier](https://aws.amazon.com/free/)
- [Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)

### Tutoriales Recomendados
- [AWS Getting Started](https://aws.amazon.com/getting-started/)
- [Serverless Land](https://serverlessland.com/)
- [AWS Samples GitHub](https://github.com/aws-samples)

### Comunidad
- [AWS re:Post](https://repost.aws/)
- [Reddit r/aws](https://reddit.com/r/aws)
- [Stack Overflow AWS Tag](https://stackoverflow.com/questions/tagged/amazon-web-services)

---


**Lecciones aprendidas:**
- La configuración de seguridad toma tiempo pero vale la pena
- CloudFront tarda en desplegarse (~15 minutos de paciencia)
- La documentación es tan importante como el código
- La capa gratuita de AWS es suficiente para proyectos de aprendizaje

---

## 🎯 Próximos Pasos

1. ✅ ~~Documentar Niveles 1 y 2~~
2. ⏳ Implementar Nivel 3 (Lambda + SES)
3. ⏳ Documentar Nivel 3
4. ⏳ Implementar Nivel 4 (CloudWatch)
5. ⏳ Documentar Nivel 4
6. 🔮 Explorar opciones de CI/CD
7. 🔮 Considerar dominio personalizado

---

**⭐ Si esta documentación te fue útil, dale una estrella al repositorio**

---

_Documentación creada como parte del proyecto de aprendizaje AWS - Portfolio Responsive Gallery_
