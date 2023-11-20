import "#internal/nitro/virtual/polyfill";

const nitroApp = useNitroApp()
const webHandler = toWebHandler(nitroApp.h3App)


const server = Bun.serve({
  port: process.env.NITRO_PORT || process.env.PORT || 3000,
  async fetch(request: Request, server) {
    if (request.url.includes('ws')) {
       const upgraded = server.upgrade(request);
       if (!upgraded) {
         return new Response("Upgrade failed", { status: 400 });
       }
    }

    return webHandler(request)
  },
});

console.log(`Listening on http://localhost:${server.port}...`);