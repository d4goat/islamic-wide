// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "Islamic Wide",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
    }
  },
  supabase: {
    url:"https://slmtjhsjhxwyenuboxzt.supabase.co",
    key:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsbXRqaHNqaHh3eWVudWJveHp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3NDA5OTUsImV4cCI6MjA1MTMxNjk5NX0.CQtuvmIcJeRZqTWacSyCzASDoQ1DY_mOLpI-b5QParM",
    redirect: false
  },
  modules: ['@nuxt/ui', '@nuxtjs/supabase'],
})