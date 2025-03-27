<template>
  <img @click="handleClick" :src="src" alt="An image"
       style="object-fit: contain;cursor: pointer"
       :style="{height, margin}"
  >
</template>
<script setup>
import {computed} from 'vue'

const props = defineProps({
  src: {
    required: true,
    type: String
  },
  height: {
    type: String,
    default: '80%'
  },
  center: {
    type: Boolean,
    default: false,
  }
});

const margin = computed(() => {
  if (props.center === true) {
    return '1rem auto'
  }
  return null
})

function handleClick() {
  window.open(props.src, '_blank');
}
</script>
