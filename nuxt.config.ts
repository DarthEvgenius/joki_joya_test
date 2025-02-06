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
  ],

  head: {
    link: [
      { rel: 'preload', href: '/drukcyr-medium-webfont.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/drukcyr-medium-webfont.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/drukcyr-medium-webfont.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/drukwidecyr-medium.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/drukwidecyr-medium.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/drukwidecyr-medium.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/drukcyr-medium-webfont.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/NunitoSans-Regular.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/NunitoSans-Regular.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/NunitoSans-Regular.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
    ]
  },

  compatibilityDate: "2025-02-06",
})