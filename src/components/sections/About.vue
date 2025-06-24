<template>
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn more about my background, skills, and journey in web development
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Profile Info -->
        <div class="space-y-6">
          <BaseCard variant="elevated" padding="lg">
            <template #header>
              <h3 class="text-2xl font-bold text-gray-900">Profile</h3>
            </template>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">{{ profile.description }}</p>
              <p class="leading-relaxed">{{ profile.mission }}</p>
            </div>
          </BaseCard>
          
          <!-- Education -->
          <BaseCard variant="elevated" padding="lg">
            <template #header>
              <h3 class="text-2xl font-bold text-gray-900">Education</h3>
            </template>
            <div class="space-y-6">
              <div v-for="edu in education" :key="edu.id" class="border-l-4 border-blue-500 pl-6">
                <div class="flex items-center gap-2 mb-2">
                  <h4 class="font-semibold text-gray-900">{{ edu.degree }}</h4>
                  <span v-if="edu.current" class="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Current</span>
                </div>
                <p class="text-gray-600">{{ edu.institution }}</p>
                <p class="text-sm text-gray-500">{{ edu.period }}</p>
              </div>
            </div>
          </BaseCard>
        </div>
        
        <!-- Skills -->
        <div class="space-y-6">
          <!-- Hard Skills -->
          <BaseCard variant="elevated" padding="lg">
            <template #header>
              <h3 class="text-2xl font-bold text-gray-900">Technical Skills</h3>
            </template>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="skill in hardSkills" :key="skill.name" class="skill-item">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-medium text-gray-700">{{ skill.name }}</span>
                  <span class="text-xs text-gray-500">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full skill-bar"
                       :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </BaseCard>
          
          <!-- Tools -->
          <BaseCard variant="elevated" padding="lg">
            <template #header>
              <h3 class="text-2xl font-bold text-gray-900">Tools & Technologies</h3>
            </template>
            <div class="flex flex-wrap gap-3">
              <span v-for="tool in tools" :key="tool" 
                    class="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
                {{ tool }}
              </span>
            </div>
          </BaseCard>
          
          <!-- Soft Skills -->
          <BaseCard variant="elevated" padding="lg">
            <template #header>
              <h3 class="text-2xl font-bold text-gray-900">Soft Skills</h3>
            </template>
            <div class="grid grid-cols-2 gap-3">
              <div v-for="skill in softSkills" :key="skill" 
                   class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">{{ skill }}</span>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePortfolioStore } from '../../stores/counter'
import BaseCard from '../global/BaseCard.vue'

const portfolioStore = usePortfolioStore()
const { profile, education, hardSkills, tools, softSkills } = portfolioStore
</script>
