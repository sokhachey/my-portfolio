<template>
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <BaseCard variant="elevated" padding="lg">
            <template #header>
              <h3 class="text-2xl font-bold text-gray-900">Contact Information</h3>
            </template>
            <div class="space-y-6">
              <div v-for="contact in contactInfo" :key="contact.type" class="flex items-start space-x-4">
                <div :class="`flex-shrink-0 w-12 h-12 ${contact.bgColor} rounded-lg flex items-center justify-center`">
                  <component :is="contact.icon" :class="`w-6 h-6 ${contact.iconColor}`" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ contact.label }}</h4>
                  <p v-for="value in contact.values" :key="value" class="text-gray-600">{{ value }}</p>
                </div>
              </div>
            </div>
          </BaseCard>
          
          <!-- Languages & Interests -->
          <div class="grid grid-cols-1 gap-6">
            <BaseCard variant="elevated" padding="lg">
              <template #header>
                <h3 class="text-xl font-bold text-gray-900">Languages</h3>
              </template>
              <div class="space-y-3">
                <div v-for="lang in languages" :key="lang.name" class="flex items-center justify-between">
                  <span class="text-gray-700">{{ lang.name }}</span>
                  <span class="text-sm text-gray-500">{{ lang.level }}</span>
                </div>
              </div>
            </BaseCard>
            
            <BaseCard variant="elevated" padding="lg">
              <template #header>
                <h3 class="text-xl font-bold text-gray-900">Interests</h3>
              </template>
              <div class="flex flex-wrap gap-3">
                <span v-for="interest in interests" :key="interest"
                      class="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-sm text-gray-700">
                  {{ interest }}
                </span>
              </div>
            </BaseCard>
          </div>
        </div>
        
        <!-- Contact Form -->
        <BaseCard variant="elevated" padding="lg">
          <template #header>
            <h3 class="text-2xl font-bold text-gray-900">Send Me a Message</h3>
          </template>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input type="text" id="firstName" v-model="form.firstName" required
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input type="text" id="lastName" v-model="form.lastName" required
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
              </div>
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" id="email" v-model="form.email" required
                     class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
            </div>
            
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input type="text" id="subject" v-model="form.subject" required
                     class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea id="message" v-model="form.message" rows="5" required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"></textarea>
            </div>
            
            <BaseButton type="submit" variant="primary" size="lg" :disabled="isSubmitting" class="w-full">
              <BaseLoad v-if="isSubmitting" size="sm" text="Sending..." />
              <span v-else>Send Message</span>
            </BaseButton>
          </form>
          
          <!-- Success Toast -->
          <BaseToast 
            :show="showSuccess" 
            type="success" 
            title="Message Sent!" 
            message="Thank you for your message! I'll get back to you soon."
            @close="showSuccess = false" 
          />
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { usePortfolioStore } from '../../stores/counter'
import BaseCard from '../global/BaseCard.vue'
import BaseButton from '../global/BaseButton.vue'
import BaseLoad from '../global/BaseLoad.vue'
import BaseToast from '../global/BaseToast.vue'

const portfolioStore = usePortfolioStore()
const contactInfo = portfolioStore.contactInfo
const languages = portfolioStore.languages
const interests = portfolioStore.interests

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  }
  
  isSubmitting.value = false
  showSuccess.value = true
}
</script>
