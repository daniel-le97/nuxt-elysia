import { edenFetch } from "@elysiajs/eden";
import type{ App } from "../index.js";

export default defineNuxtPlugin((nuxtApp) => {
    // const url = process.env.NODE_ENV === 'production' ? 'ws://localhost:'

    const eden = edenFetch<App>('http://localhost:5566')
    // nuxtApp.provide('ws', ws)

    return{
        provide:{
            eden
        }
    }
})
