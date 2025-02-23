<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const count = ref(0);

onMounted(() => {
  const textContainer = document.querySelector('.text-container');
  const loader = document.querySelector('.loader');
  var tl = gsap.timeline();
  tl.to(textContainer, { translateY: '0%', duration: 1, ease: "power4.out"});
  tl.to(count, { value: 100, duration: 3, ease: "power4.inOut", onUpdate: () => { count.value = Math.round(count.value); } }, ">");
  tl.to(textContainer, { translateY: '-100%', duration: 1, ease: "power4.out"}, ">");
  tl.to(loader, { opacity: 0, duration: 1, ease: "power4.out"}, ">");
  tl.to(loader, { display: 'none', duration: 0, ease: "power4.out"}, ">");
  

});
</script>


<template>
  <div class="w-screen min-h-screen absolute top-0 left-0 bg-[#EBEBEB] z-100 loader">
    <div class="h-screen w-screen p-2 md:p-6 xl:p-10 overflow-hidden">
      <div class="w-full h-full relative flex flex-col justify-center border-[#1C1C1C]/20 border border-dashed">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -top-3 -left-3 text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -top-3 -right-3 text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -bottom-3 -left-3 text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -bottom-3 -right-3 text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
        <div class="">
        </div>
        <div class="overflow-y-hidden">
          <div class="w-full h-full flex flex-col justify-center px-10 md:px-18 xl:px-28 text-container translate-y-[100%] ">
            <div class=" flex justify-end ">
              <h1 class="text-xl md:text-3xl xl:text-5xl text-[#1C1C1C] leading-snug font-[Roxborough]"><span>{{ count }}%</span></h1>
            </div>
            <div class="flex justify-center">
              <div class="w-full">
                <div class="bg-[#1C1C1C] h-0.5 rounded-full" :style="{ width: count + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>