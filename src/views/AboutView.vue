<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <Header />
    <div class="pt-20">
      <About />
      <Experience />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
import About from '../components/sections/About.vue'
import Experience from '../components/sections/Experience.vue'
</script>
