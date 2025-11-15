<template>
  <footer class="bg-gray-900 text-white">
    <UContainer>
      <div class="py-12 md:flex md:items-center md:justify-between">
        <div class="flex justify-center space-x-6 md:order-2">
          <NuxtLink v-for="item in navigation" :key="item.name" :to="item.to" class="text-gray-400 hover:text-white">
            <span class="sr-only">{{ item.name }}</span>
            <UIcon :name="item.icon" class="h-6 w-6" />
          </NuxtLink>
        </div>
        <div class="mt-8 md:mt-0 md:order-1">
          <p class="text-center text-base text-gray-400">&copy; {{ new Date().getFullYear() }} Best Scranton Plumber. All rights reserved.</p>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup>
const navigation = [
  {
    name: 'Facebook',
    to: '#',
    icon: 'i-simple-icons-facebook'
  },
  {
    name: 'Twitter',
    to: '#',
    icon: 'i-simple-icons-twitter'
  },
  {
    name: 'GitHub',
    to: '#',
    icon: 'i-simple-icons-github'
  }
]
</script>