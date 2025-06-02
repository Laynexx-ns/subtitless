<script setup lang="ts">
import {Search} from 'lucide-vue-next'
import Container from '@/components/SingleComponents/basic/Container.vue';
import SunLight from '@/components/SingleComponents/SunLight.vue';
import { navigateTo } from '@/funcs/NavigateTo.ts';
import { ref } from 'vue';



const wavesActive = ref<boolean>(false)
</script>

<template>
  <Container  class="overflow-hidden">
    <div class="flex flex-col gap-4 items-center">

      <SunLight :waving="wavesActive" class="sunlight w-full flex  justify-center "/>

      <div class="z-10 flex items-center flex-col">

        <div class="texts">
          <h1 class="text-4xl md:text-5xl font-bold opacity-80">Welcome to the</h1>
          <h1 class="subtitles text-7xl md:text-9xl font-black tracking-tight">Subtitless</h1>
        </div>

        <button
          @mouseenter="wavesActive = true"
          @mouseleave="wavesActive = false"
          @click="navigateTo('/search')"
          class="mt-10 flex gap-2 text-md justify-center hover:scale-120 transition-all try border rounded-full px-6 py-4 backdrop-blur-3xl bg-black/20 w-max"><Search/>Search the song</button>
      </div>
    </div>
  </Container>
</template>

<style lang="scss">
@keyframes appear {
  0%{
    filter: blur(40px);
    scale: 0.5;
    opacity: 0;
    transform: translateY(1000px);
  }
  70%{
    filter: blur(20px);
  }
  to{
    filter: none;
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes from-invisible {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0.1;
  }
  100%{
    opacity: 0.5;
  }
}


.sunlight, .try{
  opacity: 0;
  animation: from-invisible 1s ease-in-out forwards;
  animation-delay: 1s;
}




@for $i from 1 through 2{
  .texts h1:nth-child(#{$i}){
    opacity: 0;
    animation: appear 1s ease-in-out forwards  ;
    animation-delay: #{0.3 * $i}s;
  }
}



</style>
