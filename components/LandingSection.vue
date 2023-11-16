<template>
  <div class="flex w-full justify-center items-center">
    <div class="w-1/2 text-center">
      <h1 class="text-6xl font-semibold">{{ headline }}</h1>
      <h2 class="text-lg my-8 opacity-80">{{ title }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(['headline', 'title']);
</script>

<style></style>
