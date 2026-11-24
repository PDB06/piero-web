# Web de Piero D'Benedetto — reglas para Claude

Esta es la web de Piero (@piero.ia): crea contenido para marcas (fotos, videos y piezas para redes) a partir de los productos reales de cada cliente. La web tiene que vender eso y verse como un estudio de diseño serio, no como una plantilla.

Quien te habla normalmente es **Piero**, el dueño. No es programador. Hablale en español, simple, sin jerga técnica, y explicale lo que cambiaste en palabras que entienda ("cambié el precio del plan Estándar a 490"), no en nombres de archivos.

## Cómo trabajar (importante)

1. **Nunca subas cambios directo a `main`.** `main` es la web publicada. Trabajá siempre en una rama nueva y abrí un Pull Request.
2. El hosting arma una **vista previa** de cada Pull Request con su propio link. Cuando termines, pasale ese link a Piero para que lo mire en el celular y en la compu.
3. Recién cuando Piero diga que está bien, se hace el merge a `main` y la web se actualiza sola en 1-2 minutos. Si Piero te pide que lo publiques, hacé el merge vos.
4. Antes de abrir el PR corré `npm run build` y asegurate de que no falle. Si podés, mirá la página con Playwright (`npm run preview`, puerto 4173) en 1440px y en 390px de ancho.
5. Si un pedido es ambiguo o puede romper algo grande (sacar una sección, cambiar todo el estilo), preguntá antes de hacerlo.

## Dónde está cada cosa

**Lo que más se cambia está en `/content`, en archivos JSON. Si el pedido es de contenido, tocá solo esto:**

| Pedido de Piero | Archivo |
|---|---|
| Precios, planes, piloto | `content/precios.json` |
| Oferta o promo (activar, precio, fecha de fin, textos) | `content/oferta.json` — `active: true` la prende; se apaga sola después de `until` (AAAA-MM-DD). En los textos, `{price}`, `{regular}` y `{until}` se completan solos |
| Cantidad de clientes y piezas, redes, WhatsApp, marcas | `content/numeros.json` |
| Trabajos del carrusel "El trabajo" | `content/trabajos.json` + archivos en `public/trabajos/` |
| Guías gratis, skill IRIS, Mailchimp | `content/recursos.json` + portadas en `public/recursos/img/` |
| Cualquier texto de la web | `content/textos/es.json`, `it.json`, `en.json` |

- **Idiomas:** la web está en español, italiano e inglés. Si cambiás o agregás un texto, hacelo en **los tres** archivos con la misma estructura de claves. Si Piero te lo da en un solo idioma, traducí vos los otros dos con naturalidad (no literal).
- Placeholders como `{price}`, `{h}`, `{date}` se reemplazan solos en el código: no los borres.
- Fotos y videos nuevos: van en `public/`. Pasá las fotos a WebP (máx. ~1600px de ancho) y los videos a MP4 H.264 livianos, con su imagen de portada `.jpg`. No subas archivos de más de 10 MB.

**Código** (solo si el pedido no se resuelve con `/content`):

- `src/App.jsx` — orden de las secciones de la página de inicio
- `src/sections/` — una sección por archivo: Hero, Statement, Work (carrusel), Savia, Game (juego "¿real o IA?"), How (cómo funciona), About (Soy Piero, tarjeta holográfica), Pricing, Faq, Sample (pedí tu muestra), Footer, RecursosPage
- `src/components/` — Nav (menú), Loader (intro tipo chat), Cursor, OfferToast, FloatingButtons (WhatsApp y volver arriba), EmailForm, etc.
- `src/styles/global.css` — todos los estilos
- `recursos/index.html` + `src/recursos.jsx` — la página aparte de Recursos gratis (`/recursos/`)
- `vite.config.js` — si se agrega otra página aparte, sumarla en `build.rollupOptions.input`

Stack: React 18 + Vite 5, GSAP (con ScrollTrigger), Lenis (scroll suave), matter-js (física del footer). No agregues librerías nuevas salvo que sea imprescindible.

## Estilo (no negociable)

- **Minimalista y limpio, estilo suizo.** Fondo papel `--paper #F2F2EF`, tinta `--ink #0C0C0D`, un solo acento azul `--signal #2E3CFF`. Usá siempre las variables de `:root` en `global.css`, nunca colores sueltos.
- **Tipografía:** Geist (grotesca tipo Helvetica) y Geist Mono para detalles chicos. Nada de otras fuentes.
- **Nada que parezca hecho por IA:** sin gradientes violetas, sin brillos ni glassmorphism, sin emojis decorativos, sin íconos genéricos de chispitas/estrellas, sin frases tipo "revolucioná tu marca con IA". La web no se presenta como "IA": habla del resultado para la marca. Los nombres de las guías de Piero que dicen "IA" se respetan como él los escribió.
- **Animaciones suaves e interactivas** (GSAP, easing `--ease`), pero **sin abusar de animaciones atadas al scroll**: ya hay suficientes secciones fijadas.
- Todo tiene que verse bien en celular (390px) y respetar `prefers-reduced-motion`.
- Antes de crear un estilo nuevo, fijate si ya existe uno parecido en `global.css` y reutilizalo.

## Contacto de Piero (para textos y botones)

- WhatsApp: +39 380 639 9359 (se arma desde `content/numeros.json`)
- Instagram: @piero.ia
