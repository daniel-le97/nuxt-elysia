// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: './runtime/preset',
    experimental:{
      'asyncContext': true,
      'openAPI': true
    }
  },
 vite:{server:{origin:'localhost:3000' }}
})