<script setup></script>

<template>
    <section class="gallery">
        <h2 class="gallery__title">
            <span class="gallery__text font-druk font-size-4xl">
                Интерьеры
                <SvgoStar class="font-size-3xl font-blue" />
                <SvgoStar class="font-size-3xl font-blue" />
            </span>
                <span class="gallery__text gallery__text--second font-druk-wide font-size-4xl">
                парков
                <i class="gradient-icon gallery__title_icon icon-cross" ></i>
                <i class="gradient-icon gallery__title_icon icon-flower" ></i>
                <i class="gradient-icon gallery__title_icon icon-star" ></i>
            </span>
        </h2>

        <div class="gallery__swiper">

            <MainSwiper />
            
        </div>
    </section>
</template>

<style scoped>
    .gallery {
        max-width: 100vw;
        overflow: hidden;
        padding-left: 80px;
        display: flex;
        justify-content: space-evenly;
        gap: 90px;
    }

    .gallery__title {
        display: flex;
        flex-wrap: nowrap;
        align-items: end;
        padding-bottom: 3rem;
    }

    .gallery__text {
        width: fit-content;
        height: fit-content;
        writing-mode: sideways-lr;
        line-height: 1;
    }

    .gallery__text--second {
        position: relative;
        left: -4px;
        line-height: 0.8;
    }

    .gallery__title_icon {
        position: absolute;
        display: inline-block;
        width: 2rem;
        height: 2rem;
        left: -8px;
        z-index: var(--z-index-image);
    }

    .gallery__title_icon:nth-of-type(1) {
        bottom: 15%;
    }
    
    .gallery__title_icon:nth-of-type(2) {
        bottom: 57%
    }

    .gallery__title_icon:nth-of-type(3) {
        bottom: 100%;
    }

    .gallery__swiper {
        max-width: 1024px;
    }

    @media (max-width: 1440px) {
        .gallery {
            justify-content: space-between;
        }
    }

    @media (max-width: 768px) {
        .gallery {
            padding: 0;
            flex-direction: column;
            gap: 40px;
        }

        .gallery__title {
            display: block;
            padding-left: 1rem;
        }

        .gallery__text {
            display: block;
            writing-mode: horizontal-tb;
        }

        .gallery__title_icon {
            display: none;
        }
    }
</style>