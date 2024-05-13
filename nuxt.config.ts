// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true }, // SSG
    '/login': { ssr: false }, // SPA
    '/api/**': { cors: true }, // CORS to refuse outside requests
  }
})
