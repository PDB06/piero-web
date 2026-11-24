# Web de Piero D'Benedetto

React + Vite, con GSAP, Lenis y matter-js para las animaciones. Dos páginas: la landing (`/`) y Recursos gratis (`/recursos/`).

- **Piero edita la web con Claude Code:** ver `COMO-EDITAR.md`. Las reglas que Claude sigue están en `CLAUDE.md`.
- **Publicar y dominio (se hace una sola vez):** ver `PUBLICAR.md`.

## Arrancar en tu compu

```bash
npm install
npm run dev
```

Se abre en http://localhost:5173

## Dónde está cada cosa

- `content/` — precios, oferta, números, trabajos, recursos y todos los textos (ES / IT / EN), en JSON
- `src/sections/` — una sección por archivo
- `src/components/` — piezas reutilizables (menú, intro, cursor, formulario de mail…)
- `src/styles/global.css` — colores, tipografía y estilos
- `public/` — imágenes, videos y logos
- `originales/` — fotos sin optimizar (no se suben a GitHub)
