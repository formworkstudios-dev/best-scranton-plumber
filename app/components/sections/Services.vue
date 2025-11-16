<template>
  <div
    id="services"
    class="bg-white py-24 sm:py-32"
  >
    <UContainer>
      <div class="mx-auto flex flex-row w-full justify-between">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center w-full">Plumbing & Sewer
          Services</h2>

      </div>
      <div class="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-16 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
          <UCard
            v-for="service in services"
            :key="service.name"
            class="flex flex-col bg-blue-100/80 p-0"
            :ui="{ body: '!p-0' }"
          >
            <dt
              class="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900 py-3 px-6 border-b border-gray-300 mb-4 min-h-[4rem]"
            >
              <UIcon
                :name="service.icon"
                class="h-6 w-6 text-primary-600 flex-shrink-0"
              />
              {{ service.name }}
            </dt>
            <dd class="flex flex-auto flex-col text-base leading-7 text-gray-600 px-6 pb-6">
              <p class="flex-auto">{{ service.description }}</p>
            </dd>
          </UCard>
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
    name: 'Sewer Repair',
    description: 'Professional sewer line repair and replacement services to keep your plumbing system flowing properly.',
    icon: 'i-heroicons-wrench-screwdriver-20-solid',
  },
  {
    name: 'Drain Cleaning',
    description: 'Proven techniques to clear any clog from your sinks, toilets, showers, and main sewer lines quickly and effectively.',
    icon: 'i-heroicons-funnel-20-solid',
  },
  {
    name: 'Water Heater Repair',
    description: 'Expert service for both tankless and traditional water heaters, ensuring you have reliable hot water.',
    icon: 'i-heroicons-fire-20-solid',
  },
  {
    name: 'Leak Detection & Repair',
    description: 'Our team uses advanced video technology to find and fix leaks with minimal disruption to your home.',
    icon: 'i-heroicons-eye-dropper-20-solid',
  },
  {
    name: 'Faucet & Fixture Services',
    description: 'Installation and repair for all types of faucets, sinks, toilets, and shower heads.',
    icon: 'i-heroicons-swatch-20-solid',
  },
]
</script>
