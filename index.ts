// index.ts
import { Elysia, t } from 'elysia'
import nuxt from './runtime/index'
import Stream from '@elysiajs/stream';
import { downloadTemplate } from 'giget';
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
}).get('/v2', (context) => new Stream(async stream => {
    const writable = new WritableStream()
    const path = '/Users/daniel/homelab/GitHub/nuxt-elysia/nuxt-elysia/daniel-le97-astro-portfolio'
    const clone = Bun.spawn(["nixpacks", 'build', path, '--name', 'steve-wonder'], {
        stdio: ['ignore', 'pipe', 'pipe']
    })
    clone.stderr.pipeTo(writable)
    // stream.send(clone.stderr)
    // stream.send(clone.stdout)
    
    stream.close()
})).listen(5566, async(server) => {
    // setInterval(() => {
    //     server.publish('chat', 'data, world!')
    // }, 1000)
    if(process.env.NODE_ENV !== 'production'){
        const logger = (await import('consola')).default
        logger.box('http://localhost:5566')
    }

})

export type App = typeof app
