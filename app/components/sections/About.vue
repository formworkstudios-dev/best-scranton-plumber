<template>
  <div
    id="about"
    class="relative bg-gray-50 py-24 sm:py-32 overflow-hidden border-y border-blue-500/50"
  >
    <!-- 45-degree gradient overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-primary-500/20 pointer-events-none"
    ></div>

    <UContainer class="relative z-10">
      <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
        <div class="px-6 lg:px-0 lg:pr-4 lg:pt-4">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-primary-600">Our Story</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Over 20 Years of Serving
              Scranton</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              For almost a quarter of a century, we’ve kept the pipes flowing in Scranton and the surrounding towns. We
              pride ourselves on being honest and hardworking—and knowing our craft. Reliable plumbing isn’t a luxury;
              it’s essential for daily life. That’s why our licensed and insured team is committed to delivering
              top-quality workmanship and honest, upfront pricing.
            </p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <div class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <UIcon
                    name="i-heroicons-check-circle-20-solid"
                    class="absolute left-1 top-1 h-5 w-5 text-primary-600"
                  />
                  Licensed & Insured
                </dt>
                <dd class="block">For your peace of mind and protection.</dd>
              </div>
              <div class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <UIcon
                    name="i-heroicons-clock-20-solid"
                    class="absolute left-1 top-1 h-5 w-5 text-primary-600"
                  />
                  24/7 Emergency Service
                </dt>
                <dd class="block">We're always on call, day or night.</dd>
              </div>
              <div class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <UIcon
                    name="i-heroicons-trophy-20-solid"
                    class="absolute left-1 top-1 h-5 w-5 text-primary-600"
                  />
                  Satisfaction Guaranteed
                </dt>
                <dd class="block">We stand behind our work, always.</dd>
              </div>
            </dl>
            <p class="mt-8 text-base leading-7 text-gray-600">
              Want to learn more? Visit our parent site <NuxtLink
                to="https://www.primosewercleaning.com/"
                target="_blank"
                class="font-semibold text-primary-600 hover:text-primary-500"
              >Primo Sewer Cleaning</NuxtLink>.
            </p>
            <div class="mt-10">
              <UButton
                to="tel:570-905-8441"
                size="xl"
                icon="i-heroicons-phone-arrow-up-right-20-solid"
                block
                class="w-full sm:w-auto"
              >
                Call Us Today
              </UButton>
            </div>
          </div>
        </div>
        <div class="sm:px-6 lg:px-0">
          <div class="relative isolate overflow-hidden sm:mx-auto sm:max-w-2xl sm:rounded-3xl lg:mx-0 lg:max-w-none">
            <NuxtImg
              src="/best-scranton-plumber.jpeg"
              alt="Friendly plumber at work"
              class="w-full h-auto max-h-[600px] object-cover rounded-3xl ring-2 ring-primary-500/30 shadow-lg"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
