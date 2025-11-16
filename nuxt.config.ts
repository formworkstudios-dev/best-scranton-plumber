// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "nuxt-resend",
    "@nuxtjs/seo",
  ],

  runtimeConfig: {
    resendApiKey: "",
  },

  ui: {
    colorMode: false,
  },

  site: {
    url: "https://bestscrantonplumber.com",
    name: "Best Scranton Plumber",
    description:
      "Fast, Reliable, and Professional Plumbing Service in Scranton, PA. 24/7 emergency repairs, sewer services, drain cleaning, and more.",
    defaultLocale: "en",
  },

  seo: {
    redirectToCanonicalSiteUrl: true,
  },

  schemaOrg: {
    identity: {
      type: "LocalBusiness",
      name: "Best Scranton Plumber",
      url: "https://bestscrantonplumber.com",
      logo: "/best-scranton-plumber.png",
      description:
        "Fast, Reliable, and Professional Plumbing Service in Scranton, PA. Over 20 years serving Scranton and surrounding areas.",
      telephone: "+1-570-905-8441",
      priceRange: "$$",
      address: {
        addressLocality: "Scranton",
        addressRegion: "PA",
        addressCountry: "US",
      },
      geo: {
        latitude: 41.409,
        longitude: -75.6624,
      },
      areaServed: [
        { name: "Scranton" },
        { name: "Wilkes-Barre" },
        { name: "Carbondale" },
        { name: "Dunmore" },
      ],
      openingHoursSpecification: [
        {
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      sameAs: ["https://www.facebook.com/Primosewercleaning/"],
      hasOfferCatalog: {
        name: "Plumbing Services",
        itemListElement: [
          {
            itemOffered: {
              name: "Emergency Repairs",
              description:
                "24/7 availability for burst pipes, severe clogs, and other urgent issues.",
            },
          },
          {
            itemOffered: {
              name: "Sewer Repair",
              description:
                "Professional sewer line repair and replacement services.",
            },
          },
          {
            itemOffered: {
              name: "Drain Cleaning",
              description:
                "Proven techniques to clear any clog from sinks, toilets, showers, and main sewer lines.",
            },
          },
          {
            itemOffered: {
              name: "Water Heater Repair",
              description:
                "Expert service for both tankless and traditional water heaters.",
            },
          },
          {
            itemOffered: {
              name: "Leak Detection & Repair",
              description:
                "Advanced video technology to find and fix leaks with minimal disruption.",
            },
          },
          {
            itemOffered: {
              name: "Faucet & Fixture Services",
              description:
                "Installation and repair for all types of faucets, sinks, toilets, and shower heads.",
            },
          },
        ],
      },
    },
  },

  ogImage: {
    enabled: true,
    defaults: {
      component: "OgImage",
    },
  },
});
