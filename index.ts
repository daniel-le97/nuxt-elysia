// index.ts
import { Elysia, t } from 'elysia'
import nuxt from './runtime/index'
// const nuxt = await import('./runtime/index')
const app = new Elysia().use(nuxt).ws('/ws', {
    message(ws, message) {
        console.log(message);
        
        ws.send(message)
    },
    body:t.String(),
    response: t.String(),
    open(ws) {
        ws.subscribe('chat')
    },
}).listen(5566, async(server) => {
    // setInterval(() => {
    //     server.publish('chat', 'data, world!')
    // }, 1000)
    if(process.env.NODE_ENV !== 'production'){
        const logger = (await import('consola')).default
        logger.box('http://localhost:5566')
    }

})

export type App = typeof app
