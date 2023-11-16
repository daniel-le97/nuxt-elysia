// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 devtools: { enabled: true },
css:["~/assets/css/main.css"],
 nitro: {
   preset: './runtime/preset',
   experimental:{
     'asyncContext': true,
     'openAPI': true
   }
 },

 vite:{server:{origin:'localhost:3000' }},
 modules: ['@nuxt/ui','nuxt-icon','@nuxt/content'],
 ui:{
  global: true,
  // icons: ["mdi", 'simple-icons']
 }
 , content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-light'
     
    }
  }
})