// https://nuxt.com/docs/api/configuration/nuxt-config

let apiUrl = ''
if (process.env.API_URL == undefined) {
  apiUrl = 'https://asia-east1-ntpu-gdg-blog.cloudfunctions.net/blog/api'
}
else {
  apiUrl = process.env.API_URL
}

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt', '@nuxtjs/tailwindcss'],
  routeRules: {
    '/api/**': { proxy: { to: `${apiUrl}/**`, fetchOptions: {redirect: 'manual' } } }
  },
  runtimeConfig: {
    public: {
      oauth: {
        Google: {
          clientId: process.env.GOOGLE_CLIENT_ID,
        }
      }
    }
  }
})