<template>
  <div
    id="contact"
    class="relative bg-gray-900"
  >
    <div class="absolute inset-0 z-0">
      <div
        class="w-full h-full bg-cover bg-center"
        style="background-image: url('/pipes.webp');"
      ></div>
      <div class="absolute inset-0 bg-gray-900 opacity-70"></div>
    </div>
    <UContainer class="relative z-10 py-24 sm:py-32">
      <div class="relative isolate overflow-hidden">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Need to Talk to a Plumber Now?</h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">
              Don't wait for a small drip to become a big problem. Call us today for a free estimate and experience the
              best plumbing service in Scranton.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <UButton
                to="tel:570-905-8441"
                size="xl"
                icon="i-heroicons-phone-arrow-up-right-20-solid"
                block
                class="w-full sm:w-auto"
              >
                Call Now: (570) 905-8441
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
