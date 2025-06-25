<template>
  <section class="py-20 px-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 w-full">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        
        <!-- Left Side - Developer Info -->
        <div class="space-y-8">
          <div class="space-y-6">
            <div class="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              👋 Hello, I'm a Web Developer
            </div>

            <h1 class="text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
              I am <span class="text-blue-600">Web Developer</span>
            </h1>

            <p class="text-xl text-gray-600 leading-relaxed max-w-lg">
              A passionate Web Developer based in Cambodia, creating modern and responsive web applications.
              Currently studying Computer Science at Passerelles Numériques Cambodia.
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#" class="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition">
              <i class="fas fa-download mr-2"></i> Download CV
            </a>
            <button @click="$emit('get-in-touch')" class="px-8 py-4 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
              Contact Me
            </button>
          </div>
        </div>

        <!-- Right Side - Profile Image with Gradient Frame and Floating Dots -->
        <div class="flex justify-center lg:justify-end relative">
          <div class="relative w-72 h-72">
            <!-- Gradient Border -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-2 shadow-2xl">
              <div class="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">
                <img src="/public/image/IMG_9520.JPG" alt="Sokha SIM" class="w-full h-full object-cover rounded-full" />
              </div>
            </div>

            <!-- Floating Dots -->
            <span class="absolute -top-4 -left-4 w-5 h-5 bg-green-400 rounded-full animate-ping"></span>
            <span class="absolute bottom-0 -right-4 w-6 h-6 bg-orange-400 rounded-full animate-bounce"></span>
            <span class="absolute -top-6 right-6 w-4 h-4 bg-purple-400 rounded-full animate-float"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(['get-in-touch'])

// You can put your actual image in `public/images/profile.png`
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>

<!-- Include FontAwesome (optional) -->
<!-- You can import icons from packages or via CDN like: -->
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" /> -->
