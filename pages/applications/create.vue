<template>
  <main class=" ">
    <div class="w-full ">
    <!-- <form class=""> -->
      <div class="mb-4">
       <div class="lg:flex space-x-3">
         <label class="block dark:text-white text-gray-700 text-3xl  font-bold mb-2" for="username">
           Public Repository from Git
          </label>
          <!-- <input @keyup.enter="send" v-model="input"/> -->
  <UTooltip  >
       <Icon name="uil:question-circle" class="text-2xl"/>
        <template #text>
        <span class="italic">Hello World!</span>
      </template>
    </UTooltip>
  
       </div>
        <input class="h-12 shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="https://github.com/daniel-le97/nuxt-elysia">
      </div>
   
     
    <!-- </form> -->
 
  </div>


  <div class="p-2 dark:bg-gray-600">
     <div class="lg:flex space-x-3">
           <label class="block dark:text-white text-gray-700 text-3xl  font-bold mb-2" for="username">
            Build Log
            </label>
    <UTooltip  >
         <Icon name="uil:rocket" class="text-2xl"/>
          <template #text>
          <!-- <span class="italic">{{ _data}} value</span> -->
        </template>
      </UTooltip>
  
         </div>
  </div>
</main>
</template>

<script lang="ts" setup>
// const data = ref('' as any)
// const input = ref('')

// // const decoder = new TextDecoder()


// // const _data = await $fetch('/api', {
// //   responseType: 'stream'
// // })
// const {$eden} = useNuxtApp()
// const ws = $eden.api.terminal.subscribe()

// ws.on('open', (event) =>{
//   ws.subscribe(message =>{
//     console.log(message.data);
    
//     data.value += message.data
//   })
// })

// async function send(){
//   console.log('sending');
  
//  ws.send(input.value)
// }





</script>

<style>

</style>

