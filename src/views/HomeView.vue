<script setup>
import { ref, watch } from 'vue';
import TodoCard from '@/components/TodoCard.vue';

const todoInput = ref('');
const todos = ref([]);

function makeTodoObject(content) {
  return {
    content: content,
    editFunction: editTodo,
    removeFunction: removeTodo
  };
}

function addTodo() {
  const todoObject = makeTodoObject(todoInput.value);
  todos.value.push(todoObject);
  todoInput.value = '';
}

function editTodo(index, content) {
  todos.value[index].content = content;
}

function removeTodo(index) {
  todos.value.splice(index, 1);
}

function initTodos() {
  // const todosFromLocalStorage = localStorage.getItem('todos');
  // if (todosFromLocalStorage) {
  //   const parsedTodos = JSON.parse(todosFromLocalStorage);
  //   todos.value = parsedTodos.map((todo) => {
  //     return makeTodoObject(todo.content);
  //   });
  // }
  const initialTodos = [
    {
      content: '할 일 1',
      editFunction: editTodo,
      removeFunction: removeTodo
    },
    {
      content: '할 일 2',
      editFunction: editTodo,
      removeFunction: removeTodo
    },
    {
      content: '할 일 3',
      editFunction: editTodo,
      removeFunction: removeTodo
    }
  ];
  todos.value = initialTodos;
}

watch(
  todos,
  (newTodos) => {
    const parsedTodos = newTodos.map((todo) => {
      return {
        content: todo.content
      };
    });
    localStorage.setItem('todos', JSON.stringify(parsedTodos));
  },
  { deep: true }
);

initTodos();
</script>

<template>
  <main>
    <div class="flex items-center space-x-5">
      <textarea class="border rounded-lg" type="text" v-model="todoInput"></textarea>
      <button class="px-5 py-2 border rounded-lg" @click="addTodo">추가</button>
    </div>
    <div class="p-5 space-y-5">
      <TodoCard v-for="(todo, index) in todos" :key="index" :todoObject="todo" :my-index="index" />
    </div>
  </main>
</template>
