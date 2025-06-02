<script setup lang="ts">
import Button from '@/components/SingleComponents/basic/Button.vue';
import {ButtonTypes} from '@/components/types/ButtonTypes.ts';
</script>

<template>
  <div class="absolute top-12 right-12 flex gap-4">
    <Button
      url="/login"
      :variant="ButtonTypes.accent">Sign in</Button>
    <Button :variant="ButtonTypes.basic">Sign up</Button>

  </div>
</template>

<style scoped>

</style>
