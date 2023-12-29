<script setup>
import { RouterView } from 'vue-router';
import FooterComponent from '@/components/FooterComponent.vue';
// import { notice } from '@/util/notice.js';
import { inject } from '@vercel/analytics';
// notice();
inject();
</script>

<template>
  <div class="sm:h-screen flex items-center justify-center bg-gray-700">
    <div class="w-full bg-white sm:w-[430px] sm:h-[932px]">
      <div class="h-[calc(100%-3rem)] pb-12 overflow-auto sm:pb-0">
        <RouterView />
      </div>
      <FooterComponent />
    </div>
  </div>
</template>
