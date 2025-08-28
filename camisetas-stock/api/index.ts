// Importa el servidor ya compilado por Angular SSR
// Esto asegura que las rutas y paths internos (browserDistFolder, indexHtml) sean correctos en Vercel
import app from '../dist/camisetas-stock/server/server.mjs';

export default app;