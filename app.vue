<script setup>
  useHead: ({
    link: [
      { rel: 'preload', href: '/fonts/drukcyr-medium-webfont.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/drukcyr-medium-webfont.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/DrukCyr-Medium.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/drukwidecyr-medium.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/drukwidecyr-medium.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/drukwidecyr-medium.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/drukcyr-medium-webfont.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/NunitoSans-Regular.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/NunitoSans-Regular.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/NunitoSans-Regular.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
    ]
  })
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
