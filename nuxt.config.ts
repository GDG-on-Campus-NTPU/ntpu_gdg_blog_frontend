// https://nuxt.com/docs/api/configuration/nuxt-config

let apiUrl = '';
if (process.env.API_URL == undefined) {
  apiUrl = 'https://asia-east1-ntpu-gdg-blog.cloudfunctions.net/blog/api';
} else {
  apiUrl = process.env.API_URL;
}

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css',
        },
      ],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'google-fonts',
  ],
  css: ['normalize.css', '@/assets/css/main.css'],
  routeRules: {
    '/api/**': {
      proxy: { to: `${apiUrl}/**`, fetchOptions: { redirect: 'manual' } },
    },
    '/image/**': {
      proxy: {
        to: `https://drive.google.com/drive-viewer/**`,
        fetchOptions: { redirect: 'manual' },
      },
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
