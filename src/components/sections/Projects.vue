<template>
  <section class="py-20 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
        <div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
          A showcase of my recent work demonstrating technical skills and problem-solving abilities
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BaseCard
          v-for="project in projects"
          :key="project.id"
          class="hover:shadow-xl transition-all duration-300 group"
        >
          <!-- Project Image -->
          <div class="h-48 overflow-hidden rounded-lg mb-6">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <!-- Project Info -->
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ project.title }}</h3>
          <p class="text-blue-600 text-sm mb-4 font-medium">{{ project.period }}</p>
          <p class="text-gray-600 mb-4 leading-relaxed">{{ project.description }}</p>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium border border-blue-200"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Source Code Link -->
          <a
            :href="project.repository"
            target="_blank"
            class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 
                0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 
                1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 
                0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 
                1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 
                2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 
                4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 
                2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 
                10.017C20 4.484 15.522 0 10 0z"
              />
            </svg>
            View Source Code
          </a>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseCard from '../global/BaseCard.vue'

const projects = [
  {
    id: 1,
    title: 'Task Management System',
    period: 'January 2025',
    image: '/image/task app.png', // place in /public/images/
    description:
      'Comprehensive task management application with calendar integration, status tracking, and real-time data synchronization.',
    technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Chart.js', 'Firebase'],
    repository: 'https://github.com/Chhea012/Task-Management-App-B12'
  },
  {
    id: 2,
    title: 'Point of Sale System',
    period: 'March 2025',
    image: '/image/pos-system.jpg', // place in /public/images/
    description:
      'Full-featured POS system with inventory management, sales analytics, and barcode scanning capabilities.',
    technologies: ['PHP', 'MySQL', 'HTML5', 'SASS', 'Bootstrap', 'jQuery'],
    repository: 'https://github.com/poleak-theng065/POS-Management-System-VC1'
  },
  {
    id: 3,
    title: 'PNC Corporate Website',
    period: 'October 2024',
    image: '/image/pnc-website.png', // place in /public/images/
    description:
      'Modern, responsive corporate website with clean design and optimized user experience.',
    technologies: ['HTML5', 'CSS3', 'SASS', 'Figma'],
    repository: 'https://github.com/sreyvang19/Website_PNC'
  }
]
</script>
