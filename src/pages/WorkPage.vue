<script lang="ts" setup>
import Landing from '../Layouts/Landing.vue';
import Works from '../components/Works.vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const currentRouteName = route.name  as string;

const scrollToWorks = () => {
  const works = document.getElementById('works');
  works?.scrollIntoView({ behavior: 'smooth' });
};

const scrollToTop = () => {
  const top = document.getElementById('top');
  top?.scrollIntoView({ behavior: 'smooth' });
}


</script>
<template>
  <div id="page" class="w-screen h-screen overflow-x-hidden">
    <Landing :currentRouteName="currentRouteName">
      <div class="w-full h-[40%] px-4 pb-4 flex justify-start">
        <div class="w-[50%] h-full flex flex-col justify-end gap-4 text-xl">
          <p>Welcome to my portfolio! As a web developer and Bachelor's student at <span class="underline-anim">EFREI Paris</span>, I've worked on various projects that blend technical expertise with creativity. Through hands-on experience, I focus on building efficient, user-friendly, and innovative applications</p>
          <p>I'm also looking for opportunities—a final-year internship and an apprenticeship starting next year—to further develop my expertise in real-world environments. Feel free to explore my work and see how I bring ideas to life!</p>
        </div>
        <div class="w-[50%] h-full flex flex-col justify-end items-center">
          <div class=" flex flex-col items-center gap-4 pb-13 cursor-pointer" @click.prevent="scrollToWorks">
            <h1 class="text-center">Click me <br>to see my work</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>
          
        </div>
      </div>
    </Landing>
    <Works id="works"/>
    <div class="toTop fixed bottom-10 right-10 p-2 cursor-pointer" @click.prevent="scrollToTop">Top</div>
  </div>
</template>



<style>
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

