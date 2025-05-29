<script setup lang="ts">
import {Search} from 'lucide-vue-next'
import Container from '@/components/Container.vue';
</script>

<template>
  <Container>
    <div class="flex flex-col gap-10">
      <h1 class="appear text-3xl ">Search the song</h1>
      <div class="appear relative flex scale-200 flex-row gap-4">
        <input class="focus:ring-0 focus:outline-0 font-light  search-input border-[0.5px] w-full p-3 text-md px-16 rounded-2xl bg-black/20"/>
        <Search class="absolute opacity-70 top-1/4 left-5"/>
        <button class="absolute top-1/4 right-4 font-thin opacity-50 hover:opacity-70">найти</button>
      </div>
    </div>


  </Container>
</template>

<style scoped>
.appear{
  animation: appear 1s forwards;
}

.search-input::after{
  content: '';
  width: 100%;
  height: 100%;
  padding: 16px;
  background-color: wheat;
  backdrop-filter: blur(4px);
}
</style>
