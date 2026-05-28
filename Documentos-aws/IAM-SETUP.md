# 🔐 Configuración de Seguridad - IAM y MFA

## 🎯 Objetivo
Configurar una cuenta AWS segura para practicar y desarrollar proyectos, usando un usuario IAM con permisos limitados y autenticación multifactor (MFA).

**Concepto:** En vez de usar la cuenta root (que tiene acceso TOTAL a todo), creamos un usuario IAM (Identity and Access Management) con solo los permisos necesarios. Además, habilitamos MFA (autenticación de dos factores) para que incluso si alguien obtiene tu contraseña, no pueda acceder sin el segundo factor.

---

## 🚨 Por Qué Es Importante

### ❌ Lo que NO debes hacer:
- **Usar la cuenta root para todo:** Si alguien accede a tu root, tiene control total de tu cuenta
- **No tener MFA:** Una contraseña sola puede ser robada
- **Dar permisos de administrador a todos:** Principio de mínimo privilegio

### ✅ Lo que SÍ debes hacer:
- **Crear usuarios IAM específicos** para diferentes propósitos
- **Habilitar MFA en TODOS** los usuarios importantes
- **Dar solo los permisos necesarios** para cada tarea

---

## 📝 Pasos Realizados

### 1. Crear un usuario IAM

**¿Qué es IAM?** Es el sistema de gestión de identidades de AWS. Te permite crear usuarios, grupos y políticas de permisos.

**Qué hice:**
1. Entré a la consola de AWS con la cuenta root (solo esta vez)
2. Busqué el servicio "IAM" en la barra de búsqueda
3. En el menú izquierdo, hice clic en "Users" (Usuarios)
4. Hice clic en "Create user" (Crear usuario)
5. Configuré:
   - **User name:** `aws-learning-user` (o el nombre que quieras)
   - **AWS access type:** 
     - ✅ Marqué "Provide user access to the AWS Management Console"
     - Esto permite que el usuario acceda a la consola web
   - **Console password:** Seleccioné "Custom password" y puse una contraseña fuerte
   - ✅ Marqué "Users must create a new password at next sign-in"

**Por qué:** Crear un usuario separado es más seguro que usar root. Si este usuario se compromete, podemos eliminarlo sin afectar la cuenta principal.

**Resultado:** ✅ Usuario IAM creado

![Usuario IAM](Screenshots/Screenshots-user-IAM/iam-01-user.png)

---

### 2. Asignar permisos al usuario

**¿Qué permisos necesito para este proyecto?** Para trabajar con S3, CloudFront, Lambda, y SES necesitamos permisos específicos.

**Qué hice:**

#### Opción A: Permisos completos para aprendizaje (lo que yo hice)
1. En "Set permissions", seleccioné "Attach policies directly"
2. Busqué y marqué estas políticas administradas por AWS:
   - `AmazonS3FullAccess` - Para trabajar con buckets S3
   - `CloudFrontFullAccess` - Para crear y gestionar distribuciones
   - `AWSLambda_FullAccess` - Para las funciones Lambda (Nivel 3)
   - `AmazonSESFullAccess` - Para enviar emails (Nivel 3)
   - `IAMReadOnlyAccess` - Para ver configuraciones de IAM (sin modificar)

**⚠️ NOTA:** Estos son permisos amplios. En producción usarías políticas más restrictivas.

#### Opción B: Política personalizada (más segura, pero más compleja)
Si quieres solo lo mínimo necesario, puedes crear una política JSON personalizada. Te la dejo aquí por si la necesitas:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:*"
            ],
            "Resource": [
                "arn:aws:s3:::portfolio-*",
                "arn:aws:s3:::portfolio-*/*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "cloudfront:*"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "lambda:*"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "ses:*"
            ],
            "Resource": "*"
        }
    ]
}
```

**Resultado:** ✅ Permisos asignados

![Permisos asignados](Screenshots/Screenshots-user-IAM/03-permisos.png)

---

### 3. Descargar las credenciales

**Qué hice:**
1. Después de crear el usuario, AWS mostró una pantalla con:
   - **Console sign-in URL:** La URL para que el usuario acceda
   - **User name:** El nombre del usuario
   - **Password:** La contraseña (si la generó AWS)
2. Hice clic en "Download .csv" para guardar esta información
3. Guardé el archivo CSV en un lugar **SEGURO** (NO en el repositorio de GitHub)

**⚠️ IMPORTANTE:** Este CSV contiene información sensible. Nunca lo subas a GitHub ni lo compartas.

---

### 4. Habilitar MFA (Autenticación Multifactor)

**¿Qué es MFA?** Es un segundo factor de seguridad. Además de tu contraseña, necesitas un código temporal de 6 dígitos que cambia cada 30 segundos.

**Opciones de MFA:**
1. **Aplicación autenticadora** (Google Authenticator, Authy, Microsoft Authenticator) ← La más común
2. **Llave de seguridad física** (YubiKey)
3. **SMS** (no recomendado, menos seguro)

**Qué hice:**

#### Paso A: Instalar una app autenticadora
1. Descargué "Google Authenticator" en mi teléfono
   - [iOS](https://apps.apple.com/app/google-authenticator/id388497605)
   - [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)

#### Paso B: Configurar MFA en el usuario
1. En IAM, hice clic en mi usuario `aws-learning-user`
2. Fui a la pestaña "Security credentials"
3. Busqué la sección "Multi-factor authentication (MFA)"
4. Hice clic en "Assign MFA device"
5. Seleccioné "Authenticator app"
6. AWS mostró un código QR
7. Abrí Google Authenticator y escaneé el código QR
8. La app empezó a generar códigos de 6 dígitos cada 30 segundos
9. Ingresé dos códigos consecutivos en AWS para verificar
10. Hice clic en "Add MFA"

**Resultado:** ✅ MFA habilitado correctamente

![MFA habilitado](Screenshots/Screenshots-user-IAM/02-mfa-habilitado.png)

**Ahora cuando intente iniciar sesión:**
1. Ingreso usuario y contraseña
2. AWS me pide el código MFA
3. Abro Google Authenticator
4. Ingreso el código de 6 dígitos
5. ¡Acceso concedido!

---

### 5. Cerrar sesión y probar el nuevo usuario

**Qué hice:**
1. Cerré la sesión de la cuenta root
2. Abrí la URL de inicio de sesión del usuario IAM:
   - `https://[ID-DE-CUENTA].signin.aws.amazon.com/console`
   - Esta URL estaba en el CSV que descargué
3. Ingresé:
   - **Account ID:** (el número de 12 dígitos de mi cuenta)
   - **IAM user name:** `aws-learning-user`
   - **Password:** Mi contraseña
4. AWS me pidió cambiar la contraseña (porque lo configuré así)
5. Cambié a una nueva contraseña fuerte
6. AWS me pidió el código MFA
7. Lo ingresé desde Google Authenticator
8. ¡Acceso exitoso!

**Resultado:** ✅ Usuario IAM funcionando perfectamente con MFA

---

## 🔒 Mejores Prácticas de Seguridad Implementadas

| Práctica | Estado | Explicación |
|----------|--------|-------------|
| ✅ Usar IAM en vez de root | Implementado | Root solo para tareas críticas |
| ✅ MFA habilitado | Implementado | Código temporal requerido |
| ✅ Contraseña fuerte | Implementado | Mínimo 12 caracteres, símbolos |
| ✅ Permisos mínimos necesarios | Implementado | Solo acceso a servicios del proyecto |
| ✅ Credenciales guardadas seguras | Implementado | CSV en ubicación segura, no en GitHub |
| ✅ Políticas de cambio de contraseña | Implementado | Obligatorio en primer login |

---

## 🛡️ Configuración de la Cuenta Root (Hecho previamente)

Antes de crear usuarios IAM, también aseguré la cuenta root:

1. **MFA en root:** Habilitado
2. **Billing alerts:** Activadas (me avisa si gasto supera cierto monto)
3. **CloudTrail:** Activado (registra todas las acciones)
4. **Contraseña root:** Guardada en gestor de contraseñas (1Password, Bitwarden)

**⚠️ REGLA DE ORO:** Nunca más usar root excepto para:
- Cambiar método de pago
- Cerrar la cuenta
- Cambiar plan de soporte
- Recuperar usuario IAM

---

## 🔧 Qué Hacer Si...

### Pierdo mi teléfono con Google Authenticator
**Solución:**
1. Inicia sesión con la cuenta root (por eso también tiene MFA)
2. Ve a IAM → Users → tu usuario
3. Elimina el dispositivo MFA antiguo
4. Configura uno nuevo

**Prevención:** 
- Configura MFA en múltiples dispositivos
- Guarda los códigos de recuperación cuando los ofrezcan

### Olvido mi contraseña IAM
**Solución:**
1. Inicia sesión con la cuenta root
2. Ve a IAM → Users → tu usuario
3. Security credentials → Console password → Reset

### Alguien obtiene mi contraseña
**Con MFA habilitado:** No puede acceder sin el código temporal ✅  
**Sin MFA:** Puede acceder y causar daño ❌

---

## 💰 Costos

**IAM:** Completamente **GRATIS**
- Usuarios ilimitados
- Políticas ilimitadas
- MFA gratis

**Costo total de seguridad:** $0.00/mes

---

## ✅ Lista de Verificación de Seguridad

- [x] Usuario IAM creado (no uso root para tareas diarias)
- [x] MFA habilitado en usuario IAM
- [x] MFA habilitado en cuenta root
- [x] Permisos asignados correctamente
- [x] Contraseña fuerte establecida
- [x] Credenciales guardadas en lugar seguro
- [x] Google Authenticator configurado
- [x] Probado el inicio de sesión con MFA
- [x] Billing alerts configuradas
- [x] CloudTrail activado

---

## 📱 Apps Recomendadas para MFA

1. **Google Authenticator** (Gratis)
   - Simple y confiable
   - [iOS](https://apps.apple.com/app/google-authenticator/id388497605) | [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)

2. **Authy** (Gratis)
   - Sincroniza entre dispositivos
   - Backup en la nube
   - [Descargar](https://authy.com/download/)

3. **Microsoft Authenticator** (Gratis)
   - Muy completa
   - [iOS](https://apps.apple.com/app/microsoft-authenticator/id983156458) | [Android](https://play.google.com/store/apps/details?id=com.azure.authenticator)

**Mi recomendación:** Empieza con Google Authenticator. Es la más simple.

---

## 📚 Recursos Útiles

- [AWS IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- [Cómo funciona MFA](https://aws.amazon.com/iam/features/mfa/)
- [IAM Policy Simulator](https://policysim.aws.amazon.com/) - Prueba políticas antes de aplicarlas
- [Generador de contraseñas seguras](https://passwordsgenerator.net/)

---

## 🎓 Conceptos Importantes Aprendidos

### 1. Root vs IAM User
- **Root:** Creador de la cuenta, acceso total, úsalo solo para administración crítica
- **IAM User:** Usuario con permisos específicos, úsalo para el trabajo diario

### 2. Políticas (Policies)
Son documentos JSON que definen qué puede hacer un usuario:
```json
{
    "Effect": "Allow",  // Permite
    "Action": "s3:*",   // Todas las acciones de S3
    "Resource": "*"     // En todos los recursos
}
```

### 3. Principio de Mínimo Privilegio
Da solo los permisos necesarios, nada más. Si solo necesitas leer S3, no des permisos de escritura.

### 4. MFA = Multi-Factor Authentication
Combina:
- **Algo que sabes:** Contraseña
- **Algo que tienes:** Teléfono con código temporal

---

## 🚨 Advertencias Importantes

### ⚠️ NUNCA hagas esto:
1. **Compartir credenciales IAM** con nadie
2. **Subir el archivo CSV** a GitHub
3. **Deshabilitar MFA** "porque es molesto"
4. **Usar root** para tareas diarias
5. **Compartir códigos MFA**
6. **Guardar contraseñas en texto plano**

### ✅ SIEMPRE haz esto:
1. **Usa contraseñas únicas** para cada servicio
2. **Habilita MFA** en todo lo que puedas
3. **Revisa permisos** regularmente
4. **Rota contraseñas** cada 90 días
5. **Monitorea facturación** para detectar uso no autorizado

---

## 🔄 Mantenimiento Regular

### Cada mes:
- [ ] Revisar usuarios IAM activos
- [ ] Verificar permisos asignados
- [ ] Comprobar última actividad

### Cada 3 meses:
- [ ] Cambiar contraseña
- [ ] Revisar políticas
- [ ] Auditar CloudTrail logs

### Anualmente:
- [ ] Rotar access keys (si usas CLI/SDK)
- [ ] Revisar arquitectura de seguridad completa

---

**Fecha de configuración:** [Agrega la fecha]  
**Última revisión de seguridad:** [Agrega la fecha]  
**Usuario IAM principal:** `aws-learning-user`  
**MFA dispositivo:** Google Authenticator (iPhone/Android)

---

## 🎯 Por Qué Esto Es Importante para el Proyecto

Con esta configuración de seguridad:
1. ✅ Puedo trabajar tranquilo sabiendo que mi cuenta está protegida
2. ✅ Si alguien obtiene mi contraseña, no puede acceder sin MFA
3. ✅ Tengo control granular sobre qué servicios puedo usar
4. ✅ Puedo practicar y aprender sin riesgo de afectar la cuenta root
5. ✅ Estoy siguiendo las mejores prácticas de la industria

**Esto no es solo para aprendizaje.** En un entorno profesional, estas mismas prácticas protegen sistemas de producción con miles de usuarios y millones en transacciones.
