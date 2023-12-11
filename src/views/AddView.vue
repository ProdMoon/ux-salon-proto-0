<script setup>
import { ref } from 'vue';
import { useTodoStore } from '@/stores/TodoStore.js';
import SolidPlusCircleIcon from '@/components/icons/SolidPlusCircleIcon.vue';
import SolidMapPinIcon from '@/components/icons/SolidMapPinIcon.vue';
import OutlineExclamationTriangleIcon from '@/components/icons/OutlineExclamationTriangleIcon.vue';
import OutlineCheckCircleIcon from '@/components/icons/OutlineCheckCircleIcon.vue';

const todoStore = useTodoStore();
const contentInput = ref('');

function addTodo() {
  todoStore.add(contentInput.value);
  contentInput.value = '';
}

function executeExample() {
  const exButton = document.getElementById('example-button');
  exButton.disabled = true;
  exButton.innerText = '예시 실행 중...';
  document.getElementById('example-1').classList.add('hidden');
  document.getElementById('example-2').classList.add('hidden');
  document.getElementById('example-2').classList.remove('text-gray-500');
  document.getElementById('example-3').classList.add('hidden');
  
  let time = 0;

  const exStringList = '집에 갈 때 편의점에서 맥주 사가기'.split('');
  contentInput.value = '';
  exStringList.forEach((char) => {
    setTimeout(() => {
      contentInput.value += char;
    }, time);
    time += 80;
  });
  time += 500;
  const addButton = document.getElementById('add-button');

  setTimeout(() => {
    addButton.classList.add('text-gray-900');
  }, time);
  time += 200;

  setTimeout(() => {
    addButton.classList.remove('text-gray-900');
  }, time);
  time += 300;

  setTimeout(() => {
    document.getElementById('example-1').classList.remove('hidden');
  }, time);
  time += 1500;

  setTimeout(() => {
    document.getElementById('example-2').classList.remove('hidden');
  }, time);
  time += 1500;

  setTimeout(() => {
    document.getElementById('example-2').classList.add('text-gray-500');
  }, time);
  time += 800;

  setTimeout(() => {
    document.getElementById('example-3').classList.remove('hidden');
  }, time);
  time += 100;

  setTimeout(() => {
    contentInput.value = '';
  }, time);
  time += 500;

  setTimeout(() => {
    contentInput.value = '집에 갈 때 편의점에서 보리차 사가기';
    todoStore.add(contentInput.value);
  }, time);
  time += 1000;

  setTimeout(() => {
    exButton.disabled = false;
    exButton.innerText = '(For UX-Salon) 예시 실행해보기';
  }, time);
}
</script>
<template>
  <div class="p-5">
    <div class="text-lg">할 일 추가하기</div>
    <div class="flex flex-col items-center space-y-5">
      <textarea class="w-full border rounded-lg" type="text" v-model="contentInput"></textarea>
      <SolidPlusCircleIcon
        id="add-button"
        class="w-10 h-10 text-gray-500 hover:text-gray-900 cursor-pointer"
        @click="addTodo"
      />
    </div>
    <div class="py-5"></div>
    <div class="space-y-7">
      <div id="example-1" class="text-xl font-semibold hidden">
        <SolidMapPinIcon class="mb-2 text-blue-500" />
        집 근처 편의점에 접근하면 알림을 띄워 드릴게요.
      </div>
      <div id="example-2" class="text-xl font-semibold hidden">
        <OutlineExclamationTriangleIcon class="mb-2 text-yellow-500" />
        금요일에 술 약속이 예정되어 있어요. 건강을 위해 오늘은 다른 음료를 마셔보는 건 어떠세요?
      </div>
      <div id="example-3" class="text-xl font-semibold hidden">
        <OutlineCheckCircleIcon class="mb-2 text-green-500" />
        좋아요! 맥주 대신 보리차 구매로 변경했어요.
      </div>
    </div>
    <div class="py-5"></div>
    <button id="example-button" class="w-full py-2 border text-gray-500" @click="executeExample">
      (For UX-Salon) 예시 실행해보기
    </button>
  </div>
</template>
