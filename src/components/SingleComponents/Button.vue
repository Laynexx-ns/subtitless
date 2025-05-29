<script setup lang="ts">
import { type PropType, defineProps, computed } from 'vue';
import {ButtonTypes} from '@/components/types/ButtonTypes.ts';
import { navigateTo } from '@/funcs/NavigateTo.ts';


const props = defineProps({
  variant: {
    type: Number as PropType<ButtonTypes>,
    required: true,
  },
  url: String,
})

const style = computed((): string => {
  switch (props.variant) {
    case ButtonTypes.accent:
      return "accent border rounded-full font-semibold hover:font-black transition-all";
    case ButtonTypes.basic:
      return "border rounded-full hover:font-bold hover:border-2";
    case ButtonTypes.outline:
      return "";
    default:
      return "";
  }
});



</script>

<template>
  <button
    class="px-6 hover:scale-110  py-4"
    :class="style"
    @click="navigateTo(url ?? '/')"
  >
    <slot/>
  </button>

</template>

<style scoped>
.accent{
  background-color: var(--main-white);
  color: var(--main-background);
  border: none;
}

</style>
