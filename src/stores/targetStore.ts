import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTargetStore = defineStore('target', () => {
  const target = ref('Home');

  function setTarget(newTarget: string) {
    target.value = newTarget;
  }

  return { target, setTarget };
});