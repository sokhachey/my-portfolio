<template>
  <section class="py-20 px-16 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-2">About Me</h2>
        <div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Side: Image + Profile Info -->
        <div class="relative">
          <div class="bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-3xl p-6 shadow-xl">
            <div class="flex flex-col items-center text-center text-white">
              <div class="w-36 h-36 rounded-full overflow-hidden bg-white mb-6 shadow-lg">
                <!-- Replace with your actual image path -->
                <img src="/public/image/IMG_9520.JPG" alt="Sokha SIM" class="w-full h-full object-cover" />
              </div>
              <h3 class="text-2xl font-bold">Sokha SIM</h3>
              <p class="text-blue-200 text-sm">Full-Stack Developer</p>
              <p class="text-sm mt-2 max-w-xs">
                Passionate about building efficient and scalable web applications.
              </p>
            </div>
          </div>
        </div>

        <!-- Right Side: Description -->
        <div class="text-gray-700 space-y-6">
          <p class="text-lg leading-relaxed">
            I'm <strong>Sokha SIM</strong>,a Khmer national born on January 28, 2006, in Pursat, Cambodia. I graduated from high school in 2023 and am currently pursuing an associate degree at Passerelles Numériques Cambodia (PNC) for the 2024–2026 academic years. Through this program, I am developing technical and soft skills to build a career in the IT and digital field.
          </p>

          <p class="text-lg leading-relaxed">
            I specialize in building modern, responsive websites using technologies like <strong>Vue.js</strong> and <strong>Laravel</strong>, with a solid foundation in full-stack development.
          </p>

          <div class="grid grid-cols-2 gap-6 pt-4">
            <!-- Education Card -->
            <!-- <div class="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                <h4 class="text-blue-600 font-semibold">Education</h4>
              </div>
              <p class="text-sm font-medium">Associate Degree</p>
              <p class="text-xs text-gray-500">PNC (2024–2026)</p>
            </div> -->

            <!-- Location Card -->
            <!-- <div class="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h4 class="text-blue-600 font-semibold">Location</h4>
              </div>
              <p class="text-sm font-medium">Phnom Penh</p>
              <p class="text-xs text-gray-500">Cambodia</p>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseCard from '../global/BaseCard.vue'
</script>
