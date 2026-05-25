# Plus Vet — Documentación del Proyecto Web

> **Cliente:** Plus Vet Clínica Veterinaria  
> **Agencia:** JOINKOD (Join Media Co. + KODIAK)  
> **Estado:** En desarrollo — v1.1 activo en Vercel  
> **Última actualización:** Mayo 2025

---

## 1. Descripción del proyecto

Sitio web institucional para **Plus Vet**, clínica veterinaria especializada en perros y gatos ubicada en **Santa Rosa de Cabal, Risaralda, Colombia**.

El sitio es una página única (single-page) con navegación por anclas, diseñada para ser publicada en Vercel vía GitHub.

**Objetivos del sitio:**
- Presentar los servicios de la clínica con claridad y credibilidad
- Generar solicitudes de citas a través del formulario de contacto
- Posicionar la clínica como referente de calidad en su región
- Comunicar los diferenciales: quirófano certificado, tecnología avanzada, hospitalización 24h, red de especialistas

---

## 2. Identidad visual

### Paleta de colores

| Nombre       | Hex       | Uso principal                                  |
|--------------|-----------|------------------------------------------------|
| Teal         | `#22bcbd` | Color primario — CTAs, íconos, acentos         |
| Orange       | `#ffa018` | Color secundario — acento, urgencia, destacados|
| Gray         | `#7f7f7f` | Tipografía secundaria, subtítulos              |
| Dark         | `#191919` | Fondos oscuros, texto principal                |
| Light        | `#f4f4f4` | Fondos claros, secciones alternas              |
| Deep Teal    | `#042827` | Extremo del gradiente                          |

**Gradiente principal:** `linear-gradient(135deg, #22bcbd 0%, #042827 100%)`

### Tipografía

- **Familia:** Poppins (Google Fonts)
- **Pesos usados:** 300, 400, 500, 600, 700, 800, 900
- **Cargada vía:** Google Fonts CDN

### Logos disponibles

Los archivos SVG están en la carpeta `/assets/`:

| Archivo                               | Uso recomendado                        |
|---------------------------------------|----------------------------------------|
| `plusvet-horizontal-fullcolor.svg`    | Header en fondos blancos/claros        |
| `plusvet-horizontal-blanco.svg`       | Footer, hero, fondos oscuros/gradiente |
| `plusvet-horizontal-negro.svg`        | Documentos impresos, fondos blancos    |
| `plusvet-vertical-fullcolor.svg`      | Redes sociales, perfil                 |
| `plusvet-vertical-blanco.svg`         | Fondos oscuros formato cuadrado        |
| `plusvet-vertical-negro.svg`          | Impresión, variante vertical           |

---

## 3. Información del negocio

| Campo           | Dato                                         |
|-----------------|----------------------------------------------|
| Nombre          | Plus Vet Clínica Veterinaria                 |
| Ciudad          | Santa Rosa de Cabal, Risaralda, Colombia     |
| Dirección       | Carrera 14 # 24 - 31                         |
| Teléfono/WA     | +57 322 529 2764                             |
| Correo          | pplusvet@gmail.com                           |
| Horario         | Lunes a Sábado: 8:00 am – 9:00 pm           |
| Hospitalización | 24 horas (a puerta cerrada)                  |
| Pacientes       | Solo perros y gatos                          |

### Redes sociales
| Red         | Handle / URL              |
|-------------|---------------------------|
| Instagram   | **Por confirmar**         |
| Facebook    | **Por confirmar**         |
| WhatsApp    | **Por confirmar**         |
| TikTok      | **Por confirmar**         |

---

## 4. Servicios

| Servicio                         | Ícono FA usado          | Notas                                      |
|----------------------------------|-------------------------|--------------------------------------------|
| Medicina General                 | `fa-stethoscope`        |                                            |
| Cirugía                          | `fa-syringe`            | Quirófano propio certificado               |
| Esquimiatría                     | `fa-scissors`           | ⚠️ Confirmar nombre y descripción exacta   |
| Pediatría                        | `fa-baby`               | Cachorros y gatitos                        |
| Medicina Interna y Hospitalización | `fa-house-medical`    | Incluye hospitalización 24h                |
| Imágenes Diagnósticas            | `fa-x-ray`              | Rayos X + Ecografía                        |
| Oncología                        | `fa-microscope`         |                                            |

> ⚠️ **Pendiente:** Confirmar el nombre y descripción del servicio "Esquimniatría" — puede ser grooming profesional, estética veterinaria u otra especialidad.

---

## 5. Equipo médico

| Campo       | Estado           |
|-------------|------------------|
| Médico 1    | Dra. María Camila Acevedo |
| Médico 2    | Dr. Sebastián Florez      |
| Foto 1      | Pendiente (placeholder activo) |
| Foto 2      | Pendiente (placeholder activo) |

**Red de especialistas en convenio** (sugeridos en el sitio):
Cardiología, Dermatología, Neurología, Oftalmología, Ortopedia, Oncología avanzada, Rehabilitación, Endocrinología — **confirmar lista real.**

---

## 6. Secciones del sitio

| # | Sección              | ID ancla       | Estado         |
|---|----------------------|----------------|----------------|
| — | Header / Nav         | —              | ✅ Completo    |
| 1 | Hero                 | `#inicio`      | ✅ Completo (falta foto) |
| 2 | Servicios            | `#servicios`   | ✅ Completo    |
| 3 | ¿Por qué Plus Vet?   | `#nosotros`    | ✅ Completo    |
| 4 | Equipo médico        | `#equipo`      | ✅ Completo (faltan datos reales) |
| 5 | Tecnología y Quirófano | `#tecnologia` | ✅ Completo   |
| 6 | Testimonios          | `#testimonios` | ✅ Completo (placeholders) |
| 7 | Galería              | `#galeria`     | ✅ Estructura (faltan fotos) |
| 8 | Blog                 | `#blog`        | ✅ "Próximamente" |
| 9 | Contacto / Formulario| `#contacto`    | ✅ Completo (faltan datos) |
| — | Footer               | —              | ✅ Completo    |
| — | Botón flotante WA    | —              | ✅ Completo (falta número) |

---

## 7. Tecnologías usadas

| Recurso        | Detalle                                      |
|----------------|----------------------------------------------|
| HTML5          | Estructura semántica, single file            |
| CSS3           | Variables, Grid, Flexbox, animaciones        |
| JavaScript     | Vanilla JS — scroll, menú, reveal, form      |
| Google Fonts   | Poppins — cargado vía CDN                    |
| Font Awesome   | v6.5 — íconos vía CDN                        |
| Sin frameworks | No React, no Vue, no dependencias de build   |

---

## 8. Contenido pendiente

### 🔴 Bloqueantes (necesarios antes de publicar)
- [x] Número de teléfono / WhatsApp real → +57 322 529 2764
- [x] Dirección exacta de la clínica → Carrera 14 # 24 - 31
- [x] Correo electrónico de contacto → pplusvet@gmail.com
- [x] Nombres completos de los 2 médicos → Dra. María Camila Acevedo / Dr. Sebastián Florez
- [ ] Especialidades y bio de cada médico

### 🟡 Importantes (mejoran significativamente el sitio)
- [ ] Foto principal del hero (clínica o mascota en consulta)
- [ ] Fotos de los médicos
- [ ] Fotos de instalaciones (mín. 5: fachada, consulta, quirófano, hospitalización, equipos)
- [ ] Handles de redes sociales
- [ ] Testimonios reales de clientes

### 🟢 Opcionales / Futuros
- [ ] Confirmar nombre/descripción del servicio "Esquimniatría"
- [ ] Lista definitiva de especialistas en convenio
- [ ] Activar blog con primeros artículos
- [ ] Integrar formulario con backend (EmailJS, Formspree, etc.)
- [ ] Google Maps embed en sección de contacto
- [ ] SEO: meta tags Open Graph para redes sociales

---

## 9. Estructura de archivos

```
plusvet/
├── index.html                          # Página principal
├── vercel.json                         # Configuración de despliegue
├── .gitignore                          # Archivos excluidos de Git
├── PLUSVET_PROJECT.md                  # Este documento
└── assets/
    ├── plusvet-horizontal-fullcolor.svg
    ├── plusvet-horizontal-blanco.svg
    ├── plusvet-horizontal-negro.svg
    ├── plusvet-vertical-fullcolor.svg
    ├── plusvet-vertical-blanco.svg
    └── plusvet-vertical-negro.svg
```

> 📁 **Al agregar fotos**, crear subcarpeta `assets/img/` y referenciarlas desde el HTML.

---

## 10. Infraestructura y flujo de trabajo

### Repositorio
- **GitHub:** `github.com/joinkod/plusvetweb`
- **Rama principal:** `main`
- **Repo clonado localmente** en carpeta de trabajo del equipo JOINKOD

### Despliegue
- **Plataforma:** Vercel
- **Trigger:** Automático en cada push a `main`
- **Estado:** ✅ Activo y desplegado

### Dominio personalizado (pendiente)
- En Vercel: Settings → Domains → Add Domain
- Configurar DNS según instrucciones de Vercel

### Flujo de trabajo
```
Claude.ai (chat) ──► genera archivos / documentación
Claude Code (local) ──► commits y push a main
                                    │
                                    ▼
                        GitHub (joinkod/plusvetweb)
                                    │
                                    ▼
                        Vercel (deploy automático)
```

### Cómo iniciar una nueva sesión en Claude.ai
Al inicio de cada conversación escribir:
> *"Lee el archivo `PLUSVET_PROJECT.md` del repositorio `joinkod/plusvetweb` en GitHub y úsalo como contexto para continuar trabajando en este proyecto."*

---

## 11. Historial de versiones

| Versión | Fecha      | Descripción                                                                |
|---------|------------|----------------------------------------------------------------------------|
| v1.0    | Mayo 2025  | Estructura completa, diseño base, contenido placeholder                    |
| v1.1    | Mayo 2025  | Repo en GitHub, desplegado en Vercel, flujo Claude.ai + Claude Code activo |

---

## 12. Instrucción de mantenimiento del documento

> 🤖 **Para Claude:** Al finalizar cada conversación sobre este proyecto, actualiza este archivo automáticamente sin esperar que te lo pida. Refleja cualquier cambio relevante: secciones modificadas, contenido agregado, decisiones de diseño, pendientes resueltos o nuevos. Luego sube el archivo actualizado a GitHub para que el proyecto se mantenga al día.

---

*Proyecto desarrollado por JOINKOD — Join Media Co. + KODIAK*
