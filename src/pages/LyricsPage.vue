<script setup lang="ts">
import Container from '@/components/SingleComponents/basic/Container.vue';
import { onMounted, ref, watch, onUnmounted} from 'vue';
import axios from 'axios'
import LyricsComponent from '@/components/SingleComponents/LyricsComponent.vue';
import ReturnButton from '@/components/SingleComponents/basic/ReturnButton.vue';


const needDialog = ref<boolean>(false)
const lyrics = ref<string[]>([])

onMounted(()=>{
  if (!localStorage.getItem('dialog')){
    needDialog.value = true
  }
})

const handleCloseDialog = () =>{
  needDialog.value = false
  localStorage.setItem('dialog', "true")
}

watch(needDialog, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})


onUnmounted(() => {
  document.body.style.overflow = ''
})

onMounted(async ()=>{
  if (lyrics.value.length < 1){
    await handlerSearch(window.location.href.split('/')[window.location.href.split('/').length-1])
  }
})

const handlerSearch = async (text: string)=>{
  const splittedText = text.split('.')
  const response = (await axios.get(`http://localhost:3001/?author=${splittedText[0]}&track=${splittedText[1]}`)).data
  if (response){
    lyrics.value = response
  }
  console.log(response)
}
</script>

<template>
  <ReturnButton url="/search"/>
  <Container
    :class="needDialog ? 'overflow-hidden':'' "
  >

    <div class="appear flex  overflow-y-hidden flex-col absolute top-44 gap-10">
      <LyricsComponent :lyrics="lyrics"/>
    </div>

    <div  v-if="needDialog"  class="absolute inset-0 w-screen h-full bg-black/5 backdrop-blur-md"/>
    <div  v-if="needDialog"  class="absolute appear bg-black/5 backdrop-blur-xl p-10  flex flex-col  gap-8 rounded-3xl items-center justify-center text-center">
      <h3 class="text-3xl w-full text-center">How to use Subtitless</h3>
      <span class="w-full text-left">
        Click ⏎ to go to the next line <br/>
        Click ⌫ to go to the previus line
      </span>
      <button @click="handleCloseDialog" class="w-full px-4 text-black py-3 rounded-2xl bg-[#FFF2D7]">I understand</button>
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
