import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTodoStore = defineStore('todo', () => {
  const list = ref([]);

  function getTodoFromLocalStorage() {
    const defaultTodos = [
      '금요일 잠실 방어회 술 약속!',
      '토요일 삼청동 데이트!',
      '일요일 친구들과 축구!'
    ]
    const todos = localStorage.getItem('todos');
    let parsedTodos = null;
    if (todos) {
      parsedTodos = JSON.parse(todos);
      if (parsedTodos.length === 0) {
        parsedTodos = defaultTodos;
      }
      return parsedTodos;
    }
    return defaultTodos;
  }

  function setTodoToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function add(todo) {
    list.value.push(todo);
    setTodoToLocalStorage(list.value);
  }

  function remove(index) {
    list.value.splice(index, 1);
    setTodoToLocalStorage(list.value);
  }

  function edit(index, todo) {
    list.value[index] = todo;
    setTodoToLocalStorage(list.value);
  }

  function reInit() {
    localStorage.clear();
    list.value = getTodoFromLocalStorage();
  }

  if (list.value.length === 0) {
    list.value = getTodoFromLocalStorage();
  }

  return {
    list,
    add,
    remove,
    edit,
    getTodoFromLocalStorage,
    setTodoToLocalStorage,
    reInit
  };
});
