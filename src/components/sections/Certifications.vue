<template>
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Certifications & Achievements</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Professional certifications and recognitions that validate my skills
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Certifications -->
        <BaseCard 
          v-for="cert in certifications" 
          :key="cert.id" 
          variant="elevated" 
          padding="lg"
          class="group hover:scale-105 transition-transform duration-300">
          
          <div class="text-center">
            <div :class="`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${cert.bgColor}`">
              <component :is="cert.icon" :class="`w-8 h-8 ${cert.iconColor}`" />
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ cert.title }}</h3>
            <p class="text-blue-600 font-medium mb-2">{{ cert.issuer }}</p>
            <p class="text-sm text-gray-500 mb-4">{{ cert.date }}</p>
            
            <div v-if="cert.skills" class="mb-4">
              <h4 class="text-sm font-medium text-gray-900 mb-2">Skills Covered:</h4>
              <div class="flex flex-wrap gap-2 justify-center">
                <span v-for="skill in cert.skills" :key="skill"
                      class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  {{ skill }}
                </span>
              </div>
            </div>
            
            <div v-if="cert.status === 'in-progress'" class="mb-4">
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full transition-all duration-300"
                     :style="{ width: cert.progress + '%' }"></div>
              </div>
              <p class="text-xs text-gray-600 mt-1">{{ cert.progress }}% Complete</p>
            </div>
            
            <BaseButton 
              v-if="cert.verifyUrl" 
              variant="outline" 
              size="sm" 
              @click="openVerification(cert.verifyUrl)"
              class="w-full">
              {{ cert.status === 'completed' ? 'Verify Certificate' : 'View Progress' }}
            </BaseButton>
          </div>
        </BaseCard>
      </div>
      
      <!-- Achievements Section -->
      <div class="mt-16">
        <h3 class="text-2xl font-bold text-gray-900 text-center mb-8">Academic & Project Achievements</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BaseCard variant="elevated" padding="lg">
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <h4 class="text-xl font-bold text-gray-900">Academic Excellence</h4>
              </div>
            </template>
            <ul class="space-y-3">
              <li v-for="achievement in academicAchievements" :key="achievement" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">{{ achievement }}</span>
              </li>
            </ul>
          </BaseCard>
          
          <BaseCard variant="elevated" padding="lg">
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 class="text-xl font-bold text-gray-900">Technical Achievements</h4>
              </div>
            </template>
            <ul class="space-y-3">
              <li v-for="achievement in technicalAchievements" :key="achievement" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">{{ achievement }}</span>
              </li>
            </ul>
          </BaseCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, h } from 'vue'
import BaseCard from '../global/BaseCard.vue'
import BaseButton from '../global/BaseButton.vue'

const certifications = ref([
  {
    id: 1,
    title: 'Web Development Fundamentals',
    issuer: 'Passerelles Numériques Cambodia',
    date: 'In Progress - 2024',
    status: 'in-progress',
    progress: 75,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' })
    ])
  },
  {
    id: 2,
    title: 'Database Management',
    issuer: 'PNC Academic Program',
    date: 'Expected 2025',
    status: 'in-progress',
    progress: 60,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
    skills: ['MySQL', 'Database Design', 'SQL Queries'],
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' })
    ])
  },
  {
    id: 3,
    title: 'Project Management',
    issuer: 'Team Leadership Experience',
    date: 'Nov 2024',
    status: 'completed',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    skills: ['Team Leadership', 'Agile', 'Communication'],
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' })
    ])
  },
  {
    id: 4,
    title: 'Git & Version Control',
    issuer: 'Self-Directed Learning',
    date: 'Oct 2024',
    status: 'completed',
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
    skills: ['Git', 'GitHub', 'Collaboration', 'Branching'],
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' })
    ])
  },
  {
    id: 5,
    title: 'Responsive Web Design',
    issuer: 'Online Learning Platform',
    date: 'Sep 2024',
    status: 'completed',
    bgColor: 'bg-teal-100',
    iconColor: 'text-teal-600',
    skills: ['CSS Grid', 'Flexbox', 'Mobile-First', 'Bootstrap'],
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' })
    ])
  },
  {
    id: 6,
    title: 'Problem Solving & Algorithms',
    issuer: 'Academic Coursework',
    date: 'Expected 2025',
    status: 'in-progress',
    progress: 40,
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600',
    skills: ['Algorithms', 'Data Structures', 'Logic', 'Optimization'],
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' })
    ])
  }
])

const academicAchievements = ref([
  'Maintaining excellent GPA in IT program',
  'Active participation in coding workshops',
  'Consistent attendance and engagement',
  'Peer tutoring and knowledge sharing',
  'Contributing to class projects and discussions'
])

const technicalAchievements = ref([
  'Successfully completed 4 major web development projects',
  'Led a team of 4 developers in POS system project',
  'Implemented responsive design for multiple websites',
  'Integrated real-time features using Firebase',
  'Optimized database queries for better performance'
])

const openVerification = (url) => {
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}
</script>
