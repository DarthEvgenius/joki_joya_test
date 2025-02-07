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
    'nuxt-svgo'
  ],

  compatibilityDate: "2025-02-06",
})