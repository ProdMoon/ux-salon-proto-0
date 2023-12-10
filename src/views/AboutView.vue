<script setup>
import ModalComponent from '@/components/ModalComponent.vue';
import { ref } from 'vue';
const isOpen = ref(false);
</script>

<template>
  <div class="text-xl">
    <h1>This is an about page</h1>
    <button class="border p-2" @click="isOpen = true">Open Modal</button>
    <ModalComponent :open="isOpen" @close="isOpen = false">
      <div class="p-5">
        <h1 class="text-2xl">Modal</h1>
        <p>This is a modal</p>
      </div>
    </ModalComponent>
  </div>
</template>
