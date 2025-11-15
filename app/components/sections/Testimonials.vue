<template>
  <div id="testimonials" class="bg-white py-24 sm:py-32">
    <UContainer>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Customers Are Saying</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          We take pride in our work, and it shows. Here's what some of our happy customers have to say.
        </p>
      </div>
    </UContainer>
    <div class="relative mt-16">
      <UMarquee :gap="16" pause-on-hover duration="120s" direction="right">
        <UCard v-for="(testimonial, index) in testimonials" :key="index" class="w-96" :ui="{ background: 'bg-white', ring: 'ring-1 ring-gray-200', shadow: 'shadow-none' }">
          <template #header>
            <div class="flex items-center gap-x-4">
              <UAvatar :alt="testimonial.author.name" size="md" />
              <div>
                <p class="font-semibold text-gray-900">{{ testimonial.author.name }}</p>
                <p class="text-gray-600">{{ testimonial.author.handle }}</p>
              </div>
            </div>
          </template>
          <p class="text-base leading-7 text-gray-700">"{{ testimonial.body }}"</p>
        </UCard>
      </UMarquee>
      <div class="pointer-events-none absolute inset-y-0 left-0 w-32" style="background-image: linear-gradient(to right, white, transparent);" />
      <div class="pointer-events-none absolute inset-y-0 right-0 w-32" style="background-image: linear-gradient(to left, white, transparent);" />
    </div>
  </div>
</template>

<script setup>
const testimonials = [
  {
    body: 'Incredible service! They arrived within 30 minutes for an emergency call and fixed our burst pipe faster than I thought possible. Highly recommend!',
    author: {
      name: 'Michael S.',
      handle: 'Scranton Homeowner',
    },
  },
  {
    body: 'Finally, an honest plumber. They gave me a clear, upfront quote and stuck to it. The work was top-notch and they cleaned up everything afterward.',
    author: {
      name: 'Angela M.',
      handle: 'Local Business Owner',
    },
  },
  {
    body: 'I had a new water heater installed and the entire process was seamless. The team was professional, courteous, and very knowledgeable. My new system works perfectly.',
    author: {
      name: 'Dwight K.',
      handle: 'Property Manager',
    },
  },
  {
    body: 'They cleared a stubborn drain clog that two other companies couldn\'t fix. I was impressed by their professionalism and advanced equipment. Will be my go-to plumber from now on.',
    author: {
      name: 'Pamela H.',
      handle: 'Dunmore Resident',
    },
  },
]
</script>
