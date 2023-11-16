<script setup lang="ts">
import type { avatar } from '@nuxt/ui';

const socials = [
  {
    image: 'https://avatars.githubusercontent.com/u/107594367?s=400&u=279c4a706755639789d6b825966e54161df0c7aa&v=4',
    name: 'Tung Le',
    github: 'https://github.com/TungLe0319',
    linkedIn: 'https://www.linkedin.com/in/tung-le0319/',

  },
  {
    image: 'https://avatars.githubusercontent.com/u/107774403?v=4',
    name: 'Daniel Le',
    github: 'https://github.com/daniel-le97',
    linkedIn: 'https://www.linkedin.com/in/daniel-le97/',

  },

]
</script>

<template>
  <footer class="bg-zinc-900 text-white">
      <div class="w-full pt-10 flex items-center justify-center bg-zinc-900">
        <div class="w-3/4 px-4 text-white flex flex-col">
          <div class="md:flex">
            <h1 class="text-6xl font-bold w-full md:w-1/2">
              Thank you for checking out our app. Get in touch with us.
            </h1>

            <div
              class="w-full md:w-1/2 footer-section flex justify-center flex-col items-center"
            >


              <div v-for="s in socials" :key="s.name" class="mt-8 flex">
               <UAvatar
    size="xl"
    :src="s.image"
    :alt="`Portrait photo of ${s.name}`"
  />

                <div class="ml-5 flex gap-5 items-center">
                  <a :href="s.linkedIn">
                      <Icon name="devicon:linkedin"  class="text-2xl" />
                  </a>
                  <div class="">
                    <a :href="s.github">
                    
                      <Icon name="mdi:github" class="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>

            
            </div>
          </div>

          <div
            class="flex mt-8 flex-col md:flex-row md:justify-center md:text-center"
          >
            <p class="w-full md:w-2/3 text-gray-400">
              If you want to contact us the best way is to connect with us on
              LinkedIn and message us!
            </p>
          </div>
          <div class="flex flex-col">
            <div class="flex mt-24 mb-5 flex-row justify-between items-end">
              <div class="hidden md:block">
                <img
                  src="/LandingImageOne.png"
                  alt=""
                  width="80"
                  class="rounded-xl b"
                />
              </div>

              <NuxtLink to="/products" class="link" active-class="active-link">
                Products
              </NuxtLink>
              <NuxtLink to="/about" class="link" active-class="active-link">
                About
              </NuxtLink>

              <nuxt-link to="/Account" class="link" active-class="active-link">
                Account
              </nuxt-link>
              <nuxt-link to="/cart" class="link" active-class="active-link">
                Cart
              </nuxt-link>
            </div>
            <hr class="border-gray-600" />

            <h1 class="text-center text-gray-300 my-10">
              ©2022 DevOpportunitiesLLC All rights reserved.
            </h1>
          </div>
        </div>
      </div>
    </footer>
</template>

<style scoped>.footer-section {
  flex: 1;
}



.footer-title {
  @apply text-5xl font-bold w-full md:w-1/2 drop-shadow-md
}</style>
