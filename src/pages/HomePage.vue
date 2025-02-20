<script lang="ts" setup>
import Landing from '../Layouts/Landing.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentRouteName = route.name as string; 
</script>

<template>
    <Landing :currentRouteName="currentRouteName">
        <div class="w-full h-[40%] flex flex-row items-center justify-center">
            <div class="w-[33%] flex flex-col items-center justify-center leading-none gap-4">
                <p>⯌</p>
                <div class="text-[#1C1C1C]/80 text-center">
                    <p>PASSIONATE WITH CREATIVE DESIGN,</p>
                    <p>I PRACTICE EVERY DAY TO BE BETTER AT MY WORK.</p>
                </div>
            </div>
            <div class="w-[34%] flex flex-col items-center justify-center">
                <img src="../assets/images/illu_boy.svg" alt="">
            </div>
            <div class="w-[33%] flex flex-col items-center justify-center leading-none gap-4">
                <p>⯌</p>
                <div class="text-[#1C1C1C]/80 text-center">
                    <p>ARTHUR GARNIER (HE/HIM),</p>
                    <p>IM A FRENCH WEB DEVELOPER BASED IN PARIS.</p>
                    <p>CURRENTLY <a class="underline-anim" href="https://www.efrei.fr" target="_blank">@EFREI</a></p>
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
  height: 1px;
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