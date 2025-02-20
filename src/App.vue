<script setup lang="ts">
import Loader from './components/Loader.vue';
import TransitionPage from './components/TransitionPage.vue';

</script>

<template>
    <router-view></router-view>
    <TransitionPage />
    <Loader />
</template>

<style scoped>

</style>
