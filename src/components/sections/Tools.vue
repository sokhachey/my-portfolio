<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Tools & Technologies</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          The development tools and technologies I use to build amazing projects
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Development Tools -->
        <BaseCard variant="elevated" padding="lg">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Development Tools</h3>
            </div>
          </template>
          <div class="grid grid-cols-2 gap-6">
            <div v-for="tool in developmentTools" :key="tool.name" class="group">
              <div class="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                <div :class="`w-10 h-10 rounded-lg flex items-center justify-center ${tool.bgColor}`">
                  <component :is="tool.icon" :class="`w-6 h-6 ${tool.iconColor}`" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ tool.name }}</h4>
                  <p class="text-sm text-gray-600">{{ tool.category }}</p>
                </div>
              </div>
            </div>
          </div>
        </BaseCard>
        
        <!-- Design & Productivity -->
        <BaseCard variant="elevated" padding="lg">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Design & Productivity</h3>
            </div>
          </template>
          <div class="grid grid-cols-2 gap-6">
            <div v-for="tool in designTools" :key="tool.name" class="group">
              <div class="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200">
                <div :class="`w-10 h-10 rounded-lg flex items-center justify-center ${tool.bgColor}`">
                  <component :is="tool.icon" :class="`w-6 h-6 ${tool.iconColor}`" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ tool.name }}</h4>
                  <p class="text-sm text-gray-600">{{ tool.category }}</p>
                </div>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
      
      <!-- Technology Stack -->
      <div class="mt-16">
        <BaseCard variant="elevated" padding="lg">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Technology Stack</h3>
            </div>
          </template>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="stack in techStacks" :key="stack.category" class="text-center">
              <div :class="`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${stack.bgColor}`">
                <component :is="stack.icon" :class="`w-8 h-8 ${stack.iconColor}`" />
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-3">{{ stack.category }}</h4>
              <div class="flex flex-wrap gap-2 justify-center">
                <span v-for="tech in stack.technologies" :key="tech"
                      class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
      
      <!-- Learning Resources -->
      <div class="mt-16">
        <h3 class="text-2xl font-bold text-gray-900 text-center mb-8">Learning Resources & Platforms</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="resource in learningResources" :key="resource.name" 
               class="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div :class="`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${resource.bgColor}`">
              <component :is="resource.icon" :class="`w-6 h-6 ${resource.iconColor}`" />
            </div>
            <h4 class="font-semibold text-gray-900 mb-1">{{ resource.name }}</h4>
            <p class="text-sm text-gray-600">{{ resource.type }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, h } from 'vue'
import BaseCard from '../../components/global/BaseCard.vue'

const developmentTools = ref([
  {
    name: 'VS Code',
    category: 'Code Editor',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' })
    ])
  },
  {
    name: 'Git',
    category: 'Version Control',
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' })
    ])
  },
  {
    name: 'GitHub',
    category: 'Repository',
    bgColor: 'bg-gray-100',
    iconColor: 'text-gray-600',
    icon: () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20' }, [
      h('path', { 'fill-rule': 'evenodd', d: 'M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 .268-.18.58-.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z', 'clip-rule': 'evenodd' })
    ])
  },
  {
    name: 'Postman',
    category: 'API Testing',
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z' })
    ])
  },
  {
    name: 'Composer',
    category: 'PHP Package Manager',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' })
    ])
  },
  {
    name: 'AWS',
    category: 'Cloud Platform',
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' })
    ])
  }
])

const designTools = ref([
  {
    name: 'Figma',
    category: 'UI/UX Design',
    bgColor: 'bg-pink-100',
    iconColor: 'text-pink-600',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z' })
    ])
  },
  {
    name: 'Canva',
    category: 'Graphic Design',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' })
    ])
  },
  {
    name: 'Draw.io',
    category: 'Diagramming',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' })
    ])
  },
  {
    name: 'Jira',
    category: 'Project Management',
    bgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' })
    ])
  },
  {
    name: 'ChatGPT',
    category: 'AI Assistant',
    bgColor: 'bg-teal-100',
    iconColor: 'text-teal-600',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' })
    ])
  },
  {
    name: 'Gemini',
    category: 'AI Assistant',
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 10V3L4 14h7v7l9-11h-7z' })
    ])
  }
])

const techStacks = ref([
  {
    category: 'Frontend',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Bootstrap', 'Tailwind CSS', 'SASS'],
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
    ])
  },
  {
    category: 'Backend',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
    technologies: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'Firebase', 'REST APIs'],
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2' })
    ])
  },
  {
    category: 'Tools & Others',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    technologies: ['Git', 'GitHub', 'Figma', 'Postman', 'Chart.js', 'Power BI'],
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }),
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' })
    ])
  }
])

const learningResources = ref([
  {
    name: 'MDN Docs',
    type: 'Documentation',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' })
    ])
  },
  {
    name: 'Stack Overflow',
    type: 'Community',
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })
    ])
  },
  {
    name: 'YouTube',
    type: 'Video Tutorials',
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })
    ])
  },
  {
    name: 'GitHub',
    type: 'Open Source',
    bgColor: 'bg-gray-100',
    iconColor: 'text-gray-600',
    icon: () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20' }, [
      h('path', { 'fill-rule': 'evenodd', d: 'M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 .268-.18.58-.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z', 'clip-rule': 'evenodd' })
    ])
  }
])
</script>
