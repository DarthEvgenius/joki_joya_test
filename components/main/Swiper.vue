<script setup>
const slides = [
    { id: 1, src: '/swipe.png', alt: 'Описание' },
    { id: 2, src: '/swipe.png', alt: 'Описание' },
    { id: 3, src: '/swipe.png', alt: 'Описание' },
    { id: 4, src: '/swipe.png', alt: 'Описание' },
    { id: 5, src: '/swipe.png', alt: 'Описание' },
];

const imageLoading = ref(Array(slides.length).fill(true));

const onImageLoaded = (index) => {
    imageLoading.value[index] = false;
}

const swiperBasicRef = ref(null)
const swiper = useSwiper(swiperBasicRef, {
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
});

</script>

<template>
<div class="swiper">

    <div class="swiper-wrapper">
      <div
        class="swiper-wrapper__inner"
      >
        <ClientOnly>
            <swiper-container
                ref="swiperBasicRef"
                :loop="true"
                pagination="true"
            >
                
                <swiper-slide
                    v-for="(slide, index) in slides"
                    :key="`${slide.id}`"
                    class="swiper-slide"
                    lazy="true"
                >
                    <div 
                        class="skeleton-wrapper"
                        v-if="imageLoading[index]"
                    >
                        <MainSkeletonLoader />
                    </div>
                    

                    <NuxtImg 
                        :src="slide.src" 
                        :alt="slide.alt"
                        format="webp"
                        fit="cover"
                        loading="lazy"
                        @load="onImageLoaded(index)"
                    />
                </swiper-slide>
            </swiper-container>

            <div class="swiper-buttons">
                <button 
                    @click="swiper.prev()"
                    class="swiper__button swiper__button_prev"
                >
                    <SvgoArrow-back class="icon-no-fill" />
                </button>

                <button 
                    @click="swiper.next()"
                    class="swiper__button swiper__button_next"
                >
                    <SvgoArrow-forward class="icon-no-fill" />
                </button>
            </div>
        </ClientOnly>
      </div>
    </div>
</div>
</template>

<style scoped>
.skeleton-wrapper {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
}

swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

swiper-container::part(pagination) {
    bottom: 3rem;
    padding-left: 10rem;
    display: block;
    text-align: left;
}

swiper-container::part(bullet) {
    width: 1rem;
    height: 1rem;
    background-color: var(--clr-green);
    opacity: 1;
}

swiper-container::part(bullet-active) {
    background-color: var(--clr-green);
    width: 4rem;
    height: 1rem;
    border-radius: 1rem;
}

.swiper-wrapper__inner {
    position: relative;
}

.swiper-buttons {
    position: absolute;
    left: 0;
    bottom: 3rem;
    transform: translateX(-50%);
    z-index: var(--z-index-button);
}

.swiper__button {
  width: 80px;
  height: 80px;
  font-size: var(--f-size-54);
  cursor: pointer;
  transition: scale 300ms;
}

.swiper__button_prev {
    background-color: var(--clr-blue);
}

.swiper__button_next {
    background-color: var(--clr-green);
}

.swiper-buttons .swiper__button:hover {
    scale: 1.05;
}

@media (max-width: 768px) {
    .swiper-buttons {
        top: 1rem;
        left: 1rem;
        transform: translateX(0);
    }

    swiper-container::part(pagination) {
        bottom: 2rem;
        display: flex;
        justify-content: space-evenly;
        padding-inline: 0;
    }
}
</style>