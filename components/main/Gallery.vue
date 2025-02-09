<script setup></script>

<template>
    <section class="gallery">
        <div class="gallery__title">
            <h2>
                <p>
                    Интерьеры
                    <SvgoStar />
                    <SvgoStar />
                </p>
                 <p>
                    парков
                    <SvgoCross-2 />
                    <SvgoFlower-2 />
                    <SvgoStar-2 />
                </p>
            </h2>
        </div>

        <div class="gallery__swiper">

            <MainSwiper />
            
            <!-- <MainSwiper
                :slides-per-view="1"
                :space-between="30"
                :pagination="{ clickable: true }"
                :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
            >
                <SwiperSlide v-for="image in images" :key="image.id">
                    <img :src="image.src" alt="Интерьер парка">
                </SwiperSlide>
            </MainSwiper> -->

            <div class="swiper-button-prev">
                <SvgoArrow />
            </div>
            <div class="swiper-button-next">
                <SvgoArrow />
            </div>
            
        </div>
    </section>
</template>

<style scoped></style>