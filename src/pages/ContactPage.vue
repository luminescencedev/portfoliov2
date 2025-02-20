<script lang="ts" setup>
import Landing from '../Layouts/Landing.vue';

import { useRoute } from 'vue-router';

const route = useRoute();
const currentRouteName = route.name as string;

</script>
<template>
  <Landing :currentRouteName="currentRouteName">
    <div class="w-full h-[40%] flex flex-row items-end text-2xl">
      <div class="w-[80%] h-[100%] flex flex-col  justify-end items-end p-12 ">
        <div class="text-[#1C1C1C] flex flex-col text-end gap-4">
          <p class="leading-none">ARTHUR GARNIER (HE/HIM),</p>
          <p class="leading-none">IM A FRENCH WEB DEVELOPER BASED IN PARIS.</p>
          <p class="leading-none">CURRENTLY <a class="underline-anim" href="https://www.efrei.fr" target="_blank">@EFREI</a></p>
        </div>
      </div>
      <div class="w-[20%] h-[100%] flex flex-col justify-end items-end p-12 gap-4">
        <div class="flex flex-col gap-4 text-[#1C1C1C]">
          <a href="https://www.linkedin.com/in/arthurgarnierdev" target="_blank" class="underline-anim flex flex-row items-end "><h1 class="leading-none">LinkedIn</h1><img src="../assets/images/arrow-top-right.svg" alt="" class="size-5"></a>
          <a href="https://github.com/luminescencedev" target="_blank" class="underline-anim flex flex-row items-end justify-end"><h1 class="leading-none ">GitHub</h1><img src="../assets/images/arrow-top-right.svg" alt="" class="size-5"></a>
        </div>
      </div>
    </div>
  </Landing>
</template>



<style scoped>
.underline-anim {
  position: relative;
}

.underline-anim:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: rgba(28, 28, 28, 0.8);
  transition: transform 0.25s ease-out;
  transform-origin: bottom right;
}

.underline-anim:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>