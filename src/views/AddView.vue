<script setup>
import { ref } from 'vue';

const contentInput = ref('');
</script>
<template>
  <div class="p-5">
    <div class="text-lg">할 일 추가하기</div>
    <textarea class="border rounded-lg" type="text" v-model="contentInput"></textarea>
  </div>
</template>