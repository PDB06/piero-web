// Piezas del carrusel "El trabajo": viven en /content/trabajos.json
// type: 'anuncio' (imagen) · 'video' · 'casero' (video casero con sonido)
import data from '../../content/trabajos.json';

export const WORK = data.items.map((w, i) => ({
  ...w,
  id: `${w.type}-${i}-${String(w.src).split('/').pop()}`,
  poster: w.poster || undefined,
  secs: w.secs || undefined,
}));
