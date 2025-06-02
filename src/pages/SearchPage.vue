<script setup lang="ts">
import {Search} from 'lucide-vue-next'
import Container from '@/components/SingleComponents/basic/Container.vue';
import { watch, ref } from 'vue';
import axios from 'axios'
import ReturnButton from '@/components/SingleComponents/basic/ReturnButton.vue';
import { navigateTo } from '@/funcs/NavigateTo.ts';


const mouseEnter = ref<boolean>(false)
const searchString = ref<string>("")
const searchClicked = ref<boolean>(false)



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

const handlerSearch = async (text: string)=>{
  const splittedText = text.split(' - ').map((item: string) => {return item.split(' ').join('-').toLowerCase()})
  const response = (await axios.get(`http://localhost:3001/?author=${splittedText[0]}&track=${splittedText[1]}`)).status
  if (response != 200){
    console.error("not found")
  } else{
    navigateTo(`/search/${splittedText[0]}.${splittedText[1]}`)
  }
  console.log(response)
}
</script>

<template>
  <ReturnButton url="/"/>
  <Container>
    <div class="flex flex-col absolute top-44 gap-10">
      <h1
        :class="searchClicked ? 'disappear' : 'appear'"
        class="appear text-3xl ">Search the song</h1>

      <div
        @focusin="handleMouseEnter(true)"
        class="input-wrapper relative flex scale-120 md:scale-200 flex-row gap-4"
        :class="searchClicked ? 'disappear' : 'appear'"
      >
        <input
          v-model="searchString"
          class="focus:ring-0 focus:outline-0 font-light bg-[#09090b]/20 backdrop-blur-2xl  search-input  w-full p-3 text-md px-16 rounded-2xl "/>
        <Search class="absolute opacity-70 top-1/4 left-5"/>
        <button

          @click="mouseEnter=true; handlerSearch(searchString)" class="absolute top-1/4 right-4 font-thin opacity-50 hover:opacity-70">найти</button>
      </div>
      <span class="appear -mt-4 opacity-50 font-thin">author - track</span>
    </div>



  </Container>
</template>

<style>
.appear{
  animation: top-appear 1s forwards;
}
.disappear{
  animation: top-disappear 1s forwards;
}


@keyframes top-appear {
  from{
    filter: blur(40px);
    scale: 0.5;
    opacity: 0;
    transform: translateY(-1000px);
  }
  to{
    filter: none;
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes top-disappear {
  from{
    filter: none;
    opacity: 1;
    transform: translateY(0);
  }
  to{
    filter: blur(40px);
    scale: 0.5;
    opacity: 0;
    transform: translateY(-1000px);
  }
}

.lightning::before{
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
