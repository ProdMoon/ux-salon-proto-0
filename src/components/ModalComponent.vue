<script setup>
const props = defineProps({
  open: Boolean
});

const emit = defineEmits(['close']);

let startClickOutside = false;

const handleMouseDownOnBackground = () => {
  startClickOutside = true;
};

const handleMouseUpOnBackground = () => {
  if (startClickOutside) {
    emit('close');
  }
};

const handleMouseDownOnModal = () => {
  startClickOutside = false;
};
</script>

<template>
  <div
    v-if="props.open"
    class="absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center"
    @mousedown.self="handleMouseDownOnBackground"
    @mouseup.self="handleMouseUpOnBackground"
  >
    <div class="min-w-[400px] min-h-[300px] bg-white rounded-lg" @mousedown.stop="handleMouseDownOnModal">
      <slot></slot>
    </div>
  </div>
</template>
