<script lang="ts" setup>
import Header from '../components/Header.vue'
import { onMounted, ref} from 'vue'
import gsap from 'gsap'
import { useTargetStore } from '../stores/targetStore'

const props = defineProps<{ currentRouteName: string }>();

const isHome = props.currentRouteName === 'Home';

const isMobile = ref(true);

const links = ['About', 'Works', 'Contact'];
const targetStore = useTargetStore();
const isVisible = ref(true);

onMounted(() => {
    isVisible.value = true;

    const checkScreenSize = () => {
        isMobile.value = window.innerWidth < 768
    }
    // Check initial screen size
    checkScreenSize()
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize)

    const linkElements = document.querySelectorAll('.link');
    const menuBg = document.querySelector('.menu-bg');
    const menuText = document.querySelectorAll('.menu .text');

    linkElements.forEach(link => {
        const handleMouseEnter = () => {
            gsap.to(menuBg, { height: '15vh', duration: 0.5, ease: 'power2.out' });
            const linkText = link.textContent?.slice(2) as string;
            if (!links.includes(linkText)) {
                targetStore.setTarget('Home');
            } else {
                targetStore.setTarget(linkText);
            }
            gsap.to(menuText, { color: 'rgb(235, 235, 235)', duration: 0.5, ease: 'power2.out' });
        };
        const handleMouseLeave = () => {
            gsap.to(menuBg, { height: 0, duration: 0.5, ease: 'power2.in' });
            gsap.to(menuText, { color: '#1C1C1C', duration: 0.5, ease: 'power2.in' });
        };

        const handleClick = () => {
            if (link.textContent?.slice(2).toLowerCase() !== props.currentRouteName.toLowerCase() ) {
                if (!(props.currentRouteName.toLowerCase() === 'home' && link.textContent ==='ART⯌')) {
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
        <div class="h-screen w-screen p-2 md:p-6 xl:p-10 overflow-hidden" id="top">
            <div class="w-full h-full relative flex flex-col border-[#1C1C1C]/20 border border-dashed">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -top-3 -left-3 text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -top-3 -right-3 text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -bottom-3 -left-3 text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -bottom-3 -right-3 text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
                <div class="w-full h-full landing-hero">
                    <div class="w-full h-[30%] md:h-[40%] flex flex-row items-center justify-center gap-4 md:gap-10 text-[15vw] md:text-[17vw] tracking-tighter">
                        <p v-if="!isHome" class="font-[Roxborough] hover-title">{{ props.currentRouteName }}</p>
                        <p v-if="isHome" class="font-[Roxborough] hover-title">Arthur</p>
                        <p v-if="isHome" class="text-[#1C1C1C] font-[Roobert-Regular]">Garnier</p>
                    </div>
                    <div class="h-[20%] w-full menu z-15" :class="{ 'hidden': !isVisible }">
                        <div class="w-full h-full flex flex-col md:flex-row items-center justify-between md:text-[1.5vw] xl:text-[1vw]">
                            <p class="text-[#1C1C1C] hidden md:block text z-15">Since 2004</p>
                            <router-link :key="link" :to="`/${link.toLowerCase()}`" v-for="link in links" class="flex flex-row gap-4 md:gap-0 md:flex-col link z-15">
                                <p :class="{ 'text': !isMobile}">{{ link }}</p>
                            </router-link>
                            <p class="text-[#1C1C1C] hidden md:block text z-15">2025&copy;</p>
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