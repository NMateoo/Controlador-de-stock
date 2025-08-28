// Carga diferida del bundle SSR compilado para evitar problemas ESM/CJS en Vercel
let cachedApp: any;

async function getApp() {
  if (!cachedApp) {
    const mod = await import('../dist/camisetas-stock/server/server.mjs');
    // El bundle exporta default app()
    cachedApp = mod.default ?? mod.app ?? mod;
  }
  return cachedApp;
}

export default async function handler(req: any, res: any) {
  const app = await getApp();
  return app(req, res);
}