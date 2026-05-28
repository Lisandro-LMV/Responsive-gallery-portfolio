# 📋 PLANTILLA para Documentar Nuevos Niveles

Usa esta plantilla cuando completes el Nivel 3, 4, o cualquier nivel adicional.

---

# 🎯 Nivel [NÚMERO] — [NOMBRE DEL NIVEL]

## 🎯 Objetivo del Nivel
[Explica en 2-3 líneas qué se va a lograr en este nivel]

**Concepto:** [Explica en términos simples qué es este servicio/concepto]

**Servicios AWS utilizados:** [Lista de servicios]

**Capa gratuita:** [Detalles de qué incluye gratis]

---

## 📝 Pasos Realizados

### 1. [Nombre del primer paso]

**¿Qué es [concepto]?** [Explicación simple]

**Qué hice:**
1. [Paso detallado 1]
2. [Paso detallado 2]
3. [Paso detallado 3]

**Por qué:** [Explicación de por qué este paso es necesario]

**Resultado:** [Qué se logró]

![Descripción de imagen](Screenshots/Screenshots%20level%20[N]/imagen-1.png)

---

### 2. [Nombre del segundo paso]

**Qué hice:**
1. [Paso detallado 1]
2. [Paso detallado 2]
3. [Paso detallado 3]

**Por qué:** [Explicación]

**Resultado:** [Qué se logró]

![Descripción de imagen](Screenshots/Screenshots%20level%20[N]/imagen-2.png)

---

[Continúa con más pasos según sea necesario...]

---

## ⚙️ Configuraciones Finales

| Configuración | Valor |
|--------------|-------|
| **Nombre config 1** | `valor` |
| **Nombre config 2** | `valor` |
| **Nombre config 3** | `valor` |

---

## 🔧 Problemas Encontrados y Soluciones

### Problema 1: [Descripción del problema]
**Causa:** [Por qué ocurrió]

**Solución:** 
1. [Paso para resolverlo]
2. [Otro paso]

### Problema 2: [Otro problema]
**Causa:** [Por qué ocurrió]

**Solución:** 
1. [Paso para resolverlo]

---

## 💰 Costos Estimados

Con la capa gratuita de AWS:
- **[Recurso 1]:** [Detalles]
- **[Recurso 2]:** [Detalles]

**Estimado para este proyecto:** $X.XX/mes

---

## ✅ Lista de Verificación Final

- [ ] [Tarea 1 completada]
- [ ] [Tarea 2 completada]
- [ ] [Tarea 3 completada]
- [ ] [Todo funciona correctamente]
- [ ] [Screenshots tomados]
- [ ] [Documentación actualizada]

---

## 🚨 Notas de Seguridad

- ✅ [Aspecto de seguridad implementado]
- ⚠️ [Advertencia o consideración de seguridad]

---

## 📚 Recursos Útiles

- [Link a documentación oficial]
- [Tutorial recomendado]
- [Otro recurso útil]

---

## 🧪 Cómo Probar que Todo Funciona

### Test 1: [Nombre del test]
```
1. [Paso de prueba]
2. [Resultado esperado]
```

### Test 2: [Otro test]
```
1. [Paso de prueba]
2. [Resultado esperado]
```

---

## ➡️ Próximo Nivel

**Nivel [N+1]:** [Nombre del próximo nivel]
- [Qué se hará]
- [Qué servicios se usarán]

---

**Fecha de completado:** [DD/MM/YYYY]  
**Tiempo invertido:** [X horas/minutos]  
**Dificultad:** ⭐⭐⭐☆☆ ([Fácil/Intermedio/Difícil])

---

# 📸 CHECKLIST DE SCREENSHOTS

Antes de terminar cada nivel, asegúrate de tomar estas capturas:

## Screenshots Generales (Para TODOS los niveles)

- [ ] **Servicio en la consola AWS**
  - Vista principal del servicio
  - Lista de recursos creados

- [ ] **Configuración principal**
  - Pantalla de settings/configuración
  - Valores importantes configurados

- [ ] **Estado final**
  - Recurso en estado "Running" / "Active" / "Enabled"
  - IDs de recursos generados

- [ ] **Prueba funcionando**
  - Captura del resultado final trabajando
  - URLs generadas
  - Output del servicio

- [ ] **Costos/Facturación (opcional)**
  - Panel de billing mostrando que está en free tier

---

## Screenshots Específicos por Tipo de Servicio

### Para servicios de COMPUTE (Lambda, EC2, etc.):
- [ ] Función/instancia creada
- [ ] Código o configuración
- [ ] Logs de ejecución
- [ ] Métricas básicas

### Para servicios de STORAGE (S3, DynamoDB, etc.):
- [ ] Recurso creado
- [ ] Contenido almacenado
- [ ] Políticas de acceso
- [ ] Permisos configurados

### Para servicios de NETWORKING (CloudFront, API Gateway, etc.):
- [ ] Distribución/API creada
- [ ] Endpoints generados
- [ ] Configuración de rutas
- [ ] Prueba de conectividad

### Para servicios de MESSAGING (SES, SNS, SQS, etc.):
- [ ] Servicio configurado
- [ ] Identidades verificadas (si aplica)
- [ ] Ejemplo de mensaje enviado/recibido
- [ ] Cola o topic creado

### Para servicios de MONITORING (CloudWatch, etc.):
- [ ] Dashboard configurado
- [ ] Métricas visibles
- [ ] Alarmas creadas
- [ ] Logs capturados

---

## Nomenclatura de Archivos

Guarda tus screenshots con nombres descriptivos:

```
[XX]-[descripcion].png

Ejemplos:
01-lambda-creada.png
02-codigo-funcion.png
03-ses-identidad-verificada.png
04-email-recibido.png
05-resultado-final.png
```

---

## Ubicación de Screenshots

```
Documentos-aws/
└── Screenshots/
    └── Screenshots level [N]/
        ├── 01-[descripcion].png
        ├── 02-[descripcion].png
        ├── 03-[descripcion].png
        └── ...
```

---

# 🎯 PROCESO COMPLETO: Del Trabajo a la Documentación

## Fase 1: MIENTRAS TRABAJAS

1. **Antes de empezar:**
   - [ ] Abre un documento de notas (notepad, notion, etc.)
   - [ ] Anota cada paso que vas a hacer
   - [ ] Crea la carpeta `Screenshots/Screenshots level [N]/`

2. **Durante el trabajo:**
   - [ ] Toma screenshots ANTES y DESPUÉS de cada cambio importante
   - [ ] Anota cualquier error que encuentres
   - [ ] Guarda comandos o configuraciones que uses
   - [ ] Copia URLs generadas

3. **Al terminar:**
   - [ ] Verifica que todo funcione
   - [ ] Toma screenshot final
   - [ ] Anota tiempo invertido

---

## Fase 2: DOCUMENTACIÓN

1. **Organización:**
   - [ ] Copia esta plantilla
   - [ ] Renombra a `NIVEL-[N].md`
   - [ ] Mueve screenshots a `Screenshots/Screenshots level [N]/`
   - [ ] Renombra las capturas: `01-descripcion.png`, `02-descripcion.png`, etc.

2. **Escritura:**
   - [ ] Completa cada sección de la plantilla
   - [ ] Reemplaza [PLACEHOLDERS] con info real
   - [ ] Agrega screenshots donde corresponda
   - [ ] Revisa que todo esté claro

3. **Revisión:**
   - [ ] Lee todo como si fueras un principiante
   - [ ] ¿Tiene sentido cada paso?
   - [ ] ¿Faltan capturas de pantalla?
   - [ ] ¿Los enlaces a las imágenes funcionan?

---

## Fase 3: PUBLICACIÓN

1. **Actualizar índice:**
   - [ ] Abre `README-AWS.md`
   - [ ] Marca el nuevo nivel como ✅ Completado
   - [ ] Agrega link a la nueva documentación
   - [ ] Actualiza la sección de arquitectura si cambió

2. **Subir a GitHub:**
   - [ ] Opción Web: Arrastra archivos a GitHub
   - [ ] O Git: `git add Documentos-aws/`
   - [ ] Commit: `git commit -m "📚 Docs: Nivel [N] completado"`
   - [ ] Push: `git push origin main`

3. **Verificación:**
   - [ ] Abre el repositorio en GitHub
   - [ ] Verifica que se vea todo bien
   - [ ] Prueba los enlaces
   - [ ] Verifica que las imágenes carguen

---

# 💡 TIPS PARA BUENA DOCUMENTACIÓN

## ✅ SÍ hacer:

- ✅ **Escribe para tu yo del futuro:** Dentro de 6 meses, ¿entenderás esto?
- ✅ **Explica el "por qué"**, no solo el "qué"
- ✅ **Usa analogías simples** para conceptos complejos
- ✅ **Incluye código/comandos completos**, no fragmentos
- ✅ **Documenta errores y soluciones** (los más valiosos)
- ✅ **Sé específico:** "Haz clic en el botón azul" > "Configura el servicio"
- ✅ **Numera los pasos** para fácil seguimiento
- ✅ **Agrega contexto** a las capturas de pantalla

## ❌ NO hacer:

- ❌ Asumir conocimiento previo sin explicar
- ❌ Omitir pasos "obvios"
- ❌ Usar jerga sin definirla
- ❌ Screenshots sin descripción
- ❌ Comandos sin explicación de qué hacen
- ❌ Documentar después de varios días (se olvidan detalles)

---

# 📝 CHECKLIST DE CALIDAD

Antes de publicar, verifica:

## Contenido
- [ ] Cada paso está numerado y es claro
- [ ] Hay explicación del "por qué" de cada cosa
- [ ] Los conceptos técnicos están definidos
- [ ] Los problemas encontrados están documentados

## Screenshots
- [ ] Todas las capturas tienen descripción
- [ ] Se ven claramente (no borrosas)
- [ ] Muestran información relevante
- [ ] Nombres de archivo son descriptivos

## Formato
- [ ] Títulos y subtítulos correctos (# ## ###)
- [ ] Links funcionan
- [ ] Rutas de imágenes correctas (con %20 para espacios)
- [ ] Tablas bien formateadas
- [ ] Bloques de código tienen sintaxis

## Utilidad
- [ ] Un principiante podría seguir esto
- [ ] Está completo (no faltan pasos)
- [ ] Los comandos/configs se pueden copiar
- [ ] Hay suficiente contexto

---

# 🎨 MARKDOWN RÁPIDO

```markdown
# Título principal
## Subtítulo
### Sub-subtítulo

**Negrita**
*Cursiva*
`código inline`

[Texto del link](URL)

![Texto alt de imagen](ruta/a/imagen.png)

- Lista
- Con viñetas

1. Lista
2. Numerada

```bloque de código```

| Tabla | Columna 2 |
|-------|-----------|
| Dato  | Otro dato |

> Cita o nota importante

---  ← Línea horizontal

✅ ❌ ⚠️ 🎯 📚 🔧 💰  ← Emojis para visual
```

---

# 🚀 ¡LISTOS PARA EL NIVEL 3!

Cuando estés listo para documentar el Nivel 3 (Lambda + SES):

1. **Copia esta plantilla**
2. **Renómbrala:** `NIVEL-3.md`
3. **Crea la carpeta:** `Screenshots/Screenshots level 3/`
4. **Mientras trabajas:** toma screenshots y notas
5. **Al terminar:** llena la plantilla
6. **Renombra las capturas:** `01-descripcion.png`, `02-descripcion.png`, etc.
7. **Sube a GitHub** siguiendo la guía
8. **Actualiza** el `README-AWS.md`

**¡Y repite para cada nivel!**

---

_Plantilla creada para documentación consistente del proyecto AWS_
