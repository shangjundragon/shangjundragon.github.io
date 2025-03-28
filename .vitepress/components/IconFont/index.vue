<template>
  <svg class="iconfont" :style="{color: color, fontSize: size, cursor, ...bindStyle}" aria-hidden="true">
    <use :xlink:href="href"></use>
  </svg>
</template>
<script setup>

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  cursor: {
    validator(value) {
      return ['default', 'pointer'].includes(value)
    },
    default: 'default'
  },
  color: {},
  size: {},
  bindStyle: {
    type: Object
  },
});
const href = computed(() => {
  return `#${props.name}`
})
</script>
