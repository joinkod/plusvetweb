# Plus Vet — Documentación del Proyecto Web

> **Cliente:** Plus Vet Clínica Veterinaria  
> **Agencia:** JOINKOD (Join Media Co. + KODIAK)  
> **Estado:** En desarrollo — v1.4 activo en Vercel  
> **Última actualización:** Junio 2026

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
| Light        | `#f4f4f4` | Fondos claros                                  |
| Deep Teal    | `#042827` | Extremo del gradiente                          |

**Gradiente principal:** `linear-gradient(135deg, #22bcbd 0%, #042827 100%)`

> ⚠️ **Nota:** Las secciones con imagen de fondo Ken Burns usan `background: var(--white)` (#ffffff) para garantizar transiciones suaves entre ellas.

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
| Red         | Handle / URL                              |
|-------------|-------------------------------------------|
| Instagram   | https://www.instagram.com/pplusvet/       |
| Facebook    | https://www.facebook.com/pplusvet         |
| TikTok      | https://www.tiktok.com/@pplusvet          |
| WhatsApp    | https://wa.me/573225292764                |

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

> ⚠️ **Pendiente:** Confirmar el nombre y descripción exacta del servicio "Esquimiatría".

---

## 5. Equipo médico

| Campo       | Estado                         |
|-------------|--------------------------------|
| Médico 1    | Dra. María Camila Acevedo      |
| Médico 2    | Dr. Sebastián Florez           |
| Foto 1      | Pendiente (placeholder activo) |
| Foto 2      | Pendiente (placeholder activo) |

**Red de especialistas en convenio** (sugeridos en el sitio):
Cardiología, Dermatología, Neurología, Oftalmología, Ortopedia, Oncología avanzada, Rehabilitación, Endocrinología — **confirmar lista real.**

---

## 6. Secciones del sitio

| # | Sección              | ID ancla       | Estado                           |
|---|----------------------|----------------|----------------------------------|
| — | Header / Nav         | —              | ✅ Completo                      |
| 1 | Hero                 | `#inicio`      | ✅ Completo (falta foto)         |
| 2 | Servicios            | `#servicios`   | ✅ Completo                      |
| 3 | ¿Por qué Plus Vet?   | `#nosotros`    | ✅ Completo                      |
| 4 | Equipo médico        | `#equipo`      | ✅ Completo (faltan fotos)       |
| 5 | Tecnología y Quirófano | `#tecnologia` | ✅ Completo                     |
| 6 | Testimonios          | `#testimonios` | ✅ Completo (placeholders)       |
| 7 | Galería              | `#galeria`     | ✅ Estructura (faltan fotos)     |
| 8 | Blog                 | `#blog`        | ✅ "Próximamente"                |
| 9 | Comunidad            | `#comunidad`   | ✅ Completo                      |
| 10 | Contacto / Formulario| `#contacto`   | ✅ Completo                      |
| — | Footer               | —              | ✅ Completo                      |
| — | Botón multi-canal flotante | —        | ✅ Completo                      |
| — | Botón ir arriba      | —              | ✅ Completo                      |

---

## 7. Efectos visuales implementados

### Hero
- **Gradiente animado** (`background-size: 400% 400%` + keyframe `hero-breathe`)
- **Blob teal** fijo en esquina + **blob naranja** que recorre toda la sección (`blob-orange-travel`, 28s)

### Secciones con imagen de fondo Ken Burns
Aplicado a: `#servicios`, `#equipo`, `#tecnologia`, `#testimonios`, `#galeria`, `#blog`

- Imagen Unsplash via CDN — permite hotlinking
- `opacity: 0.17` + `filter: grayscale(30%)`
- Animación: `kenburns 22s ease-in-out infinite alternate`
- **Fade suave en bordes:** `mask-image` con gradiente `transparent 0% → black 40% → black 60% → transparent 100%`

| Sección       | URL imagen Unsplash              |
|---------------|----------------------------------|
| Servicios     | `photo-1725409796872-8b41e8eca929` |
| Equipo        | `photo-1654895716780-b4664497420d` |
| Tecnología    | `photo-1632236542159-809925d85fc0` |
| Testimonios   | `photo-1728013274420-ed02b1f58887` |
| Galería       | `photo-1733783489145-f3d3ee7a9ccf` |
| Blog          | `photo-1599443015574-be5fe8a05783` |

### Secciones con orbes animados
Aplicado a: `#nosotros`, `#tecnologia`, `#contacto`, `#comunidad`

- Orbes con `radial-gradient` teal y naranja, keyframes `anim-float-1/2/3`

### Google Maps (sección Contacto)
- Embed simple via iframe (sin API key, gratuito)
- Tarjeta flotante sobre el mapa (esquina inferior izquierda) con:
  - Logo de Plus Vet en miniatura
  - Dirección y horario
  - Botón naranja "Cómo llegar" → abre Google Maps con ruta desde ubicación del usuario
  - Animación de flotación suave (mismo keyframe que badges del hero)
  - Se oculta en móvil (`display: none` bajo 768px)

### Botón "Llamar" en nav
- **Móvil:** activa llamada directa (`tel:+573225292764`)
- **Desktop** (detección `navigator.maxTouchPoints === 0`): muestra popover con número y botón "Copiar"

### Botón flotante multi-canal
Reemplaza el antiguo botón de WhatsApp. Posición: esquina inferior derecha.
- Ícono principal: WhatsApp (verde `#25D366`)
- Al hacer clic despliega hacia arriba: WhatsApp, Instagram, Facebook, TikTok, Llamar
- Labels con nombre de cada red aparecen al hacer hover sobre cada botón
- Al hacer clic fuera se cierra automáticamente
- Icono cambia a ✕ cuando está abierto

### Botón "Ir arriba"
- Posición: esquina inferior izquierda (no choca con multi-canal)
- Color teal, ícono flecha arriba
- Aparece con fade-in tras 400px de scroll
- Al hacer hover sube 3px (igual que los otros botones del sitio)

---

## 8. Favicon

| Archivo               | Formato | Tamaño  | Uso                                      |
|-----------------------|---------|---------|------------------------------------------|
| `assets/icon-source.svg` | SVG  | —       | Pestaña del navegador (Chrome/Edge/FF)   |
| `assets/apple-touch-icon.png` | PNG | 180×180 | Pantalla de inicio iPhone/iPad     |

**`theme-color`:** `#22bcbd` — tiñe la barra del navegador en Android Chrome

---

## 9. Tecnologías usadas

| Recurso        | Detalle                                                      |
|----------------|--------------------------------------------------------------|
| HTML5          | Estructura semántica, single file                            |
| CSS3           | Variables, Grid, Flexbox, animaciones, mask-image            |
| JavaScript     | Vanilla JS — scroll, menú, reveal, form, popover, multi-canal |
| Google Fonts   | Poppins — cargado vía CDN                                    |
| Font Awesome   | v6.5 — íconos vía CDN                                        |
| Unsplash CDN   | Imágenes de fondo Ken Burns (hotlink permitido)              |
| Google Maps    | Embed iframe (sin API key)                                   |
| Sin frameworks | No React, no Vue, no dependencias de build                   |

---

## 10. Contenido pendiente

### 🔴 Bloqueantes (necesarios antes de publicar)
- [x] Número de teléfono / WhatsApp real → +57 322 529 2764
- [x] Dirección exacta de la clínica → Carrera 14 # 24 - 31
- [x] Correo electrónico de contacto → pplusvet@gmail.com
- [x] Nombres completos de los 2 médicos → Dra. María Camila Acevedo / Dr. Sebastián Florez
- [x] Handles de redes sociales → @pplusvet en Instagram, Facebook y TikTok
- [ ] Especialidades y bio definitiva de cada médico

### 🟡 Importantes (mejoran significativamente el sitio)
- [ ] Foto principal del hero (clínica o mascota en consulta)
- [ ] Fotos de los médicos
- [ ] Fotos de instalaciones (mín. 5: fachada, consulta, quirófano, hospitalización, equipos)
- [ ] Testimonios reales de clientes

### 🟢 Opcionales / Futuros
- [ ] Confirmar nombre/descripción del servicio "Esquimiatría"
- [ ] Lista definitiva de especialistas en convenio
- [ ] Activar blog con primeros artículos
- [ ] Integrar formulario con backend (EmailJS, Formspree, etc.)
- [ ] SEO: meta tags Open Graph para redes sociales
- [ ] Dominio personalizado (configurar en Vercel → Settings → Domains)

---

## 11. Estructura de archivos

```
plusvetweb/
├── index.html                          # Página principal
├── vercel.json                         # Configuración de despliegue
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
- **Push:** `git push origin main`

### Despliegue
- **Plataforma:** Vercel
- **Trigger:** Automático en cada push a `main`
- **Estado:** ✅ Activo y desplegado

### Flujo de trabajo
```
Claude Code (local) ──► edita index.html / assets
                                    │
                             git push origin main
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

| Versión | Fecha      | Descripción                                                                                        |
|---------|------------|----------------------------------------------------------------------------------------------------|
| v1.0    | Mayo 2025  | Estructura completa, diseño base, contenido placeholder                                            |
| v1.1    | Mayo 2025  | Repo en GitHub, desplegado en Vercel, flujo Claude.ai + Claude Code activo                         |
| v1.2    | Mayo 2026  | Datos reales del cliente, orden médicos, botón llamar con popover desktop, animaciones hero        |
| v1.3    | Mayo 2026  | Ken Burns en 6 secciones, fade suave entre secciones, fondos unificados, favicon SVG + PNG        |
| v1.4    | Junio 2026 | Google Maps con tarjeta flotante, sección Comunidad, botón multi-canal flotante, botón ir arriba  |

---

## 14. Decisiones técnicas y lecciones aprendidas

### Google Maps — embed simple vs API
- **Decisión:** iframe embed (sin API key) en lugar de Maps JavaScript API.
- **Razón:** Para este caso de uso (mostrar ubicación) el iframe es suficiente, gratuito y sin riesgo de costos por tráfico.
- **Tarjeta flotante:** posicionada `absolute` sobre el iframe con `position: relative` en el contenedor. Se oculta en móvil para no tapar el mapa.

### Botón flotante multi-canal
- Reemplaza el botón simple de WhatsApp para centralizar todos los canales de contacto.
- El botón principal mantiene el verde de WhatsApp porque es el canal prioritario del negocio.
- La detección de clic fuera usa `document.addEventListener('click')` con `contains()` — mismo patrón que el popover de teléfono.

### Imágenes de fondo animadas (Ken Burns)
- **Problema:** Pexels, Coverr y Pixabay bloquean hotlinking. Solo Unsplash CDN permite uso directo.
- **Transiciones suaves:** Unificar `background-color` de secciones adyacentes a `var(--white)` elimina el corte de color.

### Stacking cards — EXPLORADO Y DESCARTADO
- `position: sticky; top: 0` + `animation-timeline: view()` es incompatible con secciones más altas que el viewport.
- **No implementar** a menos que las secciones sean rediseñadas para caber en exactamente `100vh`.

### Favicon para iOS
- iOS no acepta SVG para `apple-touch-icon` — requiere PNG de 180×180px.
- El ícono usa la cruz vectorial extraída del logo (el logo completo queda ilegible a ese tamaño).

---

## 15. Instrucción de mantenimiento del documento

> 🤖 **Para Claude:** Al finalizar cada conversación sobre este proyecto, actualiza este archivo automáticamente sin esperar que te lo pida. Refleja cualquier cambio relevante: secciones modificadas, contenido agregado, decisiones de diseño, pendientes resueltos o nuevos. Luego sube el archivo actualizado a GitHub.

---

*Proyecto desarrollado por JOINKOD — Join Media Co. + KODIAK*
