<template>
  <section class="py-20 px-4 bg-[#f1f7ff]">
    <div class="max-w-6xl mx-auto">
      <!-- Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
        <div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <!-- Programming Languages -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-gray-800 mb-6 text-center">Programming Languages</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          <div
            v-for="lang in languages"
            :key="lang.name"
            class="bg-white rounded-xl shadow-md p-4 w-40 h-40 flex flex-col items-center justify-center hover:shadow-xl transition-all"
          >
            <div class="p-3 rounded-xl bg-gradient-to-tr from-blue-100 via-white to-purple-100 shadow-inner mb-3">
              <img :src="lang.icon" :alt="lang.name" class="w-12 h-12 object-contain" />
            </div>
            <p class="text-center font-semibold text-gray-800">{{ lang.name }}</p>
          </div>
        </div>
      </div>

      <!-- Frameworks & Libraries -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-gray-800 mb-6 text-center">Frameworks & Libraries</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          <div
            v-for="fw in frameworks"
            :key="fw.name"
            class="bg-white rounded-xl shadow-md p-4 w-40 h-40 flex flex-col items-center justify-center hover:shadow-xl transition-all"
          >
            <div class="p-3 rounded-xl bg-gradient-to-tr from-blue-100 via-white to-purple-100 shadow-inner mb-3">
              <img :src="fw.icon" :alt="fw.name" class="w-12 h-12 object-contain" />
            </div>
            <p class="text-center font-semibold text-gray-800">{{ fw.name }}</p>
          </div>
        </div>
      </div>

      <!-- Tools & Technologies -->
      <div class="mb-16">
        <h3 class="text-2xl font-semibold text-gray-800 mb-6 text-center">Tools & Technologies</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          <div
            v-for="tool in tools"
            :key="tool.name"
            class="bg-white rounded-xl shadow-md p-4 w-40 h-40 flex flex-col items-center justify-center hover:shadow-xl transition-all"
          >
            <div class="p-3 rounded-xl bg-gradient-to-tr from-blue-100 via-white to-purple-100 shadow-inner mb-3">
              <img :src="tool.icon" :alt="tool.name" class="w-12 h-12 object-contain" />
            </div>
            <p class="text-center font-semibold text-gray-800">{{ tool.name }}</p>
          </div>
        </div>
      </div>

      <!-- Soft Skills -->
      <div>
        <h3 class="text-2xl font-semibold text-gray-800 mb-6 text-center">Soft Skills</h3>
        <div class="flex flex-wrap justify-center gap-3">
          <span
            v-for="(skill, index) in softSkills"
            :key="index"
            class="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const languages = [
  { name: 'HTML5', icon: '/icons/html.png' },
  { name: 'CSS3', icon: '/icons/css.png' },
  { name: 'JavaScript', icon: '/icons/javascript.webp' },
  { name: 'PHP', icon: '/icons/php.png' },
  { name: 'TypeScript', icon: '/icons/typescript.png' }
]

const frameworks = [
  { name: 'Vue.js', icon: '/icons/vue.webp' },
  { name: 'Laravel', icon: '/icons/Laravel-Logo.wine.svg' },
  { name: 'Bootstrap', icon: '/icons/node.png' },
  { name: 'Tailwind', icon: '/icons/Tailwind_CSS_Logo.svg.png' },
  { name: 'Node.js', icon: '/icons/Node.js_logo.svg.png' }
]

const tools = [
  { name: 'Git', icon: '/icons/github.png' },
  { name: 'VS Code', icon: '/icons/vscode.png' },
  { name: 'Figma', icon: '/icons/figma.png' },
  { name: 'MySQL', icon: '/icons/mysql.webp' },
  { name: 'Jira', icon: '/icons/jira.png' }
]

const softSkills = [
  'Team Collaboration',
  'Effective Communication',
  'Problem Solving',
  'Time Management',
  'Adaptability',
  'Creative Thinking',
  'Attention to Detail',
  'Project Ownership',
  'Leadership',
  'Self-Motivation'
]
</script>
