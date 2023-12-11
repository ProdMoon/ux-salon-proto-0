<script setup>
import { ref } from 'vue';
import { useTodoStore } from '@/stores/TodoStore.js';
import SolidPlusCircleIcon from '@/components/icons/SolidPlusCircleIcon.vue';

const todoStore = useTodoStore();
const contentInput = ref('');

function addTodo() {
  todoStore.add(contentInput.value);
  contentInput.value = '';
}
</script>
<template>
  <div class="p-5">
    <div class="text-lg">할 일 추가하기</div>
    <div class="flex flex-col items-center space-y-5">
      <textarea class="w-full border rounded-lg" type="text" v-model="contentInput"></textarea>
      <SolidPlusCircleIcon class="w-10 h-10 text-gray-500" @click="addTodo" />
    </div>
  </div>
</template>
