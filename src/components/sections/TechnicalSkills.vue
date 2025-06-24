<template>
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          My expertise across different technologies and programming languages
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Programming Languages -->
        <BaseCard variant="elevated" padding="lg">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Programming Languages</h3>
            </div>
          </template>
          <div class="space-y-6">
            <div v-for="skill in programmingSkills" :key="skill.name" class="skill-item">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-3">
                  <span class="text-lg font-medium text-gray-800">{{ skill.name }}</span>
                  <span class="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{{ skill.experience }}</span>
                </div>
                <span class="text-sm font-semibold text-blue-600">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <div class="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full skill-bar transition-all duration-1000 ease-out"
                     :style="{ width: skill.level + '%' }"></div>
              </div>
              <p class="text-sm text-gray-600 mt-2">{{ skill.description }}</p>
            </div>
          </div>
        </BaseCard>
        
        <!-- Frameworks & Libraries -->
        <BaseCard variant="elevated" padding="lg">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Frameworks & Libraries</h3>
            </div>
          </template>
          <div class="space-y-6">
            <div v-for="framework in frameworks" :key="framework.name" class="skill-item">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-3">
                  <span class="text-lg font-medium text-gray-800">{{ framework.name }}</span>
                  <span class="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{{ framework.category }}</span>
                </div>
                <span class="text-sm font-semibold text-green-600">{{ framework.level }}%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <div class="bg-gradient-to-r from-green-500 to-teal-600 h-3 rounded-full skill-bar transition-all duration-1000 ease-out"
                     :style="{ width: framework.level + '%' }"></div>
              </div>
              <p class="text-sm text-gray-600 mt-2">{{ framework.description }}</p>
            </div>
          </div>
        </BaseCard>
      </div>
      
      <!-- Database & Backend -->
      <div class="mt-12">
        <BaseCard variant="elevated" padding="lg">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Database & Backend Technologies</h3>
            </div>
          </template>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="tech in backendSkills" :key="tech.name" class="skill-item">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-3">
                  <span class="text-lg font-medium text-gray-800">{{ tech.name }}</span>
                  <span class="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{{ tech.type }}</span>
                </div>
                <span class="text-sm font-semibold text-purple-600">{{ tech.level }}%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <div class="bg-gradient-to-r from-purple-500 to-pink-600 h-3 rounded-full skill-bar transition-all duration-1000 ease-out"
                     :style="{ width: tech.level + '%' }"></div>
              </div>
              <p class="text-sm text-gray-600 mt-2">{{ tech.description }}</p>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BaseCard from '../../components/global/BaseCard.vue'

const programmingSkills = ref([
  {
    name: 'JavaScript',
    level: 85,
    experience: '2+ years',
    description: 'Modern ES6+ features, async/await, DOM manipulation, and API integration'
  },
  {
    name: 'PHP',
    level: 75,
    experience: '1.5+ years',
    description: 'Object-oriented programming, MVC patterns, and web development'
  },
  {
    name: 'Python',
    level: 65,
    experience: '1+ year',
    description: 'Data analysis, automation scripts, and system management tools'
  },
  {
    name: 'TypeScript',
    level: 60,
    experience: '6+ months',
    description: 'Type-safe JavaScript development and modern tooling'
  }
])

const frameworks = ref([
  {
    name: 'Vue.js',
    level: 80,
    category: 'Frontend',
    description: 'Component-based architecture, Composition API, and state management'
  },
  {
    name: 'Laravel',
    level: 70,
    category: 'Backend',
    description: 'MVC framework, Eloquent ORM, and RESTful API development'
  },
  {
    name: 'Bootstrap',
    level: 85,
    category: 'CSS',
    description: 'Responsive design, component library, and grid system'
  },
  {
    name: 'Node.js',
    level: 65,
    category: 'Runtime',
    description: 'Server-side JavaScript, npm packages, and API development'
  }
])

const backendSkills = ref([
  {
    name: 'MySQL',
    level: 80,
    type: 'Database',
    description: 'Database design, complex queries, and performance optimization'
  },
  {
    name: 'Firebase',
    level: 70,
    type: 'BaaS',
    description: 'Real-time database, authentication, and cloud functions'
  },
  {
    name: 'REST APIs',
    level: 75,
    type: 'Architecture',
    description: 'API design, HTTP methods, and data serialization'
  },
  {
    name: 'Git',
    level: 85,
    type: 'Version Control',
    description: 'Version control, branching strategies, and collaborative development'
  }
])
</script>
