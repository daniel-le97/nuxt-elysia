<script setup>
import { reactive } from "vue";

const tabItems = ref([
  {
    key: 'build',
    label: 'Build',
    description: 'Start your Build here, Plug in a public repository and select build when ready.',
    icon: 'uil:abacus'
  },
  {
    key: 'password',
    label: 'Password',
    description: 'Change your password here. After saving, you\'ll be logged out.',
    icon: 'uil:shield'
  },
  {
    key: 'configuration',
    label: 'Configuration',
    description: 'Configure your settings here.',
    icon: 'uil:wrench'
  },
  {
    key: 'secrets',
    label: 'Secrets',
    description: 'Manage your secrets here.',
    icon: 'uil:lock-alt'
  },
  {
    key: 'application',
    label: 'Application',
    description: 'Manage your application settings here.',
    icon: 'uil:book'
  }
]);


function doTheThing() {
  console.log('Submitted Repo')
}
</script>

<template>
<main class="">

   <div class="flex items-center justify-between mb-20">

    <div class="flex items-center space-x-2 ">
          <h1 class="text-2xl font-bold">Configurations</h1>
          <UBadge>HEALTHY</UBadge>
        </div>
      <!-- Left side with buttons and icons -->
      <div class="flex space-x-2">
     <UButton
    icon="i-heroicons-arrow-path-solid"
    size="sm"
    color="sky"
    variant="solid"
    label="Restart"
    :trailing="false"
  />
  <UButton
    icon="i-heroicons-arrow-path-solid"
    size="sm"
    color="red"
    variant="solid"
    label="Force Redeploy"
    :trailing="false"
  />
  <UButton
    icon="i-heroicons-pause"
    size="sm"
    color="amber"
    variant="solid"
    label="Stop"
    :trailing="false"
  />
  <UButton
    icon="i-heroicons-arrow-up-right"
    size="sm"
    color="primary"
    variant="solid"
    label="Open"
    :trailing="false"
  />
      </div>

      <!-- Right side with page title and badge -->
      
    </div>



     <UTabs orientation="vertical" :items="tabItems" :ui="{ wrapper: 'flex items-start gap-4 min-h-screen', list: { width: 'w-64',background:'dark:bg-zinc-800',padding:'p-2', marker:{
      background:' dark:bg-emerald-600'
     } } }">
      <template #default="{ item, index, selected }">
        <div class="flex items-center justify-start gap-2 relative truncate ">
          <Icon :name="item.icon" class="w-4 h-4 flex-shrink-0" />

          <span class="truncate"> {{ item.label }}</span>

          <span v-if="selected" class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400" />
        </div>
      </template>

    <template #item="{ item }">



          <UCard  class="dark:bg-zinc-900   ring-0">
            <template #header>
              <p class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                {{ item.label }}
              </p>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {{ item.description }}
              </p>
            </template>
            <div v-if="item.key === 'build'" class="space-y-3">
             <div class="w-full ">
        <form class="">
          <div class="mb-4">
           <div class="lg:flex space-x-3">
             <label class="block dark:text-white text-gray-700 text-3xl  font-bold mb-2" for="username">
               Public Repository from Git
              </label>
      <UTooltip  >
           <Icon name="uil:question-circle" class="text-2xl"/>
            <template #text>
            <span class="italic">Hello World!</span>
          </template>
        </UTooltip>
  
           </div>
            <input class="h-12 shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="https://github.com/daniel-le97/nuxt-elysia">
          </div>
   
   <button class="bg-amber-400 p-2 rounded-md px-4" @click="doTheThing">
    Build
   </button>
     
        </form>
 
      </div>


      <div class="p-2">
         <div class="lg:flex space-x-3">
               <label class="block dark:text-white text-gray-700 text-3xl  font-bold mb-2" for="username">
                Build Log
                </label>
        <UTooltip  >
             <Icon name="uil:rocket" class="text-2xl"/>
              <template #text>
              <span class="italic">Hello World!</span>
            </template>
          </UTooltip>
  
             </div>

             <div class="p-2 bg-zinc-700 rounded-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sunt accusantium ad accusamus autem unde excepturi libero obcaecati sapiente praesentium pariatur, voluptate, nobis quam impedit placeat consequuntur molestias recusandae, tempora officiis fugit. Veritatis vero reprehenderit asperiores eveniet ducimus iure, corrupti consectetur quos eius ut iste doloribus ad error. Sequi praesentium, cum dolore ipsum id quas natus ullam, voluptatum, sed aperiam ipsa a hic nam magnam neque non cupiditate expedita! Laudantium eligendi excepturi est iure vitae dolor ut perferendis, omnis in molestiae laborum odit, ducimus possimus praesentium natus quae! Unde eos iste sit laboriosam fugiat architecto officiis blanditiis, sunt alias exercitationem.
             </div>
      </div>
            </div>




     <div v-if="item.key === 'secrets'" class="space-y-3">
        <div class="w-full">
      <form class="">
        <div class="mb-4">
          <div class="lg:flex space-x-3">
            <div class="flex space-x-3">
              <div>
                <label class="block dark:text-white text-gray-700 text-3xl font-bold mb-2" for="name">
                  Name
                </label>
                <input class="h-12 shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter name">
              </div>
              <div>
                <label class="block dark:text-white text-gray-700 text-3xl font-bold mb-2" for="value">
                  Value
                </label>
                <input class="h-12 shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="value" type="text" placeholder="Enter value">
              </div>
              <div class="flex items-center">
                <label class="block dark:text-white text-gray-700 text-3xl font-bold mb-2" for="build-time">
                  Need During BuildTime?
                </label>
                <input class="ml-2" id="build-time" type="checkbox">
              </div>
            </div>
            <button class="bg-amber-400 p-2 rounded-md px-4">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>

    <div class="p-2">
      <div class="lg:flex space-x-3">
        <div class="flex items-center">
          <label class="block dark:text-white text-gray-700 text-3xl font-bold mb-2" for="preview">
            Preview Secrets
          </label>
          <UTooltip>
            <Icon name="uil:info-circle" class="text-2xl" />
            <template #text>
              <span class="italic">Hello World!</span>
            </template>
          </UTooltip>
        </div>
      </div>
      <hr class="my-2">
      <div>
        <label class="block dark:text-white text-gray-700 text-3xl font-bold mb-2" for="enc-file">
          Past.envFile
        </label>
        <button class="bg-amber-400 p-2 rounded-md px-4">
          Add
        </button>
        <textarea class="h-24 shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2" id="enc-file" placeholder="Enter Past.encFile"></textarea>
      </div>
    </div>
              </div>




        
          </UCard>
        </template>


    </UTabs>
</main>
</template>

