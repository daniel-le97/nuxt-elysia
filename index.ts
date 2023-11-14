// index.ts
import { Elysia } from 'elysia'
import nuxt from './runtime/index'
// const nuxt = await import('./runtime/index')
new Elysia().use(nuxt).listen(5566)

if(process.env.NODE_ENV !== 'production'){
    const logger = (await import('consola')).default
    logger.box('http://localhost:5566')
}