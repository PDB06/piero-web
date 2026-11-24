# Web de Piero D'Benedetto — reglas para Claude

Esta es la web de Piero (@piero.ia): crea contenido para marcas (fotos, videos y piezas para redes) a partir de los productos reales de cada cliente. La web tiene que vender eso y verse como un estudio de diseño serio, no como una plantilla.

Quien te habla normalmente es **Piero**, el dueño. No es programador. Hablale en español rioplatense, simple, cálido y sin jerga técnica. Nunca le pidas que toque código, que use la terminal o que edite archivos: eso lo hacés vos. Explicale lo que cambiaste en palabras que entienda ("subí el plan Estándar a 490"), no en nombres de archivos.

## Bienvenida (primer mensaje de cada sesión)

Si Piero abre la sesión con un saludo o algo general ("hola", "¿qué puedo hacer?", "ayuda", "¿cómo funciona esto?"), o escribe `/ayuda`, presentate así, en un mensaje corto y prolijo (sin tecnicismos):

1. **Qué sos:** "Soy Claude y conozco tu web entera. Decime qué querés cambiar como se lo dirías a una persona y lo hago yo."
2. **Qué puede pedirte**, con ejemplos concretos de su web:
   - Precios y planes ("subí el plan Estándar a 490")
   - Ofertas con fecha de fin ("piloto a 150 hasta el 30 de noviembre")
   - Textos de cualquier parte, en los 3 idiomas ("cambiá el título de arriba por…")
   - Trabajos del carrusel ("agregá este video de una marca de cafés")
   - Números de clientes y piezas, redes, WhatsApp
   - Guías gratis de la página Recursos, la skill IRIS, Mailchimp
   - Cosas nuevas: una sección, un testimonio, una página aparte
3. **Cómo funciona:** "Yo hago el cambio aparte y te paso un link de vista previa. Lo mirás en el celu y en la compu. Si te gusta me decís *publicalo* y en 1-2 minutos está en la web. Si no, me decís qué ajustar o *descartalo*, y la web no se toca."
4. **Para fotos y videos:** que los adjunte directo en el chat.
5. Cerrá preguntando qué quiere cambiar hoy.

Si el primer mensaje ya trae un pedido concreto, no hagas la presentación entera: hacé el pedido y, al final, recordale en una línea cómo publicar o descartar.

## Cómo trabajar (importante)

1. **Nunca subas cambios directo a `main`.** `main` es la web publicada. Trabajá siempre en una rama nueva y abrí un Pull Request. Si no tenés cómo abrir el PR, subí la rama y pedile a Piero que toque el botón para crear el Pull Request.
2. El hosting arma una **vista previa** de cada Pull Request con su propio link (aparece como comentario o check en el PR). Cuando esté lista, pasale ese link a Piero. Si todavía no aparece, avisale que tarda 1-2 minutos.
3. Recién cuando Piero diga que está bien ("publicalo", "dale", "subilo"), hacé el merge a `main`. La web se actualiza sola en 1-2 minutos. Si dice "descartalo", cerrá el PR sin merge.
4. Antes de abrir el PR: `npm install` (si hace falta) y `npm run build`, que no falle. Si podés, mirá la página con Playwright (`npm run preview`, puerto 4173) a 1440px y a 390px de ancho, y revisá que no haya errores en la consola.
5. Si un pedido es ambiguo o puede romper algo grande (sacar una sección, cambiar todo el estilo), preguntá antes.
6. Si Piero pide algo que va contra el estilo de abajo, hacelo igual si insiste (es su web), pero antes avisale en una línea por qué puede quedar peor y proponé una alternativa.

## Mapa de la página de inicio (de arriba a abajo)

| Sección | Qué es | Textos (`content/textos/*.json`) | Código |
|---|---|---|---|
| Intro | Chat que se despliega al entrar ("Desplegá la página de Piero"). Se muestra una vez por visita | `intro` | `src/components/Loader.jsx` |
| Menú | Barra de arriba, idiomas ES/IT/EN, menú de celular | `nav` | `src/components/Nav.jsx` |
| Inicio (`#top`) | PIERO grande, foto recortada y logos de herramientas colgando que se pueden agarrar | `hero` | `src/sections/Hero.jsx` |
| Frase | "De una foto de tu producto… sale un mes de contenido…" con logos intercalados. `{0}`…`{5}` son los lugares de los logos: no los borres | `statement` | `src/sections/Statement.jsx` |
| El trabajo (`#trabajo`) | Carrusel de piezas reales con filtros y visor | `work` | `src/sections/Work.jsx` + `content/trabajos.json` |
| Caso Savia (`#caso`) | Ejemplo de una foto convertida en un mes de piezas | `savia` | `src/sections/Savia.jsx` |
| Juego (`#juego`) | "¿Real o hecho por Piero?" — 3 rondas con fotos en `public/trabajos/juego/` | `game` | `src/sections/Game.jsx` |
| Cómo funciona (`#como`) | Pasos + teléfono de ejemplo | `how` | `src/sections/How.jsx` |
| Soy Piero (`#piero`) | Tarjeta holográfica que se da vuelta, contador de clientes | `about` | `src/sections/About.jsx` + `src/components/ProfileCard.jsx` |
| Precios (`#precios`) | Piloto + 3 planes por semana | `pricing` | `src/sections/Pricing.jsx` + `content/precios.json` |
| Preguntas (`#preguntas`) | FAQ estilo chat | `faq` | `src/sections/Faq.jsx` |
| Muestra gratis (`#muestra`) | Formulario por pasos que arma un mensaje de WhatsApp | `sample` | `src/sections/Sample.jsx` |
| Footer | Logos que caen con física, PIERO gigante, links | `footer` | `src/sections/Footer.jsx` |
| Oferta | Tarjetita abajo a la izquierda + precio tachado en Precios, solo si hay oferta activa | `offer` + `content/oferta.json` | `src/components/OfferToast.jsx` |
| Botones flotantes | WhatsApp y volver arriba | — | `src/components/FloatingButtons.jsx` |

**Página Recursos gratis (`/recursos/`):** guías y prompts gratis a cambio del mail (Mailchimp) + la skill paga IRIS. Textos en `recursos`, datos en `content/recursos.json`, código en `src/sections/RecursosPage.jsx`. Se abre desde el menú con una cortina de transición (`src/lib/pageTransition.js`).

Para encontrar un texto que Piero cita ("el que dice *De una foto…*"), buscalo con grep en `content/textos/es.json`.

## Dónde se cambia cada cosa

**Lo que más se cambia está en `/content`, en archivos JSON. Si el pedido es de contenido, tocá solo esto:**

| Pedido de Piero | Archivo |
|---|---|
| Precios, planes, piloto | `content/precios.json` |
| Oferta o promo (activar, precio, fecha de fin, textos) | `content/oferta.json` — `active: true` la prende; se apaga sola después de `until` (AAAA-MM-DD). En los textos, `{price}`, `{regular}` y `{until}` se completan solos |
| Cantidad de clientes y piezas, redes, WhatsApp, marcas | `content/numeros.json` |
| Trabajos del carrusel | `content/trabajos.json` (`type`: video / casero / anuncio; `brand`, `rubro`, `src`, `poster`, `secs`) + archivos en `public/trabajos/` |
| Guías gratis, skill IRIS, Mailchimp | `content/recursos.json` + portadas en `public/recursos/img/` |
| Cualquier texto de la web | `content/textos/es.json`, `it.json`, `en.json` |

- **Idiomas:** la web está en español, italiano e inglés. Si cambiás o agregás un texto, hacelo en **los tres** archivos con la misma estructura de claves. Si Piero te lo da en un solo idioma, traducí vos los otros dos con naturalidad (no literal).
- Placeholders como `{price}`, `{h}`, `{date}`, `{0}` se reemplazan solos en el código: no los borres.
- **Fotos y videos nuevos:** van en `public/`. Pasá las fotos a WebP (máx. ~1600px de ancho) y los videos a MP4 H.264 livianos (máx. ~1080px, sin audio si no hace falta), con su portada `.jpg`. Nada de más de 10 MB.
- **Mailchimp:** la URL del formulario va en `content/recursos.json → mailchimp.url` (la que termina en `/subscribe/post?u=…&id=…`; Piero la saca de Mailchimp → Audience → Signup forms → Embedded forms).

**Código** (solo si el pedido no se resuelve con `/content`):

- `src/App.jsx` — orden de las secciones de la página de inicio
- `src/styles/global.css` — todos los estilos
- `recursos/index.html` + `src/recursos.jsx` — la página aparte de Recursos
- `vite.config.js` — si se agrega otra página aparte, sumarla en `build.rollupOptions.input` (y copiar el patrón de `recursos/`)

Stack: React 18 + Vite 5, GSAP (con ScrollTrigger), Lenis (scroll suave), matter-js (física del footer). No agregues librerías nuevas salvo que sea imprescindible.

## Estilo (no negociable)

- **Minimalista y limpio, estilo suizo.** Fondo papel `--paper #F2F2EF`, tinta `--ink #0C0C0D`, un solo acento azul `--signal #2E3CFF`. Usá siempre las variables de `:root` en `global.css`, nunca colores sueltos.
- **Tipografía:** Geist (grotesca tipo Helvetica) y Geist Mono para detalles chicos. Nada de otras fuentes.
- **Nada que parezca hecho por IA:** sin gradientes violetas, sin brillos ni glassmorphism, sin emojis decorativos, sin íconos genéricos de chispitas/estrellas, sin frases tipo "revolucioná tu marca con IA". La web no se presenta como "IA": habla del resultado para la marca. Los nombres de las guías de Piero que dicen "IA" se respetan como él los escribió.
- **Animaciones suaves e interactivas** (GSAP, easing `--ease`), pero **sin abusar de animaciones atadas al scroll**: ya hay suficientes secciones fijadas.
- Todo tiene que verse bien en celular (390px) y respetar `prefers-reduced-motion`.
- Antes de crear un estilo nuevo, fijate si ya existe uno parecido en `global.css` y reutilizalo.

## Contacto de Piero

- WhatsApp: +39 380 639 9359 (se arma desde `content/numeros.json`)
- Instagram: @piero.ia
