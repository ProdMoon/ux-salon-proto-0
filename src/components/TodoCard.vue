<script setup>
import { ref } from 'vue';
import { useTodoStore } from '@/stores/TodoStore';

const props = defineProps({
  content: String,
  myIndex: Number,
});

const contentInput = ref('');
const isEditing = ref(false);

const todoStore = useTodoStore();

function remove() {
  todoStore.remove(props.myIndex);
}

function startEdit() {
  contentInput.value = props.content;
  isEditing.value = true;
}

function finishEdit() {
  todoStore.edit(props.myIndex, contentInput.value);
  contentInput.value = '';
  isEditing.value = false;
}
</script>

<template>
  <div class="border rounded-lg p-5">
    <div class="flex items-center justify-between">
      <template v-if="!isEditing">
        <div class="text-xl">{{ content }}</div>
        <div class="flex items-center space-x-2">
          <button class="p-3 text-gray-500" @click="startEdit">수정</button>
          <button v-if="!isEditing" class="p-3 text-gray-500" @click="remove">X</button>
        </div>
      </template>
      <template v-else>
        <textarea class="border rounded-lg" type="text" v-model="contentInput"></textarea>
        <button class="p-3 text-gray-500" @click="finishEdit">완료</button>
      </template>
    </div>
  </div>
</template>
