<script setup lang=ts>
import { ref, watch } from 'vue'

const props = defineProps({
    text: String,
    type: {
      required: true,
      type: String,
    }
})
const emit = defineEmits(['update:text'])

const text = ref<string>(props.text ?? '')

watch(()=> text.value, ()=>{
  emit('update:text', text.value)
})

</script>

<template>
  <input
    :type="props.type"
    class="px-4 py-2 rounded-xl border font-semibold" v-model="text"/>
</template>