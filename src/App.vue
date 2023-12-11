<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { notice } from '@/util/notice.js';
import { inject } from '@vercel/analytics';
notice();
inject();
</script>

<template>
  <header>
    <div class="w-full bg-slate-50">
      <nav class="px-5 py-3 flex space-x-5">
        <RouterLink to="/"><div>Home</div></RouterLink>
        <RouterLink to="/about"><div>About</div></RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
