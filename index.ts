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
    const path = '/Users/daniel/homelab/GitHub/nuxt-elysia/nuxt-elysia/daniel-le97-astro-portfolio'
    const clone = Bun.spawn(["nixpacks", 'build', path, '--name', generateName()], {
        stdio: ['ignore', 'pipe', 'pipe']
    })
    const chunksErr = await Bun.readableStreamToArray(clone.stderr)
    const chunksOut = await Bun.readableStreamToArray(clone.stdout)
    const chunks = chunksErr.concat(chunksOut)
    
    const decoder = new TextDecoder()
    for await (const chunk of chunks) {
        stream.send(decoder.decode(chunk))
    }
    stream.close()
})).get('/v3', (context) => new Stream(async stream => {
    const path = '/Users/daniel/homelab/GitHub/nuxt-elysia/nuxt-elysia/daniel-le97-astro-portfolio'
    const clone = Bun.spawn(["nixpacks", 'build', path, '--name', generateName()], {
        stdio: ['ignore', 'pipe', 'pipe']
    })

    const stderrReader = await clone.stderr.getReader().read()
    const decoderr = new TextDecoder()
    while (!stderrReader.done){
        console.log(decoderr.decode(stderrReader.value));
        
        // stream.send(stderrReader.value.toString())
    }
    // const stdoutReader = await clone.stdout.getReader().read()
    // while (!stdoutReader.done){
    //     console.log(stdoutReader.value);
        
    //     // stream.send(stdoutReader.value.toString())
    // }

    const chunksErr = await Bun.readableStreamToArray(clone.stderr)
    const chunksOut = await Bun.readableStreamToArray(clone.stdout)
    const chunks = chunksErr.concat(chunksOut)
    
    const decoder = new TextDecoder()
    for await (const chunk of chunks) {
        stream.send(decoder.decode(chunk))
    }
   
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


function generateName(): string {
    const prefixes: string[] = ['Fire', 'Ice', 'Thunder', 'Shadow', 'Mystic', 'scary', 'brave']
    const suffixes: string[] = ['blade', 'heart', 'spark', 'wing', 'storm']
    function getRandomElement(array: string[]): string {
      const randomIndex: number = Math.floor(Math.random() * array.length)
      return array[randomIndex]
    }
    const generatedName: string = getRandomElement(prefixes) + getRandomElement(suffixes)
    return generatedName.toLowerCase()
  }
  