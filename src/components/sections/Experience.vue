<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          My journey in web development and academic achievements
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Education Timeline -->
        <BaseCard variant="elevated" padding="lg">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Education</h3>
            </div>
          </template>
          <div class="space-y-8">
            <div v-for="edu in education" :key="edu.id" class="relative">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full mt-2 relative z-10"></div>
                <div class="ml-6 flex-1">
                  <div class="flex items-center gap-2 mb-2">
                    <h4 class="text-lg font-semibold text-gray-900">{{ edu.degree }}</h4>
                    <span v-if="edu.current" class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Current</span>
                  </div>
                  <p class="text-blue-600 font-medium">{{ edu.institution }}</p>
                  <p class="text-sm text-gray-500 mb-3">{{ edu.period }}</p>
                  <p class="text-gray-700 leading-relaxed">{{ edu.description }}</p>
                  <div v-if="edu.achievements" class="mt-3">
                    <h5 class="text-sm font-medium text-gray-900 mb-2">Key Achievements:</h5>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li v-for="achievement in edu.achievements" :key="achievement" class="flex items-start gap-2">
                        <span class="text-green-500 mt-1">•</span>
                        <span>{{ achievement }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div v-if="edu.id !== education.length" class="absolute left-2 top-6 w-0.5 h-16 bg-gray-200"></div>
            </div>
          </div>
        </BaseCard>
        
        <!-- Project Experience -->
        <BaseCard variant="elevated" padding="lg">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Project Experience</h3>
            </div>
          </template>
          <div class="space-y-8">
            <div v-for="project in projectExperience" :key="project.id" class="relative">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full mt-2 relative z-10"></div>
                <div class="ml-6 flex-1">
                  <div class="flex items-center gap-2 mb-2">
                    <h4 class="text-lg font-semibold text-gray-900">{{ project.title }}</h4>
                    <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{{ project.role }}</span>
                  </div>
                  <p class="text-sm text-gray-500 mb-3">{{ project.duration }}</p>
                  <p class="text-gray-700 leading-relaxed mb-3">{{ project.description }}</p>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span v-for="tech in project.technologies" :key="tech"
                          class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {{ tech }}
                    </span>
                  </div>
                  <div v-if="project.learnings" class="mt-3">
                    <h5 class="text-sm font-medium text-gray-900 mb-2">Key Learnings:</h5>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li v-for="learning in project.learnings" :key="learning" class="flex items-start gap-2">
                        <span class="text-blue-500 mt-1">•</span>
                        <span>{{ learning }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div v-if="project.id !== projectExperience.length" class="absolute left-2 top-6 w-0.5 h-20 bg-gray-200"></div>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BaseCard from '../global/BaseCard.vue'

const education = ref([
  {
    id: 1,
    degree: 'Associate Degree in IT',
    institution: 'Passerelles Numériques Cambodia (PNC)',
    period: '2024 - Present',
    current: true,
    description: 'Comprehensive program focusing on web development, software engineering, and digital skills for career preparation in the IT industry.',
    achievements: [
      'Maintaining excellent academic performance',
      'Active participation in coding projects',
      'Leadership roles in team assignments',
      'Contributing to open-source projects'
    ]
  },
  {
    id: 2,
    degree: 'High School Diploma',
    institution: 'Hun Sen Phnom Kravanh High School',
    period: '2020 - 2023',
    current: false,
    description: 'Completed secondary education with focus on science and mathematics, building foundation for technical studies.',
    achievements: [
      'Graduated with honors',
      'Strong performance in mathematics and science',
      'Participated in school technology clubs',
      'Developed early interest in programming'
    ]
  }
])

const projectExperience = ref([
  {
    id: 1,
    title: 'Task Management Application',
    role: 'Full-Stack Developer',
    duration: 'Jan 2025 (2 weeks)',
    description: 'Developed a comprehensive task management system with calendar integration and status tracking.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Firebase', 'Chart.js'],
    learnings: [
      'Real-time database synchronization',
      'Responsive design principles',
      'User experience optimization',
      'Data visualization techniques'
    ]
  },
  {
    id: 2,
    title: 'POS Management System',
    role: 'DevOps Manager & Developer',
    duration: 'Mar - Apr 2025 (3 weeks)',
    description: 'Led development of a complete point-of-sale system for retail businesses.',
    technologies: ['PHP', 'MySQL', 'SASS', 'Bootstrap', 'jQuery', 'Chart.js'],
    learnings: [
      'Team leadership and project management',
      'Database design and optimization',
      'Business logic implementation',
      'DevOps practices and deployment'
    ]
  },
  {
    id: 3,
    title: 'PNC Website Development',
    role: 'Frontend Developer',
    duration: 'Oct - Nov 2024 (2 weeks)',
    description: 'Created a modern, responsive website for educational institution.',
    technologies: ['HTML', 'CSS', 'SASS', 'Figma'],
    learnings: [
      'Design-to-code workflow',
      'Advanced CSS techniques',
      'Cross-browser compatibility',
      'Performance optimization'
    ]
  }
])
</script>
