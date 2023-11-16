<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';



// const { session } = useAuth();
const navTransform = ref('translateY(0)');

let lastScrollPosition = 0;

const route = useRoute()
route.path

function handleScroll() {
  const scrollY = window.scrollY;
  navTransform.value = scrollY > lastScrollPosition ? 'translateY(-100%)' : 'translateY(0)';
  lastScrollPosition = scrollY;
}


function handleIndicator(el: HTMLElement) {
  const indicator = document.querySelector('.nav-indicator') as HTMLElement;
  const items = document.querySelectorAll('.nav-item');

  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });

  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;

  const activeColor = el.getAttribute('active-color');
  if (activeColor !== null) {
    indicator.style.backgroundColor = activeColor;
    el.style.color = activeColor;
  }

  el.classList.add('is-active');
}

interface HTMLElementWithActiveClass extends HTMLElement {
  classList: DOMTokenList & {
    contains(token: string): boolean;
  };
}
// Function to setup listeners
const setupIndicatorListeners = () => {


  const items: NodeListOf<HTMLElement> = document.querySelectorAll('.nav-item');
  const indicator: HTMLElement | null = document.querySelector('.nav-indicator');

  items.forEach((item: HTMLElement) => {

    if (item.getAttribute('href') === route.path) {
      item.classList.add('is-active');
      handleIndicator(item);
    }
    item.addEventListener('click', (e) => handleIndicator(e.target as HTMLElement));
    if ((item as HTMLElementWithActiveClass).classList.contains('is-active')) {
      handleIndicator(item);
    }
  });
};


onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  setupIndicatorListeners();

});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>


<template>
  <div ref="nav"
    class="  bg-white bg-opacity-40 backdrop-blur-sm fixed top-0 w-full transition-transform duration-300 ease-in-out px-3 flex items-center  justify-around text-gray-900  dark:text-white   shadow-md dark:bg-gray-900 z-50 "
    :style="{ transform: navTransform }">
    <div class=" w-fit">
      <Icon name="skill-icons:nuxtjs-dark"  class="text-5xl"/>
  
    </div>
    <div class=" hidden lg:inline-flex relative  overflow-hidden w-fit ">
      <NuxtLink href="/" class="nav-item is-active" active-color="orange">Home</NuxtLink>
      <NuxtLink href="/about" class="nav-item " active-color="orange">About</NuxtLink>
      <NuxtLink href="/contact" class="nav-item " active-color="orange">Contact</NuxtLink>
      <NuxtLink href="/login" class="nav-item " active-color="orange">Login</NuxtLink>
      <span class="nav-indicator"></span>
    </div>
    <div class="flex items-center justify-center space-x-4">
      <ColorMode/>
      <ProfileDropDown />
     
 
    <a href="https://github.com/daniel-le97/nuxt-elysia">
                    
                        <Icon name="mdi:github" class="text-2xl" />
                      </a>
 
    </div>
  </div>
</template>

<style scoped>





.nav-item {
  padding: 20px;
  transition: .3s;
  margin: 0 6px;
  z-index: 1;
  font-weight: 500;
  position: relative;
}

.nav-item:before {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #dfe2ea;
  border-radius: 8px 8px 0 0;
  opacity: 0;
  transition: .3s;
}

.nav-item:not(.is-active):hover:before {
  opacity: 1;
  bottom: 0;
}

.nav-indicator {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  transition: .4s;
  height: 5px;
  z-index: 1;
  border-radius: 8px 8px 0 0;
}

@media (max-width: 580px) {
  .nav {
    overflow: auto;
  }
}
</style>
