// Números, redes, WhatsApp y marcas: viven en /content/numeros.json
import n from '../../content/numeros.json';

export const STATS = { clients: n.clients, pieces: n.pieces, years: n.years };
export const SOCIALS = n.socials;
export const CLIENTS = n.clients_brands;
export const WHATSAPP = n.whatsapp;
export const waLink = (text) => `https://wa.me/${WHATSAPP.number}${text ? '?text=' + encodeURIComponent(text) : ''}`;
