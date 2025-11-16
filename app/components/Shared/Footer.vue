<template>
  <footer class="bg-gray-900 text-white">
    <UContainer>
      <div
        class="py-12 flex flex-col items-center space-y-6 md:flex-row md:items-center md:justify-between md:space-y-0"
      >
        <div class="flex justify-center space-x-6 md:order-2">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.to"
            class="text-gray-400 hover:text-white"
          >
            <span class="sr-only">{{ item.name }}</span>
            <UIcon
              :name="item.icon"
              class="h-6 w-6"
            />
          </NuxtLink>
        </div>
        <div class="md:order-1 text-center md:text-left">
          <p class="text-sm text-gray-400">
            &copy; {{ new Date().getFullYear() }} Best Scranton Plumber. <br class="md:hidden">
            <span class="inline-block">Website by <NuxtLink
                to="https://formworkstudios.com"
                target="_blank"
                class="text-primary-400 hover:text-primary-300"
              >Formwork Studios</NuxtLink></span>
          </p>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup>
const navigation = [
  {
    name: 'Facebook',
    to: 'https://www.facebook.com/Primosewercleaning/',
    icon: 'i-simple-icons-facebook'
  }
]
</script>