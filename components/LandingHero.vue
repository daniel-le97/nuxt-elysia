<template>
  <div  class="text-center w-full h-screen  flex flex-col justify-center items-center pb-72">
   <div class="w-1/2">
      <h1 class="text-8xl font-semibold">
  Turn Your Vision Into Reality
      </h1>
      <h2 class="text-lg my-8 opacity-80"> 
        Watch your dreams materialize before your eyes with useAppConfig.
      </h2>
   </div>

   <div class="lg:flex space-x-4 ">
  <UButton
    icon="i-heroicons-rocket-launch"
    size="sm"
    color="primary"
    variant="solid"
    label="Button"
    :trailing="false"
  />
  <UButton
    icon="i-heroicons-arrow-small-right"
    size="sm"
    color="primary"
    variant="solid"
    label="Button"
    
    :trailing="false"
  />
   </div>
 <div class="absolute bottom-0 w-full h-96 ">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L60,224C120,224,240,224,360,202.7C480,181,600,139,720,106.7C840,75,960,53,1080,64C1200,75,1320,117,1380,138.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
 </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>

