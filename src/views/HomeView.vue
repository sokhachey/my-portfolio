<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <Header />
    <Hero @view-work="scrollToProjects" @get-in-touch="goToContact" />
    <About />
    <Footer />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
import Hero from '../components/sections/Hero.vue'
import About from '../components/sections/About.vue'

const router = useRouter()

const scrollToProjects = () => {
  router.push('/projects')
}

const goToContact = () => {
  router.push('/contact')
}
</script>
