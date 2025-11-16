<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      scrolled ? 'bg-white backdrop-blur-xl border-b border-gray-300 shadow-lg' : 'bg-gray-900/40 backdrop-blur-md border-b border-white/10 shadow-sm',
      hidden ? '-translate-y-full' : 'translate-y-0'
    ]"
  >
    <UContainer class="flex items-center justify-between gap-3 h-16">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex items-center gap-2"
      >
        <UIcon
          name="i-fa6-solid-faucet"
          class="h-6 w-6 text-primary"
        />
        <span
          class="font-bold !text-base sm:!text-lg md:!text-xl transition-colors duration-300"
          :class="scrolled ? 'text-gray-900' : 'text-white'"
        >
          Best Scranton Plumber
        </span>
      </NuxtLink>

      <!-- Navigation Links -->
      <UHorizontalNavigation
        :links="links"
        class="hidden lg:flex"
        :class="scrolled ? 'text-gray-900' : 'text-white'"
      />

      <!-- Call Now Button - Desktop -->
      <UButton
        to="tel:570-905-8441"
        icon="i-heroicons-phone-20-solid"
        class="hidden lg:flex"
      >
        Call Now
      </UButton>

      <!-- Call Now Button - Mobile -->
      <UButton
        to="tel:570-905-8441"
        class="lg:hidden"
      >
        Call Us
      </UButton>

      <!-- Mobile Menu Button will go here -->

    </UContainer>
  </header>
</template>

<script setup>
const links = [
  {
    label: 'Services',
    to: '#services'
  },
  {
    label: 'About',
    to: '#about'
  },
  {
    label: 'Testimonials',
    to: '#testimonials'
  },
  {
    label: 'Contact',
    to: '#contact'
  }
]

const scrolled = ref(false)
const hidden = ref(false)
let lastScrollY = 0

const handleScroll = () => {
  const currentScrollY = window.scrollY

  // Check if scrolled past one screen height
  scrolled.value = currentScrollY > window.innerHeight

  // Hide/show based on scroll direction
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Scrolling down
    hidden.value = true
  } else {
    // Scrolling up
    hidden.value = false
  }

  lastScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>