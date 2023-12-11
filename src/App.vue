<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { notice } from '@/util/notice.js';
import { inject } from '@vercel/analytics';
notice();
inject();
</script>

<template>
  <div class="w-screen h-screen flex items-center justify-center bg-gray-700">
    <div class="w-full h-full bg-white sm:w-[430px] sm:h-[932px] relative">
      <RouterView />
      <footer class="w-full absolute bottom-0 left-0">
        <div class="w-full bg-slate-50">
          <nav class="px-5 py-3 flex space-x-5">
            <RouterLink to="/"><div>Home</div></RouterLink>
            <RouterLink to="/about"><div>About</div></RouterLink>
          </nav>
        </div>
      </footer>
    </div>
  </div>
</template>
