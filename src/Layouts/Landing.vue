<script lang="ts" setup>
import Header from '../components/Header.vue'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { useTargetStore } from '../stores/targetStore'

const props = defineProps<{ currentRouteName: string }>();

const isHome = props.currentRouteName === 'Home';

const links = ['About', 'Works', 'Contact'];
const targetStore = useTargetStore();
const isVisible = ref(true);

onMounted(() => {
    isVisible.value = true;

    const linkElements = document.querySelectorAll('.link');
    const menuBg = document.querySelector('.menu-bg');
    const menuText = document.querySelectorAll('.menu .text');

    linkElements.forEach(link => {
        const handleMouseEnter = () => {
            gsap.to(menuBg, { height: '15vh', duration: 0.5, ease: 'power2.out' });
            targetStore.setTarget(link.textContent?.slice(2) || 'Home');
            gsap.to(menuText, { color: 'rgb(235, 235, 235)', duration: 0.5, ease: 'power2.out' });
        };
        const handleMouseLeave = () => {
            gsap.to(menuBg, { height: 0, duration: 0.5, ease: 'power2.in' });
            gsap.to(menuText, { color: '#1C1C1C', duration: 0.5, ease: 'power2.in' });
        };

        const handleClick = () => {
            if (link.textContent?.slice(2).toLowerCase() !== props.currentRouteName.toLowerCase()) {
                gsap.to('.menu', {
                    opacity: 0,
                    duration: 0.2,
                    ease: 'power2.in',
                    onComplete: () => {
                    isVisible.value = false;
                    }
                });
                link.removeEventListener('mouseenter', handleMouseEnter);
                link.removeEventListener('mouseleave', handleMouseLeave);
            }
        };

        link.addEventListener('mouseenter', handleMouseEnter);
        link.addEventListener('mouseleave', handleMouseLeave);
        link.addEventListener('click', handleClick);
    });
});
</script>

<template>
    <Header />
    <div class="w-screen min-h-screen">
        <div class="h-screen w-screen p-10 overflow-hidden">
            <div class="w-full h-full relative flex flex-col border-[#1C1C1C]/20 border border-dashed">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -top-3 -left-3 text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -top-3 -right-3 text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -bottom-3 -left-3 text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -bottom-3 -right-3 text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
                <div class="w-full h-[40%] flex flex-row items-center justify-center gap-10 text-[17vw] tracking-tighter">
                    <p v-if="!isHome" class="font-[Roxborough] hover-title">{{ props.currentRouteName }}</p>
                    <p v-if="isHome" class="font-[Roxborough] hover-title">Arthur</p>
                    <p v-if="isHome" class="text-[#1C1C1C] font-[Roobert-Regular]">Garnier</p>
                </div>
                <div class="h-[20%] w-full menu z-11" :class="{ 'hidden': !isVisible }">
                    <div class="w-full h-full flex flex-row items-center justify-between text-[1rem]">
                        <p class="text-[#1C1C1C] text">Since 2004</p>
                        <router-link :key="link" :to="`/${link.toLowerCase()}`" v-for="link in links" class="link">
                            <p class="text-[#878787]/50">0{{ links.indexOf(link) + 1 }}</p>
                            <p class="text">{{ link }}</p>
                        </router-link>
                        <p class="text-[#1C1C1C] text">2025&copy;</p>
                    </div>
                </div>
                <div class="h-[20%] w-full" :class="{ 'hidden': isVisible, 'block': !isVisible }"></div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style>
.hover-title {
    color: #1C1C1C;
    -webkit-text-stroke: 3px transparent;
    transition: all 0.5s ease;
}

.hover-title:hover {
   color: transparent;
    -webkit-text-stroke: 3px #1C1C1C;
}
</style>