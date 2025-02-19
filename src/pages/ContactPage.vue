<script lang="ts" setup>
import Landing from '../Layouts/Landing.vue';

import { useRoute } from 'vue-router';

const route = useRoute();
const currentRouteName = route.name as string;

</script>
<template>
  <Landing :currentRouteName="currentRouteName">
    <div class="w-full h-[40%] flex flex-row items-end justify-end">
      <div class="w-[50%] h-[50%] flex flex-col justify-end items-end p-6 text-4xl">
        <a href="https://www.linkedin.com/in/arthurgarnierdev" target="_blank" class="">LinkedIn <img src="../assets/images/arrow-top-right.svg" alt=""></a>
        <a href="https://github.com/luminescencedev" target="_blank" class="">GitHub <img src="" alt=""></a>
      </div>
    </div>
  </Landing>
</template>



<style>

</style>