<template>
    <section class="about">
        <MainStrip class="strip" />
        <MainContent class="content" />
    </section>
</template>

<style scoped>
    .about {
        padding: 1rem;
        display: grid;
        grid-template-columns: clamp(1.5rem, 5vw, 4.5rem) 1fr;
        gap: 4vw;
    }

    @media (max-width: 600px) {
        .about {
            padding: 1rem;
            grid-template-columns: 1fr;
        }
    }
</style>