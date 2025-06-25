<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'glass', 'gradient'].includes(value)
  },
  padding: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
})

const cardClasses = computed(() => {
  const baseClasses = 'rounded-xl transition-all duration-300 border'
  
  const variantClasses = {
    default: 'bg-white hover:shadow-lg border-gray-200 shadow-sm',
    glass: 'bg-white/80 backdrop-blur-md border-gray-200 shadow-lg',
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-sm'
  }
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  return `${baseClasses} ${variantClasses[props.variant]} ${paddingClasses[props.padding]}`
})
</script>
