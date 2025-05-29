<script setup lang="ts">
import {Search} from 'lucide-vue-next'
import Container from '@/components/SingleComponents/Container.vue';
import { watch, ref } from 'vue';

const mouseEnter = ref<boolean>(false)

watch(() => mouseEnter.value, (newVal) =>{
  handleMouseEnter(newVal)
})

const handleMouseEnter = (value : boolean) =>{
  const object = document.querySelector('.input-wrapper')
  if (value){
    object?.classList.add('lightning')
    return
  }
  object?.classList.remove('lightning')
}
</script>

<template>
  <Container>
    <div class="flex flex-col absolute top-44 gap-10">
      <h1 class="appear text-3xl ">Search the song</h1>
      <div
        @focusin="handleMouseEnter(true)"
        class="appear input-wrapper relative flex scale-200 flex-row gap-4"
      >
        <input class="focus:ring-0 focus:outline-0 font-light bg-[#09090b]/20 backdrop-blur-2xl  search-input  w-full p-3 text-md px-16 rounded-2xl "/>
        <Search class="absolute opacity-70 top-1/4 left-5"/>
        <button @click="mouseEnter=true" class="absolute top-1/4 right-4 font-thin opacity-50 hover:opacity-70">найти</button>
      </div>
    </div>


  </Container>
</template>

<style scoped>
.appear{
  animation: top-appear 1s forwards;
}


@keyframes top-appear {
  from{
    scale: 0.5;
    opacity: 0;
    transform: translateY(-1000px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
}

.input-wrapper.lightning::before{
  content: '';
  position: absolute;
  border-radius: 1rem;
  inset: 0;
  z-index: -1;
  padding: 16px;
  background-color: wheat;
  opacity: 0.3;
  animation: blurry 1s ease forwards;
}

@keyframes blurry {
  to {
    filter: blur(60px);
  }
}

</style>
