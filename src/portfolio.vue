<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="text-2xl font-bold text-white">
            <span class="text-purple-400">S</span>okha<span class="text-purple-400">.</span>
          </div>
          <div class="hidden md:flex space-x-8">
            <a v-for="item in navItems" :key="item.id" 
               @click="scrollTo(item.id)"
               class="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">
              {{ item.name }}
            </a>
          </div>
          <button @click="toggleMobileMenu" class="md:hidden text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-black/90 backdrop-blur-md">
        <div class="px-4 py-2 space-y-2">
          <a v-for="item in navItems" :key="item.id"
             @click="scrollTo(item.id); toggleMobileMenu()"
             class="block text-gray-300 hover:text-purple-400 transition-colors cursor-pointer py-2">
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div class="relative z-10 text-center px-4">
        <div class="mb-8">
          <div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
            <div class="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <span class="text-4xl font-bold text-white">SS</span>
            </div>
          </div>
        </div>
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-4">
          <span class="text-purple-400">Sokha</span> SIM
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8">Web Developer & Creative Technologist</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button @click="scrollTo('projects')" 
                  class="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors">
            View My Work
          </button>
          <button @click="scrollTo('contact')" 
                  class="px-8 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-full transition-colors">
            Get In Touch
          </button>
        </div>
      </div>
      
      <!-- Floating Elements -->
      <div class="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-16 h-16 bg-pink-500/20 rounded-full animate-bounce"></div>
      <div class="absolute top-1/2 left-20 w-12 h-12 bg-blue-500/20 rounded-full animate-ping"></div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-white text-center mb-16">About Me</h2>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center">
              <div class="text-center">
                <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                  <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <p class="text-gray-400">Profile Image</p>
              </div>
            </div>
          </div>
          <div class="text-gray-300 space-y-6">
            <p class="text-lg leading-relaxed">
              My name is Sokha SIM, a passionate web developer from Cambodia. Born on January 28, 2006, 
              I graduated from high school in 2023 and am currently pursuing an associate degree at 
              Passerelles Numériques Cambodia (PNC).
            </p>
            <p class="text-lg leading-relaxed">
              Through my studies and hands-on projects, I've developed strong technical and soft skills 
              in web development, focusing on modern technologies like Vue.js, Laravel, and full-stack development.
            </p>
            <div class="grid grid-cols-2 gap-4 mt-8">
              <div class="bg-white/5 p-4 rounded-lg">
                <h4 class="text-purple-400 font-semibold mb-2">Education</h4>
                <p class="text-sm">Associate Degree</p>
                <p class="text-xs text-gray-400">PNC (2024-2026)</p>
              </div>
              <div class="bg-white/5 p-4 rounded-lg">
                <h4 class="text-purple-400 font-semibold mb-2">Location</h4>
                <p class="text-sm">Phnom Penh</p>
                <p class="text-xs text-gray-400">Cambodia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 px-4 bg-black/20">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-white text-center mb-16">Technical Skills</h2>
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-2xl font-semibold text-purple-400 mb-8">Hard Skills</h3>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="skill in hardSkills" :key="skill.name" 
                   class="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span class="text-gray-300">{{ skill.name }}</span>
                </div>
                <div class="mt-2 bg-gray-700 rounded-full h-2">
                  <div class="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000"
                       :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-purple-400 mb-8">Tools & Technologies</h3>
            <div class="flex flex-wrap gap-3">
              <span v-for="tool in tools" :key="tool"
                    class="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-gray-300 rounded-full border border-purple-400/30 hover:border-purple-400 transition-colors">
                {{ tool }}
              </span>
            </div>
            <h3 class="text-2xl font-semibold text-purple-400 mb-8 mt-12">Soft Skills</h3>
            <div class="grid grid-cols-2 gap-3">
              <div v-for="skill in softSkills" :key="skill"
                   class="flex items-center space-x-2 text-gray-300">
                <svg class="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.id"
               class="bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div class="h-48 bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center">
              <svg class="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-2">{{ project.title }}</h3>
              <p class="text-gray-400 text-sm mb-4">{{ project.period }}</p>
              <p class="text-gray-300 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.technologies" :key="tech"
                      class="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded">
                  {{ tech }}
                </span>
              </div>
              <a :href="project.repository" target="_blank" 
                 class="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
                </svg>
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20 px-4 bg-black/20">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-white text-center mb-16">Experience & Workshops</h2>
        <div class="space-y-8">
          <div v-for="exp in experiences" :key="exp.id"
               class="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 class="text-xl font-semibold text-white">{{ exp.title }}</h3>
              <span class="text-purple-400 text-sm">{{ exp.date }}</span>
            </div>
            <p class="text-gray-400 mb-2">{{ exp.facilitator }}</p>
            <p class="text-gray-300">{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-white mb-8">Get In Touch</h2>
        <p class="text-xl text-gray-300 mb-12">
          Let's collaborate on your next project or discuss opportunities
        </p>
        
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div class="bg-white/5 p-6 rounded-2xl">
            <svg class="w-8 h-8 text-purple-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <h3 class="text-white font-semibold mb-2">Phone</h3>
            <p class="text-gray-300 text-sm">+855 975911140</p>
            <p class="text-gray-300 text-sm">+855 60 384 920</p>
          </div>
          
          <div class="bg-white/5 p-6 rounded-2xl">
            <svg class="w-8 h-8 text-purple-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <h3 class="text-white font-semibold mb-2">Email</h3>
            <p class="text-gray-300 text-sm break-all">sokha.sim@student.passerellesnumeriques.org</p>
          </div>
          
          <div class="bg-white/5 p-6 rounded-2xl">
            <svg class="w-8 h-8 text-purple-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <h3 class="text-white font-semibold mb-2">Location</h3>
            <p class="text-gray-300 text-sm">Phnom Penh, Cambodia</p>
          </div>
        </div>

        <div class="flex justify-center space-x-6">
          <a href="#" class="w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" class="w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" class="w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-4 border-t border-white/10">
      <div class="max-w-6xl mx-auto text-center">
        <p class="text-gray-400">
          © 2025 Sokha SIM. Built with Vue.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const mobileMenuOpen = ref(false)

const navItems = [
  { id: 'hero', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'experience', name: 'Experience' },
  { id: 'contact', name: 'Contact' }
]

const hardSkills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS/SASS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'Vue.js', level: 85 },
  { name: 'PHP', level: 75 },
  { name: 'Laravel', level: 70 },
  { name: 'Node.js', level: 65 },
  { name: 'MySQL', level: 75 },
  { name: 'Bootstrap', level: 80 },
  { name: 'TypeScript', level: 60 },
  { name: 'Python', level: 55 },
  { name: 'Power BI', level: 50 }
]

const tools = [
  'Git', 'GitHub', 'Jira', 'AWS', 'Figma', 'Canva', 'Postman', 'Draw.io', 'ChatGPT', 'Gemini'
]

const softSkills = [
  'Teamwork', 'Communication', 'Problem Solving', 'Time Management', 
  'Task Management', 'Self Motivation', 'Responsibility', 'Creative', 'Respect'
]

const projects = [
  {
    id: 1,
    title: 'Task Management App',
    period: 'January 14 – January 29, 2025',
    description: 'Built a comprehensive task management app with calendar integration, status organization, and offline/online data storage.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Chart.js', 'Firebase'],
    repository: 'https://github.com/Chhea012/Task-Management-App-B12'
  },
  {
    id: 2,
    title: 'POS System',
    period: 'March 10 – April 2, 2025',
    description: 'Developed a full-featured POS system with sales transactions, inventory tracking, and barcode scanning capabilities.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'SASS', 'Bootstrap', 'jQuery'],
    repository: 'https://github.com/poleak-theng065/POS-Management-System-VC1'
  },
  {
    id: 3,
    title: 'PNC Website',
    period: 'October 21 – November 5, 2024',
    description: 'Developed a static website for Passerelles numériques Cambodia with modern design and responsive layout.',
    technologies: ['HTML', 'CSS', 'SASS', 'Figma'],
    repository: 'https://github.com/sreyvang19/Website_PNC'
  },
  {
    id: 4,
    title: 'Windows System Management',
    period: 'November 18 – November 28, 2024',
    description: 'Built a system management tool to retrieve hardware information and export data to Excel format.',
    technologies: ['Python', 'psutil', 'openpyxl'],
    repository: 'https://github.com/sokhachey/Windows-System-management-G22'
  },
  {
    id: 5,
    title: 'AWS WordPress Deployment',
    period: 'January 5 – January 11, 2025',
    description: 'Successfully hosted and deployed a WordPress website on Amazon Web Services with proper security configurations.',
    technologies: ['AWS', 'EC2', 'WordPress'],
    repository: '#'
  }
]

const experiences = [
  {
    id: 1,
    title: 'Project Management Workshop',
    date: 'February 8, 2025',
    facilitator: 'Felix Leuker (Senior Digital Project Manager)',
    description: 'Gained understanding of key agile roles and explored collaboration using tools like Jira, Git, and GitHub.'
  },
  {
    id: 2,
    title: 'UX/UI Design Workshops',
    date: 'February 7 & March 14, 2025',
    facilitator: 'PJ (UX/UI Designer, Sourcemax Asia Co., Ltd)',
    description: 'Translated project requirements into interactive prototypes, mockups, and wireframes through hands-on activities.'
  },
  {
    id: 3,
    title: 'Product Owner Workshops',
    date: 'January 18 & 25, 2025',
    facilitator: 'Felix Leuker & Solution BI Staff',
    description: 'Explored Product Owner responsibilities and practiced requirement gathering and writing user stories using Jira.'
  },
  {
    id: 4,
    title: 'Data Analytics Workshop',
    date: 'March 19, 2025',
    facilitator: 'Felix Leuker & Solution BI Staff',
    description: 'Learned data preparation and visualization using Python and Power BI, transforming raw data into actionable insights.'
  }
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollTo = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // Add smooth scrolling behavior
  document.documentElement.style.scrollBehavior = 'smooth'
})
</script>

<style scoped>
/* Custom animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Smooth transitions for skill bars */
.skill-bar {
  transition: width 2s ease-in-out;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(147, 51, 234, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(147, 51, 234, 0.7);
}
</style>
