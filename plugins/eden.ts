import { edenFetch, edenTreaty } from "@elysiajs/eden";
// import type { App } from "../index";
import type { MainApp } from "../runtime/index";

export default defineNuxtPlugin((nuxtApp) => {
    // @ts-ignore
    const eden = edenTreaty<MainApp>( 'http://localhost:5566' )
    return {
        provide: {
            eden
        }
    }

})
