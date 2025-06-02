<script setup lang="ts">
import {ArrowLeft} from 'lucide-vue-next';
import { navigateTo } from '@/funcs/NavigateTo.ts';

const props = defineProps({
  url: {
    required: true,
    type: String,
  }
})
</script>

<template>
  <button
    @click="navigateTo(props.url)"
    class="flex size-16 text-3xl items-center justify-center opacity-80 hover:opacity:100">
    <ArrowLeft/>
  </button>
</template>

<style scoped>

</style>
