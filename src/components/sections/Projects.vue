<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in web development and problem-solving
        </p>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BaseCard 
          v-for="project in projects" 
          :key="project.id" 
          variant="elevated" 
          padding="none"
          class="group overflow-hidden">
          
          <!-- Project Image/Icon -->
          <div class="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
            <div class="text-white text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
              <component :is="getProjectIcon(project.icon)" class="w-16 h-16" />
            </div>
            <div class="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all"></div>
          </div>
          
          <!-- Project Content -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl font-bold text-gray-900">{{ project.title }}</h3>
              <span class="text-sm text-gray-500">{{ project.role }}</span>
            </div>
            
            <p class="text-gray-600 mb-4 leading-relaxed">{{ project.description }}</p>
            
            <!-- Technologies -->
            <div class="mb-4">
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in project.technologies" :key="tech"
                      class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <!-- Project Details -->
            <div class="text-sm text-gray-500 mb-4">
              <div class="flex items-center gap-4">
                <span>📅 {{ project.duration }}</span>
                <span v-if="project.team">👥 {{ project.team }}</span>
              </div>
            </div>
            
            <!-- Action Buttons -->
            <div class="flex gap-3">
              <BaseButton variant="primary" size="sm" @click="openGithub(project.github)" class="flex-1">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 .268-.18.58-.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
                </svg>
                View Code
              </BaseButton>
              <BaseButton v-if="project.demo" variant="outline" size="sm">
                Live Demo
              </BaseButton>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'
import { usePortfolioStore } from '../../stores/counter'
import BaseCard from '../global/BaseCard.vue'
import BaseButton from '../global/BaseButton.vue'

const portfolioStore = usePortfolioStore()
const projects = portfolioStore.projects

const getProjectIcon = (iconType) => {
  const icons = {
    task: () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20' }, [
      h('path', { 'fill-rule': 'evenodd', d: 'M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H7V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z', 'clip-rule': 'evenodd' })
    ]),
    pos: () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20' }, [
      h('path', { d: 'M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z', 'clip-rule': 'evenodd' })
    ]),
    website: () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20' }, [
      h('path', { 'fill-rule': 'evenodd', d: 'M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 7H5V5h10v7H8.771z', 'clip-rule': 'evenodd' })
    ]),
    system: () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20' }, [
      h('path', { 'fill-rule': 'evenodd', d: 'M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z', 'clip-rule': 'evenodd' })
    ])
  }
  
  return icons[iconType] || icons.task
}

const openGithub = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>
