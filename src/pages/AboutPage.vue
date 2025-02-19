<script lang="ts" setup>
import Landing from '../Layouts/Landing.vue';

import { useRoute } from 'vue-router';

const route = useRoute();
const currentRouteName = route.name  as string;

</script>

<template>
  <Landing :currentRouteName="currentRouteName">
    <div class="w-full h-[40%] flex flex-row items-center justify-center">
      <p class="text-[10rem] leading-none font-[Roxborough]">{{ currentRouteName }}</p>
    </div>
  </Landing>
</template>



<style>

</style>