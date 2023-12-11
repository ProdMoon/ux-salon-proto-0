<script setup>
import { RouterView } from 'vue-router';
import FooterComponent from '@/components/FooterComponent.vue';
import { notice } from '@/util/notice.js';
import { inject } from '@vercel/analytics';
notice();
inject();
</script>

<template>
  <div class="sm:h-screen flex items-center justify-center bg-gray-700">
    <div class="w-full h-screen bg-white sm:w-[430px] sm:h-[932px]">
      <div class="h-[calc(100%-3rem)] overflow-auto">
        <RouterView />
      </div>
      <FooterComponent />
    </div>
  </div>
</template>
