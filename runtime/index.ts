import { Elysia } from 'elysia'
import { type NitroApp } from 'nitropack'
import { defineNuxtConfig } from 'nuxt/config'
import { type NuxtConfig } from 'nuxt/schema'

// const nitro = useNitroApp


export default new Elysia().all('*', async (context) => {
  // isProduction
  if (process.env.NODE_ENV === 'production') {
    const outputPath = `${process.cwd()}/.output/server/index.mjs`
    const nitroApp: NitroApp = import.meta.require(outputPath)?.default
    
    if (!nitroApp) {
        throw new Error(`Can't find the nitroApp from "${outputPath}"`)
    }
    const webHandler = toWebHandler(nitroApp.h3App)
    return await webHandler(context.request, context)
  }

  
  // isDevelopment
  // @ts-expect-error setting the gobal here
  global.defineNuxtConfig = defineNuxtConfig

  const nuxtConfigPath = `${process.cwd()}/nuxt.config.ts`
  const nuxtConfig: NuxtConfig = import.meta.require(nuxtConfigPath)?.default
  const origin = nuxtConfig.vite?.server?.origin

  if (!origin) {
    throw new Error(`Can't find the origin from "${nuxtConfigPath}"`)
  }
console.log(context.request);

  // forward the request
  const url = new URL(context.request.url)
  url.host = origin

  const req = new Request(url.toString(), context.request)
  req.headers.set('host', url.host)
  req.headers.set('origin', url.origin)

  console.log({url});
  

  const res = await fetch(req)

  if (!res.headers.get('content-type')?.includes('text/html')) {
    return res
  }

  // modify the origin
  const html = (await res.text())
    .replaceAll('src="/_nuxt', `src="http://${origin}/_nuxt`)
    .replaceAll('href="/_nuxt', `href="http://${origin}/_nuxt`)
    .replaceAll('src="/__nuxt', `src="http://${origin}/__nuxt`)
    .replaceAll('href="/__nuxt', `href="http://${origin}/__nuxt`)
// console.log(html);

  return new Response(html, res)
})