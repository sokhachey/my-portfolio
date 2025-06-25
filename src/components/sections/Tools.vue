<template>
  <section class="py-20 px-4 bg-black/20">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-white text-center mb-16">Tools & Technologies</h2>
      <div class="flex flex-wrap gap-4 justify-center">
        <span v-for="tool in tools" :key="tool"
              class="px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-gray-300 rounded-full border border-purple-400/30 hover:border-purple-400 transition-colors hover:scale-105 transform duration-200">
          {{ tool }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const tools = [
  'Git', 'GitHub', 'Jira', 'AWS', 'Figma', 'Canva', 'Postman', 'Draw.io', 
  'ChatGPT', 'Gemini', 'VS Code', 'Composer', 'Chart.js', 'Firebase'
]
</script>
