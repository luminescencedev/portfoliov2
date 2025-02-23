<script lang="ts" setup>
import WorkCard from '../components/WorkCard.vue';
import works from '../data/works';

</script>

<template>
  <div class="w-screen p-2 md:p-6 xl:p-10">
    <div class="w-full h-[calc(100vh-18px)] md:h-[calc(100vh-48px)] xl:h-[calc(100vh-80px)] relative flex flex-col border-[#1C1C1C]/20 border border-dashed works-hero justify-end">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -top-3 -left-3 text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -top-3 -right-3 text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -bottom-3 -left-3 text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -bottom-3 -right-3 text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
      <div>
        <div class="p-6">
          <h1 class="text-4xl font-bold text-[#1C1C1C]">Works :</h1>
        </div>
        
        <div v-for="work in works" :key="work.name">
          <WorkCard :data="work" />
        </div>
      </div>
    </div>
   
  </div>
</template>

<style scoped>

</style>