<script setup>
import { RouterLink } from 'vue-router';
import SolidPlusCircleIcon from '@/components/icons/SolidPlusCircleIcon.vue';
import SolidMapPinIcon from '@/components/icons/SolidMapPinIcon.vue';
import MiniHomeIcon from '@/components/icons/MiniHomeIcon.vue';
</script>
<template>
  <footer class="fixed bottom-0 left-0 w-full h-12 bg-slate-50 flex items-center sm:static">
    <nav class="w-full px-10 flex justify-between items-center">
      <RouterLink to="/"><MiniHomeIcon /></RouterLink>
      <RouterLink to="/add"><SolidPlusCircleIcon /></RouterLink>
      <RouterLink to="/map"><SolidMapPinIcon /></RouterLink>
    </nav>
  </footer>
</template>
