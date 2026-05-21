# Vilanova Consultores — Landing Page

Landing premium de una sola página para **Vilanova Consultores en Fianzas y Seguros**, despacho mexicano con 70 años de experiencia y 3 generaciones.

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (paleta institucional configurada en `tailwind.config.js`)
- **lucide-react** para iconografía
- **framer-motion** instalado (opcional, listo para extensiones futuras)
- Animaciones de scroll con `IntersectionObserver` nativo (sin dependencia adicional)

## Estructura

```
src/
├─ App.jsx                  # Composición de la landing
├─ main.jsx
├─ index.css                # Tailwind + utilidades de marca
├─ data/
│  ├─ siteConfig.js         # Teléfonos, direcciones, WhatsApp, mapa
│  └─ services.js           # Líneas de fianzas, seguros, timeline, socios
├─ hooks/
│  ├─ useReveal.js          # Fade-up al entrar en viewport
│  └─ useCounter.js         # Cuenta animada de cifras
└─ components/
   ├─ Header.jsx            # Sticky con anclas y CTA
   ├─ Hero.jsx              # 70 años · 3 generaciones · CTA + WhatsApp
   ├─ AuthorityCounter.jsx  # Contadores animados
   ├─ About.jsx             # Storytelling
   ├─ Timeline.jsx          # Tres generaciones
   ├─ ServicesGrid.jsx      # Grid reutilizable (fianzas y seguros)
   ├─ ValueAdd.jsx          # Diferenciadores
   ├─ Partners.jsx          # Logos de afianzadoras y aseguradoras
   ├─ LeadForm.jsx          # Formulario de lead calificado (sin <form> nativo)
   ├─ Contact.jsx           # Oficinas + mapa + formulario
   ├─ Footer.jsx
   ├─ WhatsAppFloat.jsx     # Botón flotante siempre visible
   └─ Logo.jsx
```

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Despliegue en Vercel

El proyecto incluye `vercel.json`. Para desplegar:

1. Sube el repositorio a GitHub.
2. En [Vercel](https://vercel.com) elige *Import Project* y selecciona el repo.
3. Vercel detectará Vite automáticamente. Sin variables de entorno requeridas.
4. Deploy.

## Personalización

### Datos de contacto

Edita `src/data/siteConfig.js`:

- `whatsappNumber` — número en formato internacional sin signos (ej. `5216141234567`).
- `email` — correo corporativo.
- `locations` — direcciones y teléfonos reales de las 4 oficinas.
- `mapEmbedUrl` — URL `embed` de Google Maps del corporativo (Google Maps → Compartir → Insertar un mapa → copiar `src`).

### Servicios

Edita `src/data/services.js` para añadir/modificar líneas, ajustar descripciones, o reemplazar la línea de tiempo.

### Imágenes

- **Hero**: actualmente apunta a una imagen institucional de Unsplash en `src/components/Hero.jsx`. Sustitúyela por una fotografía propia del despacho subiéndola a `public/hero.jpg` y reemplazando la URL.
- **Logos de socios**: hoy son texto placeholder. Sustituye `PartnerLogo` en `src/components/Partners.jsx` por `<img src="/partners/chubb.svg" alt="Chubb" />` etc.
- **OG image**: agrega `public/og-image.jpg` (1200×630) para previews en redes sociales.

### Paleta

La paleta institucional está definida en `tailwind.config.js`:

- `navy` — azul marino profundo (primario)
- `petrol` — verde petróleo (secundario institucional)
- `gold` — acento dorado/bronce
- `cream` — fondos hueso

## Notas

- El formulario de lead **no usa `<form>` nativo**: opera con `onClick`/`onChange` y abre WhatsApp con la solicitud pre-formada. Si necesitas integrarlo con un backend (HubSpot, Mailchimp, CRM propio), conéctalo en `handleSubmit` dentro de `LeadForm.jsx`.
- El sitio es **mobile-first**, totalmente responsivo, y respeta `prefers-reduced-motion` en las propiedades CSS naturales.
- SEO: `title`, `og:title`, `description`, `twitter:card` y datos estructurados `ProfessionalService` ya están configurados en `index.html`.
