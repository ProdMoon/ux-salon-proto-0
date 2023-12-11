<script setup>
import { RouterLink } from 'vue-router';
import SolidPlusCircleIcon from '@/components/icons/SolidPlusCircleIcon.vue';
import SolidMapPinIcon from '@/components/icons/SolidMapPinIcon.vue';
import MiniHomeIcon from '@/components/icons/MiniHomeIcon.vue';
</script>
<template>
  <footer class="w-full absolute bottom-0 left-0">
    <div class="w-full bg-slate-50">
      <nav class="px-10 py-3 flex justify-between items-center">
        <RouterLink to="/"><MiniHomeIcon /></RouterLink>
        <RouterLink to="/add"><SolidPlusCircleIcon /></RouterLink>
        <RouterLink to="/map"><SolidMapPinIcon /></RouterLink>
      </nav>
    </div>
  </footer>
</template>
