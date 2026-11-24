# Publicar en Cloudflare + dominio propio

Se hace una sola vez. Unos 15 minutos. Hosting gratis; el dominio se paga una vez por año.

## 1. Cuenta de Cloudflare
Creá una cuenta en **dash.cloudflare.com** (gratis). Conviene que sea de Piero o una compartida, porque ahí va a estar su dominio.

## 2. Conectar el repo
1. En el panel de Cloudflare: **Workers & Pages → Create → Pages → Import an existing Git repository**.
2. Conectá GitHub y elegí `franaltt/piero-web`.
3. Configuración del build:
   - Framework preset: **React (Vite)** (o ninguno)
   - Build command: `npm run build`
   - Build output directory: `dist`
4. **Save and Deploy**. En 1-2 minutos queda en `piero-web.pages.dev` (o el nombre que elijas).

Desde ahí, cada cambio en `main` se publica solo, y cada Pull Request recibe un **link de vista previa** propio (Cloudflare lo comenta en el PR de GitHub).

## 3. Comprar el dominio
1. En Cloudflare: **Domain Registration → Register Domains**, buscá el nombre (ej. `pierodbenedetto.com`) y compralo. Cloudflare lo cobra a precio de costo, sin recargo.
2. En el proyecto de Pages: **Custom domains → Set up a custom domain** → poné el dominio. Como el dominio ya está en Cloudflare, se configura solo (DNS y HTTPS incluidos).
3. Sumá también `www.` y que redirija al dominio principal.

## 4. Darle acceso a Piero
1. GitHub → repo `piero-web` → **Settings → Collaborators → Add people** → el usuario de GitHub de Piero.
2. Piero instala la app de Claude en GitHub para ese repo y abre Claude Code apuntando a `franaltt/piero-web`. Ver `COMO-EDITAR.md`.

## 5. Apagar Netlify
Cuando el dominio ya funcione en Cloudflare, borrá el sitio en Netlify (o dejalo, no molesta).
