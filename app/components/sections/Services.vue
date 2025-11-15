<template>
  <div id="services" class="bg-white py-24 sm:py-32">
    <UContainer>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          We offer a wide range of plumbing services to meet your needs. No job is too big or too small.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="service in services" :key="service.name" class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
              <UIcon :name="service.icon" class="h-8 w-8 text-primary-600" />
              {{ service.name }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p class="flex-auto">{{ service.description }}</p>
            </dd>
          </div>
        </dl>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const services = [
  {
    name: 'Emergency Repairs',
    description: '24/7 availability for burst pipes, severe clogs, and other urgent issues. We\'re here when you need us most.',
    icon: 'i-heroicons-exclamation-triangle-20-solid',
  },
  {
    name: 'Drain Cleaning',
    description: 'Advanced techniques to clear any clog from your sinks, toilets, showers, and main sewer lines quickly and effectively.',
    icon: 'i-heroicons-wrench-screwdriver-20-solid',
  },
  {
    name: 'Water Heater Installation & Repair',
    description: 'Expert service for both tankless and traditional water heaters, ensuring you have reliable hot water.',
    icon: 'i-heroicons-fire-20-solid',
  },
  {
    name: 'Leak Detection & Repair',
    description: 'Using the latest technology to find and fix leaks with minimal disruption to your home.',
    icon: 'i-heroicons-eye-dropper-20-solid',
  },
  {
    name: 'Faucet & Fixture Services',
    description: 'Installation and repair for all types of faucets, sinks, toilets, and shower heads.',
    icon: 'i-heroicons-swatch-20-solid',
  },
  {
    name: 'Garbage Disposal Services',
    description: 'Keep your kitchen running smoothly with our garbage disposal repair and replacement services.',
    icon: 'i-heroicons-trash-20-solid',
  },
]
</script>
