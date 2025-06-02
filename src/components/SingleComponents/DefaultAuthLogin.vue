<script setup lang=ts>
import Input from '@/components/SingleComponents/basic/Input.vue'
import { ref } from 'vue'

const loginInputText = ref<string>('')
const passwordInputText = ref<string>('')

const updateLoginInputText = (value: string) =>{
  loginInputText.value = value
}

const updatePasswordInputText = (value: string) =>{
  passwordInputText.value = value
}

</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col gap-2 text-left">
      <span>Login</span>
      <Input
        type="text"
        @update:text="updateLoginInputText" :text="loginInputText"/>
    </div>
    <div class="flex flex-col gap-2 text-left">
      <span>Password</span>
      <Input
        type="password"
        @update:text="updatePasswordInputText" :text="passwordInputText"/>
    </div>
  </div>
</template>
