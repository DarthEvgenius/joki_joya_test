import { resolve } from 'path';

export default defineNuxtConfig({
  devtools: { enabled: false },

  alias: {
    "@": resolve(__dirname, "/"),
  },

  css: [
    "~/assets/main.scss"
  ],

  modules: [
    '@nuxt/image',
    'nuxt-svgo',
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Детский парк развлечений Joki Joya'}
      ],
    },
  },

  compatibilityDate: "2025-02-06",
})