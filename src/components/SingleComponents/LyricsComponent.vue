
<script setup lang="ts">
import { onUpdated, ref, type PropType, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  lyrics: {
    type: Array as PropType<string[]>,
    required: true,
  }
})

const currentLyricsIndex = ref<number>(0);
const lyricsRefs = ref<HTMLElement[]>([]);

const setLyricsRef = (el: HTMLElement | null, index: number) => {
  if (el) {
    lyricsRefs.value[index] = el;
  }
}

const handleLyrics = (e: KeyboardEvent) => {
  console.log(e)
  if (e.key === "Enter") {
    if (currentLyricsIndex.value < props.lyrics.length - 1) {
      if (props.lyrics[currentLyricsIndex.value + 1].includes("[")) {
        currentLyricsIndex.value += 2
        return
      }
      currentLyricsIndex.value += 1
    }
  } else if (e.key === "Delete" || e.key === "Backspace") {
    if (currentLyricsIndex.value > 0) {
      if (props.lyrics[currentLyricsIndex.value - 1].includes("[") && currentLyricsIndex.value - 2 > 0) {
        currentLyricsIndex.value -= 2
        return
      }
      currentLyricsIndex.value -= 1
    }
  }
}


onUpdated(() => {
  const el = lyricsRefs.value[currentLyricsIndex.value];
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
});

onMounted(()=>{
  window.addEventListener('keydown', handleLyrics)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleLyrics)
})

const getScale = (index: number): number => {
  const distance = Math.abs(currentLyricsIndex.value - index)
  const scale = 1.3 - distance * 0.1
  return Math.max(scale, 0.8)
}
const getOpacity = (index: number): number => {
  const distance = Math.abs(currentLyricsIndex.value - index)
  const opacity = 1 - distance * 0.2
  return Math.max(opacity, 0.1)
}

</script>

<template>
  <div
    @keyup.enter="currentLyricsIndex++"
    v-for="(item, index) in props.lyrics"
    :key="index"
    :ref="el => setLyricsRef(el, index)"
    :class="currentLyricsIndex == index ? 'text-4xl font-semibold' : 'text-2xl'"
    :style="{
    transform: `scale(${getScale(index)})`,
    opacity: getOpacity(index),
    filter: currentLyricsIndex == index ? 'none' : 'blur(1px)',
  }"
    class=" inline-block w-screen transition-all duration-300 ease-in-out text-center"
  >
    {{ item }}
  </div>

</template>

<style>

</style>
