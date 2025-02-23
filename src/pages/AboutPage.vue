<script lang="ts" setup>
import Landing from '../Layouts/Landing.vue';
import About from '../components/About.vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const currentRouteName = route.name  as string;

const scrollToAbout = () => {
  const about = document.getElementById('about');
  about?.scrollIntoView({ behavior: 'smooth' });
};


const scrollToTop = () => {
  const top = document.getElementById('top');
  top?.scrollIntoView({ behavior: 'smooth' });
}




</script>

<template>
   <div id="page" class="w-screen h-screen overflow-x-hidden">
    <Landing :currentRouteName="currentRouteName">
      <div class="w-full h-[50%] md:h-[40%] flex flex-row items-center justify-center">
        <div class="flex flex-col items-center gap-4 cursor-pointer" @click.prevent="scrollToAbout">
          <h1 class="text-center">Learn More</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 arrow-animation">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>
    </Landing>
    <About id="about"/>
        <div class="toTop fixed bottom-10 right-10 p-2 cursor-pointer" @click.prevent="scrollToTop">Top</div>
  </div>
</template>



<style>
</style>