<template>
    <section class="about">
        <MainStrip class="strip" />
        <MainContent class="content" />
        <MainFacts class="facts" />
    </section>
</template>

<style scoped>
    .about {
        display: grid;
        grid-template-columns: clamp(1.5rem, 5vw, 4.5rem) 1fr;
        gap: 4vw;
    }

    .strip {
        grid-column: 1/2;
        grid-row: 1/3;
    }

    .facts {
        grid-column: 2/3;
    }

    @media (max-width: 600px) {
        .strip {
            display: none;
        }
        
        .about {
            padding: 1rem;
            grid-template-columns: 1fr;
            gap: min(30vw, 130px);
        }

        .facts {
            grid-column: 1/-1;
        }
    }
</style>