// index.ts
import { Elysia, t } from 'elysia'
// import nuxt from './runtime/index'
import Stream from '@elysiajs/stream';
import { downloadTemplate } from 'giget';
import type { Server, Subprocess } from 'bun';
import { ElysiaWS } from 'elysia/dist/ws/index.js';
// const nuxt = await import('./runtime/index')
// let server :Server | null = null

// class Terminal{
//     static enc = new TextEncoder();
//     static clone: Subprocess<"pipe", "pipe", "inherit">;
//     static server: Elysia<any> | null = null
//     // constructor(){

//     // }
//     static send(data:string){
//         Terminal.clone.stdin.write(Terminal.enc.encode(data))
//     }

//    static async asyncSpawn(){
//     const dec = new TextDecoder()
//        this.clone = Bun.spawn(["bash"], {stdin: 'pipe'})
//       for await( const chunk of this.clone.stdout){
//         this.server?.server?.publish('terminal', dec.decode(chunk))
//       }
//     }
//     static ws(){
//         const ws = new Elysia().ws('/terminal', {
//             message(ws, message) {


                
//             },
//             open(ws) {
//                 ws.subscribe('terminal')
//                 Terminal.asyncSpawn()
                
//             },
//         })
//         this.server = ws
//         return ws
//     }
// }

export const app = new Elysia({prefix: '/api'})
// .use(Terminal.ws())
.ws('/ws', {
    async message(ws, message) {
        // console.log(message);
        // if (message.includes('stream')) {
            const path = '/Users/daniel/homelab/GitHub/nuxt-elysia/nuxt-elysia/daniel-le97-astro-portfolio'
            
            const clone = Bun.spawn(["nixpacks", 'build', path, '--name', generateName()], {
                stdio: ['ignore', 'pipe', 'pipe']
            })
          const decoder = new TextDecoder()
            for await(const chunk of clone.stderr){
                ws.send(decoder.decode(chunk))
            }
            for await(const chunk of clone.stdout){
                ws.send(decoder.decode(chunk))
            }
            // ws.send(message)
        // }
    },
    body:t.String(),
    response: t.String(),
    open(ws) {
        ws.subscribe('stream')
        ws.publish('stream', 'joined!')
    },
}).get('/v3', (context) => new Stream(async stream => {
    
    const path = '/Users/daniel/homelab/GitHub/nuxt-elysia/nuxt-elysia/daniel-le97-astro-portfolio'
    const clone = Bun.spawn(["nixpacks", 'build', path, '--name', generateName()], {
        stdio: ['ignore', 'pipe', 'pipe']
    })
  const decoder = new TextDecoder()
    for await(const chunk of clone.stderr){
        stream.send(decoder.decode(chunk))
    }
    for await(const chunk of clone.stdout){
        stream.send(decoder.decode(chunk))
    }
    
    stream.close()
}))

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
  