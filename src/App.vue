<template>
  <div id="app" class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
    <Header @navigate="scrollToSection" />
    
    <Hero id="hero" @view-work="scrollToSection('projects')" @get-in-touch="scrollToSection('contact')" />
    <About id="about" />
    <TechnicalSkills id="skills" />
    <Projects id="projects" />
    <Experience id="experience" />
    <Contact id="contact" />
    
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import Hero from './components/sections/Hero.vue'
import About from './components/sections/About.vue'
import TechnicalSkills from './components/sections/TechnicalSkills.vue'
import Projects from './components/sections/Projects.vue'
import Experience from './components/sections/Experience.vue'
import Contact from './components/sections/Contact.vue'

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
}

::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.7);
}
</style>
