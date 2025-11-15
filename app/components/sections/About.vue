<template>
  <div
    id="about"
    class="bg-gray-50 py-24 sm:py-32"
  >
    <UContainer>
      <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
        <div class="px-6 lg:px-0 lg:pr-4 lg:pt-4">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-primary-600">Our Story</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">25 Years of Serving Scranton</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              From humble beginnings, we've grown into Scranton's most trusted plumbing service by focusing on one
              thing: customer satisfaction. Our licensed and insured team is dedicated to providing the highest quality
              workmanship and honest, upfront pricing.
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
                <dd class="inline"> - For your peace of mind and protection.</dd>
              </div>
              <div class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <UIcon
                    name="i-heroicons-clock-20-solid"
                    class="absolute left-1 top-1 h-5 w-5 text-primary-600"
                  />
                  24/7 Emergency Service
                </dt>
                <dd class="inline"> - We're always on call, day or night.</dd>
              </div>
              <div class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <UIcon
                    name="i-heroicons-trophy-20-solid"
                    class="absolute left-1 top-1 h-5 w-5 text-primary-600"
                  />
                  Satisfaction Guaranteed
                </dt>
                <dd class="inline"> - We stand behind our work, always.</dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="sm:px-6 lg:px-0">
          <div class="relative isolate overflow-hidden sm:mx-auto sm:max-w-2xl sm:rounded-3xl lg:mx-0 lg:max-w-none">
            <NuxtImg
              src="/best-scranton-plumber.jpeg"
              alt="Friendly plumber at work"
              class="w-full h-auto max-h-[600px] object-cover rounded-3xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
