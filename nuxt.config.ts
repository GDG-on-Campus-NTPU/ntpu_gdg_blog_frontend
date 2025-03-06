// https://nuxt.com/docs/api/configuration/nuxt-config

let apiUrl = '';
if (process.env.API_URL == undefined) {
  apiUrl = 'https://asia-east1-ntpu-gdg-blog.cloudfunctions.net/blog/api';
} else {
  apiUrl = process.env.API_URL;
}

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'google-fonts',
    'vue3-carousel-nuxt',
    '@samk-dev/nuxt-vcalendar'
  ],
  css: ['@/assets/css/main.css'],
  routeRules: {
    '/api/**': {
      proxy: { to: `${apiUrl}/**`, fetchOptions: { redirect: 'manual' } },
    },
  },
  googleFonts: {
    families: {
      'Noto+Sans+TC': [400, 700],
    },
  },
  runtimeConfig: {
    public: {
      oauth: {
        Google: {
          clientId: process.env.GOOGLE_CLIENT_ID,
        },
      },
    },
  },
});