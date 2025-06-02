<script setup lang="ts">
import { watch, ref, defineProps } from 'vue';

const props = defineProps({
  waving: Boolean,
});


const kx = ref<number>(1)
const ky = ref<number>(1)

watch(() => props.waving, (newVal) => {
  console.log(props.waving)

  const object = document.querySelector('.object') as HTMLElement | null
  if (!object) return




  if (!newVal) {
    kx.value = 1
    ky.value = 1
    object.classList.remove('scaling')
    document.querySelector('.basic')?.classList.remove('scaling')
    document.querySelector('.first')?.classList.remove('scaling')
    return
  }

  object.classList.add('scaling')
  document.querySelector('.basic')?.classList.add('scaling')
  document.querySelector('.first')?.classList.add('scaling')

  kx.value = 1.5
  ky.value = 1.3
})


</script>

<template>

    <div class="object">
      <div class="light first" />
      <div class="light second " />
      <div class="light basic " />
      <div class="light fourth " />
      <div class="light fifth " />
    </div>


</template>

<style scoped>

*{
  --main-white: #ffc300;
  --light-white: #ffdd6f;
  --light-light-white: #fff2d7;
  --yellow: #fffa33;
}

.object {
  pointer-events: none;
  filter: blur(10px);

  transition: scale 1s ease-in-out;
}

.scaling {
  transition: scale 1s ease-in-out;
  opacity: 1;
  scale: 120%
}


.light {
  position: absolute;
  opacity: 0.5;
  width: 400px;
  height: 400px;
  background: radial-gradient(#ffc300, #ffdd6f);


  border-radius: 50%;
}

.light {

}



.basic {
  background-image: radial-gradient(var(--main-white), var(--light-white));
  filter: blur(40px);
}

.first {
  background-image: radial-gradient(rgba(0, 0, 0, 0), var(--light-light-white));
  filter: blur(30px);
}

.second {
  mix-blend-mode: luminosity;
  background-color: var(--light-light-white);
  filter: blur(60px);
}

.fourth {
  height: 1000px;
  background-color: var(--yellow);
  filter: blur(240px);
}

.fifth {
  background-color: var(--yellow);
  mix-blend-mode: luminosity;
  filter: blur(180px);
}
</style>
