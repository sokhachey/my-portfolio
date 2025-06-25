<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <Header />
    <div class="pt-20">
      <Contact />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
import Contact from '../components/sections/Contact.vue'
</script>
