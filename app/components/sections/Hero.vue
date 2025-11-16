<template>
  <div class="relative bg-gray-900 min-h-screen isolate">
    <div class="absolute inset-0 z-0">
      <div
        class="w-full h-full bg-cover bg-center bg-fixed"
        style="background-image: url('/plumbing.webp');"
      ></div>
      <div class="absolute inset-0 bg-gray-900 opacity-70"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-transparent to-gray-900/30"></div>
    </div>
    <UContainer class="relative min-h-screen flex items-center z-10 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <!-- Left Column - Hero Content -->
        <div class="text-center lg:text-left">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl hero-animate-1 pt-20 md:pt-0">
            Best Scranton Plumber
          </h1>
          <p class="mt-6 text-base md:!text-lg leading-8 text-gray-300 max-w-[45ch] mx-auto lg:mx-0 hero-animate-2">
            Fast, Reliable, and Professional Plumbing Service in Scranton, PA. <span class="font-bold">We keep things
              flowing</span>.
          </p>
          <div
            class="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-x-6 hero-animate-3"
          >
            <UButton
              to="tel:570-905-8441"
              size="xl"
              icon="i-heroicons-phone-arrow-up-right-20-solid"
              block
              class="w-full sm:w-auto"
            >
              Call Now: (570) 905-8441
            </UButton>
            <UButton
              to="#services"
              variant="outline"
              color="neutral"
              size="xl"
              trailing-icon="i-heroicons-arrow-right-20-solid"
              block
              class="w-full sm:w-auto hidden sm:flex"
            >
              Our Services
            </UButton>
          </div>
        </div>

        <!-- Right Column - Contact Form -->
        <div class="flex justify-center pt-10 md:pt-0">
          <div class="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/30 w-full max-w-md">
            <h2 class="text-2xl font-bold text-white !mb-6 pt-2 cursor-pointer">Contact a Plumber</h2>
            <form
              class="space-y-5"
              @submit.prevent="handleSubmit"
            >
              <div>
                <UInput
                  v-model="form.name"
                  placeholder="Your Name"
                  size="lg"
                  required
                  class="w-full placeholder-white"
                  :ui="{ base: 'bg-white/30 backdrop-blur-md border-white/40 text-white placeholder-white' }"
                />
              </div>
              <div>
                <UInput
                  v-model="form.email"
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
                  v-model="form.phone"
                  type="tel"
                  placeholder="Phone Number (e.g., 570-555-0101)"
                  size="lg"
                  required
                  pattern="[\d\s\-\(\)]{10,}"
                  minlength="10"
                  class="w-full placeholder-white"
                  :ui="{ base: 'bg-white/30 backdrop-blur-md border-white/40 text-white placeholder-white' }"
                />
                <p
                  v-if="showPhoneError"
                  class="text-red-300 text-sm mt-1"
                >
                  Please enter a valid 10-digit phone number.
                </p>
              </div>
              <div>
                <USelectMenu
                  v-model="form.service"
                  placeholder="Select Service"
                  size="lg"
                  :items="serviceOptions"
                  required
                  class="w-full"
                  :ui="{ base: 'bg-white/30 backdrop-blur-md border-white/40 text-white placeholder-white' }"
                />
              </div>
              <div>
                <UTextarea
                  v-model="form.message"
                  placeholder="Describe your plumbing needs..."
                  :rows="4"
                  size="lg"
                  required
                  class="w-full placeholder-white"
                  :ui="{ base: 'bg-white/30 backdrop-blur-md border-white/40 text-white placeholder-white' }"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-white mb-2">
                  What is {{ mathQuestion.num1 }} + {{ mathQuestion.num2 }}?
                </label>
                <UInput
                  v-model="form.mathAnswer"
                  type="number"
                  placeholder="Your answer"
                  size="lg"
                  required
                  class="w-full placeholder-white"
                  :ui="{ base: 'bg-white/30 backdrop-blur-md border-white/40 text-white placeholder-white' }"
                />
                <p
                  v-if="showMathError"
                  class="text-red-300 text-sm mt-1"
                >
                  Incorrect answer. Please try again.
                </p>
              </div>
              <UButton
                type="submit"
                size="xl"
                block
                :disabled="isSubmitting"
              >
                <span class="w-full text-center">
                  {{ isSubmitting ? 'Sending...' : 'Send Request' }}
                </span>
              </UButton>
              <p
                v-if="submitSuccess"
                class="text-green-300 text-sm text-center"
              >
                Thank you! We'll contact you soon.
              </p>
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

// Form state
const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  mathAnswer: ''
})

// Generate random math question
const generateMathQuestion = () => {
  const num1 = Math.floor(Math.random() * 10) + 1
  const num2 = Math.floor(Math.random() * 10) + 1
  return { num1, num2, answer: num1 + num2 }
}

const mathQuestion = ref(generateMathQuestion())
const showMathError = ref(false)
const showPhoneError = ref(false)
const isSubmitting = ref(false)
const submitSuccess = ref(false)

const validatePhone = (phone: string) => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '')
  // Check if it has exactly 10 digits
  return cleaned.length === 10
}

const handleSubmit = async () => {
  // Validate phone number
  if (!validatePhone(form.value.phone)) {
    showPhoneError.value = true
    return
  }
  showPhoneError.value = false

  // Validate math answer
  if (parseInt(form.value.mathAnswer) !== mathQuestion.value.answer) {
    showMathError.value = true
    return
  }

  showMathError.value = false
  isSubmitting.value = true

  try {
    // Send form data to API
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        service: form.value.service,
        message: form.value.message,
      },
    })

    console.log('Form submitted successfully:', response)

    // Show success message
    submitSuccess.value = true

    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      mathAnswer: ''
    }

    // Generate new math question
    mathQuestion.value = generateMathQuestion()

    // Hide success message after 5 seconds
    setTimeout(() => {
      submitSuccess.value = false
    }, 5000)
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('There was an error sending your message. Please try again or call us directly.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.hero-animate-1,
.hero-animate-2,
.hero-animate-3 {
  opacity: 0;
  transform: translateY(32px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.hero-animate-1 {
  animation-delay: 0s;
}

.hero-animate-2 {
  animation-delay: 0.2s;
}

.hero-animate-3 {
  animation-delay: 0.4s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
