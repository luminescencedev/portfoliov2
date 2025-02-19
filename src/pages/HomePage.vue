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
                    <p>CURRENTLY <a class="efrei" href="https://www.efrei.fr" target="_blank">@EFREI</a></p>
                </div>
            </div>
        </div>
    </Landing>
</template>

<style>

</style>