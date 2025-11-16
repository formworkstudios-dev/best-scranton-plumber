<template>
  <div
    id="faq"
    class="relative bg-blue-50 py-24 sm:py-32 border-t border-gray-300 overflow-hidden"
  >
    <!-- 45-degree gradient overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-primary-500/20 pointer-events-none"
    ></div>

    <UContainer class="relative z-10">
      <div class="mx-auto max-w-4xl ">
        <div class="text-center mb-16">
          <h2 class="text-base font-semibold leading-7 text-primary-600">FAQ</h2>
          <p class="mt-6 md:!text-lg text-gray-600 max-w-xl leading-relaxed mx-auto">
            Have questions about our plumbing services? We've got answers. Find the most common questions our customers
            ask.
          </p>
        </div>

        <UAccordion
          class="max-w-2xl mx-auto"
          type="multiple"
          :items="faqItems"
          :ui="{
            item: 'border-b border-default last:border-b-0 first:rounded-t-md last:rounded-b-md overflow-hidden'
          }"
        />
      </div>
    </UContainer>
  </div>
</template>

<script
  setup
  lang="ts"
>
const faqItems = [
  {
    label: 'What areas do you serve?',
    content: 'We proudly serve Scranton and the surrounding areas within a 30-mile radius. This includes Wilkes-Barre, Carbondale, Dunmore, and other nearby communities. If you\'re not sure if we service your area, give us a call and we\'ll let you know!',
  },
  {
    label: 'Do you offer emergency plumbing services?',
    content: 'Yes! We offer 24/7 emergency plumbing services. Plumbing emergencies don\'t wait for business hours, and neither do we. Whether it\'s a burst pipe, severe leak, or backed-up sewer, we\'re available day or night to help.',
  },
  {
    label: 'Are you licensed and insured?',
    content: 'Absolutely. We are fully licensed and insured for your protection and peace of mind. Our plumbers are professionally trained, certified, and maintain all necessary credentials required by Pennsylvania state law.',
  },
  {
    label: 'How quickly can you respond to a service call?',
    content: 'For emergencies, we typically respond within 1-2 hours. For scheduled appointments, we offer same-day or next-day service in most cases. We understand that plumbing issues need prompt attention, and we prioritize quick response times.',
  },
  {
    label: 'Do you provide free estimates?',
    content: 'Yes, we provide free estimates for most plumbing projects. For emergency services, we charge a diagnostic fee which is applied to the repair cost if you choose to proceed with our services. We believe in transparent, upfront pricing with no hidden fees.',
  },
  {
    label: 'What payment methods do you accept?',
    content: 'We accept cash, all major credit cards (Visa, Mastercard, American Express, Discover), checks, and digital payment methods. Payment is due upon completion of work.',
  },
  {
    label: 'Do you offer warranties on your work?',
    content: 'Yes! We stand behind our work with a comprehensive warranty. All our labor comes with a satisfaction guarantee, and parts are covered by manufacturer warranties. Specific warranty terms vary by service type - ask us for details on your particular job.',
  },
  {
    label: 'Can you help with remodeling projects?',
    content: 'Definitely! We handle all plumbing aspects of kitchen and bathroom remodels, including fixture installation, pipe relocation, and new plumbing layouts. We work closely with contractors and homeowners to ensure your remodeling project goes smoothly.',
  },
]
</script>
