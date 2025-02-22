<template>

    <div class="work-card flex flex-row justify-between p-6 border-t border-[#1C1C1C]/20 group border-dashed transition-all duration-300 ease-in-out" @click="handleClick">
        <div class="left-card flex flex-col">
                <h2 class="text-2xl transition-all duration-500 ease-in-out group-hover:translate-x-2 group-hover:text-blue-400">{{ props.data.name }}</h2>
                <p class="transition-all duration-300 ease-in-out group-hover:translate-x-2">{{ props.data.stack }}</p>
        </div>
        <div class="right-card flex flex-col items-end">
                <p class="text-2xl transition-all duration-300 ease-in-out group-hover:-translate-x-2">{{ props.data.type }}</p>
                <p class="transition-all duration-300 ease-in-out group-hover:-translate-x-2">{{ props.data.year }}</p>
        </div>
    </div>
    <div class="work-img absolute border border-[#1C1C1C]/20 border-dashed scale-0 top-[10%] left-[10%] z-102 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -top-3 -left-3 text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -top-3 -right-3 text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -bottom-3 -left-3 text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -bottom-3 -right-3 text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
      <img :src="props.data.img" alt="work" class=" object-cover h-[30vh]"/>
    </div> 
    
</template>

<script lang="ts" setup>

interface Work {
  name: string;
  type: string;
  stack: string;
  year: string;
  img: string;
  link: string;
}

const handleClick = () => {
  window.open(props.data.link, '_blank');
}

const props = defineProps<{ data: Work }>();

</script>

<style scoped>

.work-card {
    position: relative;
    cursor: pointer;
}

.work-img {
    transition: all 0.2s ease-in-out;
}

.work-card:hover ~ .work-img {
    scale:1;
}
</style>