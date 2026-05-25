# Plus Vet — Documentación del Proyecto Web

> **Cliente:** Plus Vet Clínica Veterinaria  
> **Agencia:** JOINKOD (Join Media Co. + KODIAK)  
> **Estado:** En desarrollo — v1.3 activo en Vercel  
> **Última actualización:** Mayo 2026

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
| Light        | `#f4f4f4` | Fondos claros (secciones why/contact)          |
| Deep Teal    | `#042827` | Extremo del gradiente                          |

**Gradiente principal:** `linear-gradient(135deg, #22bcbd 0%, #042827 100%)`

> ⚠️ **Nota:** Las secciones con imagen de fondo Ken Burns (services, team, technology, testimonials, gallery, blog) usan `background: var(--white)` (#ffffff) para garantizar transiciones suaves entre ellas.

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
| `icon-source.svg`                     | Favicon — cruz del logo, fondo gradiente|
| `apple-touch-icon.png`                | Ícono pantalla de inicio iPhone/iPad   |

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

> ⚠️ **Pendiente:** Confirmar el nombre y descripción del servicio "Esquimniatría".

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
| 9 | Contacto / Formulario| `#contacto`    | ✅ Completo    |
| — | Footer               | —              | ✅ Completo    |
| — | Botón flotante WA    | —              | ✅ Completo    |

---

## 7. Efectos visuales implementados

### Hero
- **Gradiente animado** (`background-size: 400% 400%` + keyframe `hero-breathe`)
- **Blob teal** fijo en esquina + **blob naranja** que recorre toda la sección (`blob-orange-travel`, 28s, con keyframes en `vw`/`vh`)

### Secciones con imagen de fondo Ken Burns
Aplicado a: `#servicios`, `#equipo`, `#tecnologia`, `#testimonios`, `#galeria`, `#blog`

- Imagen Unsplash via CDN (`images.unsplash.com`) — permite hotlinking
- `opacity: 0.17` + `filter: grayscale(30%)`
- Animación: `kenburns 22s ease-in-out infinite alternate` con `scale(1.14) translate(-2%, -2%)`
- **Fade suave en bordes** (superior e inferior): `mask-image` con gradiente `transparent 0% → black 40% → black 60% → transparent 100%`
- Fondos unificados a `var(--white)` para evitar cortes de color entre secciones adyacentes

| Sección       | URL imagen Unsplash                                                                 |
|---------------|-------------------------------------------------------------------------------------|
| Servicios     | `photo-1725409796872-8b41e8eca929`                                                  |
| Equipo        | `photo-1654895716780-b4664497420d`                                                  |
| Tecnología    | `photo-1632236542159-809925d85fc0`                                                  |
| Testimonios   | `photo-1728013274420-ed02b1f58887`                                                  |
| Galería       | `photo-1733783489145-f3d3ee7a9ccf`                                                  |
| Blog          | `photo-1599443015574-be5fe8a05783`                                                  |

### Secciones con orbes animados
Aplicado a: `#nosotros`, `#tecnologia`, `#contacto`

- Orbes con `radial-gradient` teal y naranja
- Keyframes `anim-float-1/2/3` con `translate` suave

### Botón "Llamar" en nav
- **Móvil**: activa llamada directa (`tel:+573225292764`)
- **Desktop** (detección `navigator.maxTouchPoints === 0`): muestra popover con número y botón "Copiar"

---

## 8. Favicon

| Archivo               | Formato | Tamaño  | Uso                                      |
|-----------------------|---------|---------|------------------------------------------|
| `assets/icon-source.svg` | SVG  | —       | Pestaña del navegador (Chrome/Edge/FF)   |
| `assets/apple-touch-icon.png` | PNG | 180×180 | Pantalla de inicio iPhone/iPad     |

**Diseño del ícono:**
- Fondo: gradiente `#22bcbd → #042827` (diagonal top-left → bottom-right)
- Símbolo: la cruz/plus del logo original de Plus Vet (path vectorial extraído del SVG), en blanco
- Generado con `@resvg/resvg-js-cli` desde el SVG fuente

**`theme-color`:** `#22bcbd` — tiñe la barra del navegador en Android Chrome

---

## 9. Tecnologías usadas

| Recurso        | Detalle                                      |
|----------------|----------------------------------------------|
| HTML5          | Estructura semántica, single file            |
| CSS3           | Variables, Grid, Flexbox, animaciones, mask-image |
| JavaScript     | Vanilla JS — scroll, menú, reveal, form, popover tel |
| Google Fonts   | Poppins — cargado vía CDN                    |
| Font Awesome   | v6.5 — íconos vía CDN                        |
| Unsplash CDN   | Imágenes de fondo Ken Burns (hotlink permitido) |
| Sin frameworks | No React, no Vue, no dependencias de build   |

---

## 10. Contenido pendiente

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
- [ ] Dominio personalizado (configurar en Vercel → Settings → Domains)

---

## 11. Estructura de archivos

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
    ├── icon-source.svg                 # Favicon SVG (cruz + gradiente)
    └── apple-touch-icon.png            # Ícono iOS 180×180px
```

> 📁 **Al agregar fotos**, crear subcarpeta `assets/img/` y referenciarlas desde el HTML.

---

## 12. Infraestructura y flujo de trabajo

### Repositorio
- **GitHub:** `github.com/joinkod/plusvetweb`
- **Rama principal:** `main`
- **Rama local:** `master` → siempre hacer push con `git push origin master:main`

> ⚠️ **IMPORTANTE:** Vercel escucha la rama `main`. El trabajo local está en `master`. Siempre usar `git push origin master:main` — nunca `git push origin master`.

### Despliegue
- **Plataforma:** Vercel
- **Trigger:** Automático en cada push a `main`
- **Estado:** ✅ Activo y desplegado

### Flujo de trabajo
```
Claude Code (local) ──► edita index.html / assets
                                    │
                             git push origin master:main
                                    │
                                    ▼
                        GitHub (joinkod/plusvetweb) → rama main
                                    │
                                    ▼
                        Vercel (deploy automático)
```

### Cómo iniciar una nueva sesión en Claude Code
Al inicio de cada conversación escribir:
> *"Lee el archivo `PLUSVET_PROJECT.md` y úsalo como contexto para continuar trabajando en este proyecto."*

---

## 13. Historial de versiones

| Versión | Fecha      | Descripción                                                                                  |
|---------|------------|----------------------------------------------------------------------------------------------|
| v1.0    | Mayo 2025  | Estructura completa, diseño base, contenido placeholder                                      |
| v1.1    | Mayo 2025  | Repo en GitHub, desplegado en Vercel, flujo Claude.ai + Claude Code activo                   |
| v1.2    | Mayo 2026  | Datos reales del cliente, orden médicos, botón llamar con popover desktop, animaciones hero  |
| v1.3    | Mayo 2026  | Ken Burns en 6 secciones, fade suave entre secciones, fondos unificados, favicon SVG + PNG  |

---

## 14. Decisiones técnicas y lecciones aprendidas

### Imágenes de fondo animadas (Ken Burns)
- **Problema:** Pexels, Coverr y Pixabay bloquean hotlinking. Solo Unsplash CDN (`images.unsplash.com`) permite uso directo.
- **Solución:** Imágenes gratuitas de Unsplash referenciadas por CDN.
- **Transiciones suaves:** Unificar el `background-color` de todas las secciones adyacentes a `var(--white)` elimina el corte de color. El `mask-image` solo suaviza la imagen, no el color de fondo.

### Stacking cards (scroll-driven animations) — EXPLORADO Y DESCARTADO
- **Efecto intentado:** `position: sticky; top: 0` + `animation-timeline: view()` para que secciones se apilen como cartas al hacer scroll.
- **Problemas encontrados:**
  1. `position: sticky; top: 0` en secciones más altas que el viewport hace que solo sea visible el primer `100vh` de contenido — el resto queda fuera de alcance.
  2. `filter: brightness()` en animaciones scroll-driven causa jank (no es GPU-composited como `transform`).
  3. `box-shadow` con blur grande (40px) en 8 secciones simultáneas es costoso para la GPU.
- **Conclusión:** El efecto stacking cards es incompatible con secciones de contenido variable (más alto que el viewport). Funciona solo cuando cada "carta" mide exactamente `100vh`. **No implementar** a menos que las secciones sean rediseñadas para caber en un viewport.
- **Safari fallback:** `@supports (animation-timeline: scroll())` — Safari ignora el bloque completo correctamente.

### Favicon para iOS
- iOS **no acepta SVG** para `apple-touch-icon` — requiere PNG de exactamente 180×180px.
- Generado con `npx @resvg/resvg-js-cli` desde un SVG fuente personalizado.
- El ícono usa la cruz vectorial extraída del logo original (no el logo completo — queda ilegible a 180px).

---

## 15. Instrucción de mantenimiento del documento

> 🤖 **Para Claude:** Al finalizar cada conversación sobre este proyecto, actualiza este archivo automáticamente sin esperar que te lo pida. Refleja cualquier cambio relevante: secciones modificadas, contenido agregado, decisiones de diseño, pendientes resueltos o nuevos. Luego sube el archivo actualizado a GitHub.

---

*Proyecto desarrollado por JOINKOD — Join Media Co. + KODIAK*
