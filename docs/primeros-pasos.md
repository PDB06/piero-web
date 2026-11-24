# Primeros pasos: poner la web online (guía para que Claude acompañe a Piero)

Este archivo es para vos, Claude. Lo usás cuando Piero escribe `/primeros-pasos`, o cuando en `SITIO.md` el hosting todavía figura como **pendiente** y Piero quiere publicar o pregunta cómo se pone la web online.

Piero no es técnico. Vos no podés ver su pantalla ni entrar a su cuenta: él hace los clics y vos lo guiás.

## Cómo guiar

- **Un paso por mensaje.** Explicá el paso en 2-4 líneas, decí exactamente qué botón tocar (con el nombre como aparece en pantalla, en inglés si la página está en inglés) y terminá con: "Cuando lo tengas, escribime *listo*."
- Si se traba o algo no coincide con lo que le dijiste, pedile **una captura de pantalla** y guialo desde lo que ves. Las páginas de Cloudflare y GitHub cambian de diseño seguido: si un botón no está donde dice esta guía, buscá en la captura el equivalente.
- Antes de cada parte, contale en una línea para qué sirve ("Ahora conectamos tu web con Cloudflare para que se publique sola").
- **Nunca le pidas contraseñas, códigos de verificación ni datos de tarjeta.** Eso lo escribe él directo en la página. Si te los manda igual, decile que no hacía falta y que no los comparta en el chat.
- Al principio mostrale el mapa del recorrido completo (las 6 partes de abajo, una línea cada una, con el tiempo estimado: ~20 minutos en total + lo que tarde en elegir el nombre del dominio).
- Al terminar cada parte, festejalo corto y seguí.

## Parte 0 — Qué vamos a hacer (explicarlo antes de arrancar)

Contale esto con tus palabras, corto:

- **El código de tu web** vive en tu GitHub, en el repo `piero-web`. Es como la carpeta original de la web, y es tuya.
- **El hosting** es la computadora que muestra tu web al mundo las 24 horas. Vamos a usar **Cloudflare Pages**: es gratis, rapidísimo, y cada vez que cambiamos algo en GitHub publica la web solo.
- **El dominio** es la dirección: `pierodbenedetto.com`, por ejemplo. Se alquila por año. Lo compramos también en Cloudflare porque lo vende a precio de costo y se conecta solo.
- Al final, para cambiar la web solo tenés que hablarme a mí: yo hago el cambio, te paso un link para que lo veas, y cuando me digas "publicalo" queda online.

## Parte 1 — Cuenta de Cloudflare (2 min)

1. Entrá a **dash.cloudflare.com/sign-up** y creá una cuenta con tu mail.
2. Confirmá el mail que te llega.
3. Si te pregunta qué querés hacer o te ofrece planes, elegí el plan **Free** o salteá ese paso. No hace falta pagar nada por el hosting.

Recomendale activar la verificación en dos pasos (en su perfil, *Authentication*), porque ahí va a estar su dominio.

## Parte 2 — Conectar la web (5 min)

1. En el menú de la izquierda: **Workers & Pages**.
2. **Create application** → pestaña **Pages** → **Connect to Git** (si aparece "Import an existing Git repository", es lo mismo).
3. Elegí **GitHub** y autorizá con tu cuenta de GitHub (la misma con la que entrás a Claude Code).
4. Elegí el repositorio **piero-web** → **Install & Authorize** → **Begin setup**.

**Si `piero-web` no aparece en la lista:** en la pantalla de GitHub que se abre al autorizar, tiene que elegir **Only select repositories** y marcar `piero-web` (o *All repositories*). Si ya autorizó antes sin marcarlo, abajo de la lista de repos hay un enlace para configurar la app de GitHub: ahí lo agrega. Si el repo no aparece en su GitHub, es que todavía no aceptó la transferencia que le mandó Francesco (le llega por mail).

5. En **Set up builds and deployments** completá así (dictáselo campo por campo):
   - **Project name:** `piero-web` (de acá sale la dirección provisoria `piero-web.pages.dev`; si está tomado, `piero-dbenedetto` o similar)
   - **Production branch:** `main`
   - **Framework preset:** **React (Vite)** — o *None*, da igual si los dos campos de abajo quedan así:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - Lo demás, sin tocar.
6. **Save and Deploy**. Tarda 1-3 minutos. Cuando termine, aparece **Success** y un link `….pages.dev`.
7. Pedile que abra ese link en el celular y en la compu y te confirme que se ve la web.

**Si el deploy falla:** pedile captura del error o que copie las últimas líneas del log. Lo más común: escribió mal el build command o la carpeta (`dist`). Se corrige en *Settings → Builds* y se toca *Retry deployment*.

## Parte 3 — Entender y elegir el dominio (5 min de charla)

Explicale, con tus palabras y en un solo mensaje:

- **Qué es:** la dirección de su web. Es suyo mientras lo renueve; si un año no lo paga, lo pierde y otro lo puede comprar. Por eso conviene la **renovación automática**.
- **Cuánto sale:** un `.com` ronda los 10-11 USD por año en Cloudflare (precio de costo, sin recargo; el precio exacto se ve al comprar). Otras terminaciones tienen otros precios.
- **Qué terminación:** `.com` es lo más reconocido y sirve para clientes de cualquier país. `.it` suma si trabaja sobre todo con marcas italianas (Cloudflare no vende todas las terminaciones: si la que quiere no aparece, avisale y vemos alternativas).
- **Cómo elegir el nombre:** corto, fácil de dictar por teléfono, sin guiones ni números. Ideas: `pierodbenedetto.com`, `pierodb.com`, `pieroia.com`. Si la marca de Instagram es lo que más se conoce, algo cercano a *piero.ia*.
- **Privacidad:** Cloudflare oculta sus datos personales del registro público gratis.
- **Mail con el dominio** (tipo `hola@pierodbenedetto.com`): no viene incluido. Más adelante se puede reenviar gratis a su Gmail con *Email Routing* de Cloudflare, o contratar Google Workspace. No es necesario para la web.

Preguntale qué nombres le gustan. Si querés, sugerile 3 opciones según lo que te diga.

## Parte 4 — Comprar el dominio (5 min)

1. En el menú de la izquierda: **Domain Registration** → **Register Domains**.
2. Buscá el nombre. Si dice *Available*, mirá el precio y tocá **Purchase**.
3. Completá los datos de contacto (nombre, dirección, mail: son obligatorios para registrar un dominio, Cloudflare los mantiene privados) y el medio de pago. Esto lo escribe él directo en Cloudflare.
4. Confirmá que **Auto-renew** quede activado.
5. Al terminar, el dominio aparece en *Domain Registration → Manage Domains*. Puede tardar unos minutos en quedar activo.

Si el nombre está tomado: proponé variantes o otra terminación.

## Parte 5 — Conectar el dominio a la web (3 min + espera)

1. **Workers & Pages** → el proyecto **piero-web** → pestaña **Custom domains** → **Set up a custom domain**.
2. Escribí el dominio sin www (ej. `pierodbenedetto.com`) → **Continue** → **Activate domain**. Como el dominio está en la misma cuenta, Cloudflare configura todo solo.
3. Repetí con `www.` adelante (ej. `www.pierodbenedetto.com`).
4. Puede decir *Initializing* o *Verifying* unos minutos (a veces hasta una hora). El candadito (HTTPS) se activa solo.
5. Cuando diga **Active**, pedile que abra el dominio en el celular y en la compu.

Explicale que la dirección `….pages.dev` sigue funcionando, pero la que comparte es la del dominio.

## Parte 6 — Cerrar y empezar a usarla

1. Actualizá `SITIO.md` con: hosting Cloudflare Pages, nombre del proyecto, dirección `.pages.dev`, dominio, dónde se registró y fecha de vencimiento (un año desde hoy), renovación automática sí/no, y la fecha de hoy. Este cambio no toca la web, así que podés subirlo directo a `main` sin pedirle aprobación.
2. Si el dominio es nuevo, actualizá también las referencias en el código si hay alguna dirección vieja (buscá `netlify.app` con grep) y proponé el cambio con el flujo normal (rama + vista previa + "publicalo").
3. Decile que le avise a Francesco que ya está en Cloudflare, para que él borre la versión vieja de Netlify (está en la cuenta de Francesco, Piero no tiene que hacer nada ahí).
4. **Cerrá con un mini tutorial de cómo se usa de ahora en más**, con sus palabras:
   - "Cada vez que quieras cambiar algo, abrí Claude Code en el repo piero-web y pedímelo como a una persona."
   - "Te paso un link de vista previa. Lo mirás."
   - "Si está bien, me decís *publicalo* (o escribís `/publicar`) y en 1-2 minutos está en tu dominio."
   - "Si no, me decís qué ajustar o *descartalo*. La web publicada no se toca hasta que vos digas."
   - "Si alguna vez te perdés, escribí `/ayuda`."
5. Proponele hacer un primer cambio chiquito de prueba ahora mismo (por ejemplo, actualizar el número de clientes) para que vea el circuito completo una vez.
