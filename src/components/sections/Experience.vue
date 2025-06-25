<template>
  <section class="py-20 px-4 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Professional Development</h2>
        <div class="w-24 h-1 bg-blue-600 mx-auto"></div>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
          Continuous learning through workshops, training programs, and hands-on experience
        </p>
      </div>

      <!-- Grid layout for two cards per row -->
      <div class="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        <BaseCard
          v-for="exp in experiences"
          :key="exp.id"
          padding="lg"
          class="hover:shadow-lg transition-all duration-300"
        >
          <div class="flex flex-col gap-4">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-xl font-semibold text-gray-900">{{ exp.title }}</h3>
                <p class="text-blue-600 font-medium mt-1">{{ exp.facilitator }}</p>
              </div>
              <span class="text-sm bg-gray-100 text-gray-500 font-medium px-3 py-1 rounded-full whitespace-nowrap">
                {{ exp.date }}
              </span>
            </div>
            <p class="text-gray-700 leading-relaxed">{{ exp.description }}</p>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseCard from '../global/BaseCard.vue'

const experiences = [
  {
    id: 1,
    title: 'Project Management Workshop',
    date: 'February 2025',
    facilitator: 'Felix Leuker - Senior Digital Project Manager',
    description:
      'Comprehensive training in agile methodologies, team collaboration, and project management tools including Jira, Git, and GitHub workflows.'
  },
  {
    id: 2,
    title: 'UX/UI Design Workshop Series',
    date: 'February - March 2025',
    facilitator: 'PJ - UX/UI Designer, Sourcemax Asia Co., Ltd',
    description:
      'Intensive hands-on training in user experience design, creating interactive prototypes, wireframes, and implementing design thinking principles.'
  },
  {
    id: 3,
    title: 'Product Owner Certification',
    date: 'January 2025',
    facilitator: 'Felix Leuker & Solution BI Team',
    description:
      'Advanced training in product ownership, requirement gathering, user story creation, and stakeholder management using industry-standard tools.'
  },
  {
    id: 4,
    title: 'Data Analytics & Visualization',
    date: 'March 2025',
    facilitator: 'Solution BI Professional Team',
    description:
      'Comprehensive training in data analysis using Python and Power BI, focusing on transforming raw data into actionable business insights.'
  }
]
</script>
