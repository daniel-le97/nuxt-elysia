// https://nuxt.com/docs/api/configuration/nuxt-config
import { getHighlighter } from 'shiki';

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
 , 
 content: {
   
    highlight:{
      theme:'material'
    },
     markdown: {
      async highlighter () {
        const highlighter = await getHighlighter({
          theme: 'github-dark'
        })

        return (rawCode, lang) => {
          return highlighter.codeToHtml(rawCode, lang)
        }
      }
    }
  }
})