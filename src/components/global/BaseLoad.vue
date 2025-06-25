<template>
  <div class="flex items-center justify-center" :class="containerClasses">
    <div class="animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" :class="spinnerClasses"></div>
    <span v-if="text" class="ml-3 text-gray-300">{{ text }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  text: {
    type: String,
    default: ''
  },
  fullScreen: {
    type: Boolean,
    default: false
  }
})

const containerClasses = computed(() => {
  return props.fullScreen ? 'min-h-screen' : 'py-8'
})

const spinnerClasses = computed(() => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  }
  return sizeClasses[props.size]
})
</script>
