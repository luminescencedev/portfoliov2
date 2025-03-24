<template>
  <div class="relative overflow-hidden w-full">
    <div class="flex animate-scroll space-x-8">
      <div v-for="(skill, index) in [...skills, ...skills]" :key="`${index}-${skill}`" 
           class="flex items-center space-x-2 whitespace-nowrap">
        <span class="text-[#1C1C1C] font-medium">{{ skill }}</span>
        <span class="text-blue-400">•</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = [
  'HTML',
  'CSS',
  'Tailwind',
  'JavaScript',
  'PHP',
  'MySQL',
  'PostgreSQL',
  'Vue.js',
  'React',
  'Alpine.js',
  'Express.js'
]
</script>

<style scoped>
.animate-scroll {
  animation: scroll 20s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>