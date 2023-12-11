<script setup>
import { useTodoStore } from '@/stores/TodoStore.js';
import TodoCard from '@/components/TodoCard.vue';

const todoStore = useTodoStore();

function reInit() {
  todoStore.reInit();
}
</script>

<template>
  <main>
    <div v-if="todoStore.list.length > 0" class="p-5 space-y-5">
      <TodoCard v-for="(content, index) in todoStore.list" :key="index" :content="content" :my-index="index" />
    </div>
    <div v-else class="flex flex-col items-center justify-center h-full min-h-[600px]">
      <h1 class="text-2xl font-bold">할 일이 없습니다.</h1>
      <button @click="todoStore.add('새로운 할 일')" class="mt-5 px-5 py-2 bg-blue-500 text-white rounded-md">할 일 추가하기</button>
    </div>
    <button class="w-full text-gray-300" @click="reInit">(For UX Salon) 처음 모습으로 되돌리기</button>
  </main>
</template>
