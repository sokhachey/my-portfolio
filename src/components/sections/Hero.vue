<template>
  <section class="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-8 fade-in-up">
          <div class="space-y-4">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm 
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Sokha SIM
              </span>
            </h1>
            <p class="text-xl sm:text-2xl text-gray-600 font-medium">
              Web Developer & IT Student
            </p>
            <p class="text-lg text-gray-600 leading-relaxed max-w-lg">
              Passionate about creating innovative web solutions and building user-friendly applications. 
              Currently pursuing an Associate degree at Passerelles Numériques Cambodia.
            </p>
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <BaseButton variant="primary" size="lg" @click="$router.push('/projects')">
              View My Work
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </BaseButton>
            <BaseButton variant="outline" size="lg" @click="$router.push('/contact')">
              Get In Touch
            </BaseButton>
          </div>
          
          <!-- Quick Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            <div class="text-center">
              <div class="text-2xl font-bold text-gray-900">{{ stats.projects }}+</div>
              <div class="text-sm text-gray-600">Projects</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-gray-900">{{ stats.experience }}+</div>
              <div class="text-sm text-gray-600">Years Learning</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-gray-900">{{ stats.technologies }}+</div>
              <div class="text-sm text-gray-600">Technologies</div>
            </div>
          </div>
        </div>
        
        <!-- Profile Image -->
        <div class="flex justify-center lg:justify-end">
          <div class="relative">
            <div class="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
              <div class="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <svg class="w-48 h-48 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            <!-- Floating elements -->
            <div class="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center animate-bounce">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center animate-pulse">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePortfolioStore } from '../../stores/counter'
import BaseButton from '../global/BaseButton.vue'

const portfolioStore = usePortfolioStore()
const stats = portfolioStore.stats
</script>
