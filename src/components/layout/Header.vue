<template>
  <nav class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <div @click="$emit('navigate', 'hero')" class="text-2xl font-bold text-gray-900 cursor-pointer">
          <span class="text-blue-600">S</span>okha <span class="text-blue-600">SIM</span>
        </div>
        
        <div class="hidden md:flex space-x-8">
          <a v-for="item in navItems" 
             :key="item.id"
             @click="$emit('navigate', item.id)"
             :class="['text-gray-600 hover:text-blue-600 transition-colors cursor-pointer font-medium', 
                     { 'text-blue-600 border-b-2 border-blue-600 pb-1': activeSection === item.id }]">
            {{ item.name }}
          </a>
        </div>
        
        <button @click="toggleMobileMenu" class="md:hidden text-gray-900">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
      <div class="px-4 py-2 space-y-2">
        <a v-for="item in navItems" 
           :key="item.id"
           @click="$emit('navigate', item.id); toggleMobileMenu()"
           class="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer py-2 font-medium">
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const activeSection = ref('hero')

const navItems = [
  { id: 'hero', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'experience', name: 'Experience' },
  { id: 'contact', name: 'Contact' }
]

defineEmits(['navigate'])

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Track active section based on scroll position
const updateActiveSection = () => {
  const sections = navItems.map(item => item.id)
  const scrollPosition = window.scrollY + 100

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i])
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = sections[i]
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>
