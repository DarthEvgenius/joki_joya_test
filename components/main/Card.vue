<script setup>
    const { card } = defineProps({
        card: {
            type: Object,
            required: true,
        },
    });

    const dynamicStyle = computed(() => ({
        'backgroundColor': `var(--clr-${card.bgColor})`,
    }));
    
</script>

<template>
    <div class="card" :style="dynamicStyle">
        <div v-html="card.text" class="card__text"></div>

        <Button 
            :color="card.color">
            {{ card.btnText }}
            <SvgoArrowLong />
        </Button>

        <NuxtImg :src="card.imgUrl" class="card__image" loading="lazy" />

        <div class="crosses">
            <SvgoCross class="cross" />
            <SvgoCross class="cross" />
            <SvgoCross class="cross" />
            <SvgoCross class="cross" />
        </div>
    </div>
</template>

<style scoped>
    .card {
        position: relative;
        padding-inline: 40px;
        padding-top: 32px;
        padding-bottom: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card::after {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url('texture.png');
        opacity: 0.25;
    }

    .card__text {
        line-height: 1;
    }

    .card__image {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 1;
    }

    .crosses {
        position: absolute;
        inset: 0;
    }

    .crosses .cross {
        position: absolute;
        z-index: 1;
    }

    .crosses .cross:nth-child(1) {
        top: 1rem;
        left: 1rem;
    }
    .crosses .cross:nth-child(2) {
        top: 1rem;
        right: 1rem;
    }
    .crosses .cross:nth-child(3) {
        bottom: 1rem;
        left: 1rem;
    }
    .crosses .cross:nth-child(4) {
        bottom: 1rem;
        right: 1rem;
    }
</style>