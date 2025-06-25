<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <Header />
    <div class="pt-20">
      <TechnicalSkills />
      <Tools />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
import TechnicalSkills from '../components/sections/TechnicalSkills.vue'
import Tools from '../components/sections/Tools.vue'
</script>
