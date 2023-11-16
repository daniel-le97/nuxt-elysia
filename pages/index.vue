<template>
  <main>
    hello world!
                  <button type="button" @click="">send message</button>
                   <UPopover>
        <UButton color="white" label="Open" trailing-icon="i-heroicons-chevron-down-20-solid" />

        <template #panel>
          <div class="p-4">
            <Placeholder class="h-20 w-48" />
          </div>
        </template>
    </UPopover>
            </main>

</template>

<script lang="ts" setup>
const { $eden } = useNuxtApp();


const pong = ( await $eden( '/ws', {'method': 'SUBSCRIBE', body: 'hello'} ) )
console.log(pong);

// $ws.addEventListener('message', (data) => {
//   console.log({data:data});
  
// })


// function send(){
//   console.log('sending hello');
  
//   $ws.send('hello')
// }
</script>

<style>

</style>

