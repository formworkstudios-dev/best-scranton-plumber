<template>
  <div class="relative bg-gray-900 h-screen isolate">
    <div class="absolute inset-0 z-0">
      <div
        class="w-full h-full bg-cover bg-center bg-fixed"
        style="background-image: url('/plumbing.jpg');"
      ></div>
      <div class="absolute inset-0 bg-gray-900 opacity-70"></div>
    </div>
    <UContainer class="relative h-full flex items-center z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <!-- Left Column - Hero Content -->
        <div>
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Best Scranton Plumber
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-300 max-w-[45ch]">
            Fast, Reliable, and Professional Plumbing Service in Scranton, PA. <span class="font-bold">We keep things
              flowing</span>.
          </p>
          <div class="mt-10 flex items-center gap-x-6">
            <UButton
              to="tel:570-555-0101"
              size="xl"
              icon="i-heroicons-phone-arrow-up-right-20-solid"
            >
              Call Now: (570) 555-0101
            </UButton>
            <UButton
              to="#services"
              variant="outline"
              color="neutral"
              size="xl"
              trailing-icon="i-heroicons-arrow-right-20-solid"
            >
              Our Services
            </UButton>
          </div>
        </div>

        <!-- Right Column - Contact Form -->
        <div class="flex justify-center">
          <div class="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/30 w-full max-w-md">
            <h2 class="text-2xl font-bold text-white !mb-6">Request a Quote</h2>
            <form class="space-y-5">
              <div>
                <UInput
                  placeholder="Your Name"
                  size="lg"
                  required
                  class="w-full placeholder-white"
                  :ui="{ base: 'bg-white/30 backdrop-blur-md border-white/40 text-white placeholder-white' }"
                />
              </div>
              <div>
                <UInput
                  type="email"
                  placeholder="Email Address"
                  size="lg"
                  required
                  class="w-full placeholder-white"
                  :ui="{ base: 'bg-white/30 backdrop-blur-md border-white/40 text-white placeholder-white' }"
                />
              </div>
              <div>
                <UInput
                  type="tel"
                  placeholder="Phone Number"
                  size="lg"
                  required
                  class="w-full placeholder-white"
                  :ui="{ base: 'bg-white/30 backdrop-blur-md border-white/40 text-white placeholder-white' }"
                />
              </div>
              <div>
                <USelectMenu
                  placeholder="Select Service"
                  size="lg"
                  :items="serviceOptions"
                  class="w-full"
                  :ui="{ base: 'bg-white/30 backdrop-blur-md border-white/40 text-white placeholder-white' }"
                />
              </div>
              <div>
                <UTextarea
                  placeholder="Describe your plumbing needs..."
                  :rows="4"
                  size="lg"
                  class="w-full placeholder-white"
                  :ui="{ base: 'bg-white/30 backdrop-blur-md border-white/40 text-white placeholder-white' }"
                />
              </div>
              <UButton
                type="submit"
                size="xl"
                block
              ><span class="w-full text-center">
                  Send Request</span>
              </UButton>
            </form>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
<script
  setup
  lang="ts"
>
const serviceOptions = [
  'Emergency Plumbing',
  'Drain Cleaning',
  'Water Heater Repair/Installation',
  'Leak Detection & Repair',
  'Pipe Repair/Replacement',
  'Bathroom Remodeling',
  'Kitchen Plumbing',
  'Sewer Line Services',
  'Other',
]
</script>
