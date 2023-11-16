<template>
  <div  class="text-center w-full h-screen  flex flex-col justify-center items-center">
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
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>

