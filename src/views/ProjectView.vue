<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <Header />
    <div class="pt-20">
      <Projects />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
import Projects from '../components/sections/Projects.vue'
</script>
