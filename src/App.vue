<script setup lang="ts">
import Loader from './components/Loader.vue';
import { useTargetStore } from './stores/targetStore';
const targetStore = useTargetStore();

</script>

<template>
    <router-view></router-view>
    <div class="absolute left-0 top-[50%] h-screen w-screen bg-zinc-950 menu-bg translate-y-[-50%] overflow-hidden z-10">
        <div class="w-full h-full flex flex-col items-center justify-center">
            <p class="text-[#1C1C1C] text-[10rem] leading-none font-[Roxborough] translate-y-[-5%] ">{{ targetStore.target }}</p>
        </div>
    </div> 
    <Loader />
</template>

<style scoped>

</style>
