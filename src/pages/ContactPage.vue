<script lang="ts" setup>
import Landing from '../Layouts/Landing.vue';

import { useRoute } from 'vue-router';

const route = useRoute();
const currentRouteName = route.name as string;

</script>
<template>
  <Landing :currentRouteName="currentRouteName">
    <div class="w-full h-[50%] md:h-[40%] flex flex-col md:flex-row items-end px-4 md:px-12">
      <div class="w-full md:w-[70%] h-full flex flex-col justify-end items-center md:items-end p-4 md:p-12">
        <div class="text-[#1C1C1C] flex flex-col text-center md:text-end gap-2 md:gap-4">
          <p class="text-[3vw] md:text-[2vw] xl:text-[1.5vw] leading-relaxed">ARTHUR GARNIER (HE/HIM),</p>
          <p class="text-[3vw] md:text-[2vw] xl:text-[1.5vw] leading-relaxed">IM A FRENCH WEB DEVELOPER BASED IN PARIS.</p>
          <p class="text-[3vw] md:text-[2vw] xl:text-[1.5vw] leading-relaxed">CURRENTLY <a class="underline-anim" href="https://www.efrei.fr" target="_blank">@EFREI</a></p>
        </div>
      </div>
      <div class="flex w-full md:w-[30%] h-full flex-col md:justify-end md:items-end p-12 gap-4">
        <div class="flex justify-evenly flex-row md:flex-col gap-4 text-[#1C1C1C]">
          <a href="mailto:arthur.garnier1090@gmail.com" class="flex justify-end items-center">
            <div class="underline-anim flex items-center justify-end">
              <h1 class="text-[2vw] xl:text-[1.5vw] leading-relaxed">Email</h1>
              <img src="../assets/images/arrow-top-right.svg" alt="" class="size-4 md:size-5">
            </div>
          </a>
          <a href="https://www.linkedin.com/in/arthurgarnierdev" target="_blank" class="flex justify-end">
            <div class="underline-anim flex items-center justify-end">
              <h1 class="text-[2vw] xl:text-[1.5vw] leading-relaxed">LinkedIn</h1>
              <img src="../assets/images/arrow-top-right.svg" alt="" class="size-4 md:size-5">
            </div>
          </a>
          <a href="https://github.com/luminescencedev" target="_blank" class="flex justify-end">
            <div class="underline-anim flex items-center justify-end">
              <h1 class="text-[2vw] xl:text-[1.5vw] leading-relaxed">GitHub</h1>
              <img src="../assets/images/arrow-top-right.svg" alt="" class="size-4 md:size-5">
            </div>
          </a>
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