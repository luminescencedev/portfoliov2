<script lang="ts" setup>
import Header from '../components/Header.vue'
const links = ['About', 'Works', 'Contact']
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const target = ref('Home');


onMounted(() => {

    const linkElements = document.querySelectorAll('.link')
    const menuBg = document.querySelector('.menu-bg')
    const menuText = document.querySelectorAll('.menu .text')
    const menu = document.querySelector('.menu')
    gsap.set(menu, { opacity: 1})

    linkElements.forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(menuBg, {  height: '15vh', duration: 0.5, ease: 'power2.out' })
        target.value = link.textContent?.slice(2) || 'Home'
        gsap.to(menuText, { color: 'rgb(235, 235, 235)', duration: 0.5, ease: 'power2.out' })
    })
    link.addEventListener('mouseleave', () => {
        gsap.to(menuBg, {  height: 0, duration: 0.5, ease: 'power2.in' })
        gsap.to(menuText, { color: '#1C1C1C', duration: 0.5, ease: 'power2.in' })
    })
})
})

</script>

<!-- <script lang="ts" setup>
import Header from '../components/Header.vue'
const links = ['About', 'Works', 'Contact']
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { useRouter } from 'vue-router'

const target = ref('Home');
const router = useRouter();

onMounted(() => {
    const linkElements = document.querySelectorAll('.link')
    const menuBg = document.querySelector('.menu-bg')
    const menuText = document.querySelectorAll('.menu .text')

    gsap.set(menuBg, { height: 0 })

    linkElements.forEach(link => {
        const handleMouseEnter = () => {
            gsap.to(menuBg, { height: '15vh', duration: 0.5, ease: 'power2.out' })
            target.value = link.textContent?.slice(2) || 'Home'
            gsap.to(menuText, { color: 'rgb(235, 235, 235)', duration: 0.5, ease: 'power2.out' })
        }

        const handleMouseLeave = () => {
            gsap.to(menuBg, { height: 0, duration: 0.5, ease: 'power2.in' })
            gsap.to(menuText, { color: '#1C1C1C', duration: 0.5, ease: 'power2.in' })
        }

        const handleClick = (event: Event) => {
            event.preventDefault();
            link.removeEventListener('mouseenter', handleMouseEnter)
            link.removeEventListener('mouseleave', handleMouseLeave)
            gsap.to(menuBg, { height: '100vh', duration: 0.5, ease: 'power2.out', onComplete: () => {
                const to = link.getAttribute('href');
                if (to) {
                    router.push(to).then(() => {
                        gsap.to(menuBg, { height: 0, duration: 0.5, ease: 'power2.in' });
                    });
                }
            }});
        }

        link.addEventListener('mouseenter', handleMouseEnter)
        link.addEventListener('mouseleave', handleMouseLeave)
        link.addEventListener('click', handleClick)
    })
})
</script> 

TO ADD - URGENT

--> 

<template>
    <Header />
    <div class=" w-screen h-screen p-10 overflow-hidden">
        <div class="w-full h-full relative flex flex-col border-[#1C1C1C]/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -top-3 -left-3  text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -top-3 -right-3  text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -bottom-3 -left-3  text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 w-6 -bottom-3 -right-3  text-[#1C1C1C]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
            <div class="w-full h-[40%] flex flex-row items-center justify-center gap-10 text-[18.5rem] tracking-tighter">
                <p class="font-[Roxborough] hover-title">Arthur</p>
                <p class="text-[#1C1C1C] font-[Roobert-Regular]">Garnier</p>
            </div>
            <div class="h-[20%] w-full menu z-10 ">
                <div class="w-full h-full flex flex-row items-center justify-between text-[1rem]">
                    <p class="text-[#1C1C1C] text">Since 2004</p>
                    <router-link :key="link" :to="`/${link.toLowerCase()}`" v-for="link in links" class="link" >
                        <p class="text-[#878787]/50">0{{ links.indexOf(link)+1}}</p>
                        <p class="text">{{ link }}</p>
                    </router-link>
                    <p class="text-[#1C1C1C] text">2025&copy;</p>
                    
                </div>
                
            </div>
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
                        <p>CURRENTLY <a class="efrei" href="https://www.efrei.fr" target="_blank">@EFREI</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.hover-title {
  transition: color 0.5s ease-in-out, -webkit-text-stroke 0.5s ease-in-out;
  color: #1C1C1C;
  -webkit-text-stroke: 3px transparent;
}

.hover-title:hover {
    color: transparent;
    -webkit-text-stroke: 3px #1C1C1C;
}

</style>