<script setup>
import { RouterView } from 'vue-router';
import FooterComponent from '@/components/FooterComponent.vue';
import { notice } from '@/util/notice.js';
import { inject } from '@vercel/analytics';
notice();
inject();
</script>

<template>
  <div class="w-screen h-screen flex items-center justify-center bg-gray-700">
    <div class="w-full h-full bg-white sm:w-[430px] sm:h-[932px] relative">
      <RouterView />
      <FooterComponent />
    </div>
  </div>
</template>
