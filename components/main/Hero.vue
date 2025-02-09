<template>
    <section class="hero" id="hero">
        <NuxtImg 
            src="/hero.png" 
            format="webp" 
            preload 
            width="1216" 
            height="616"
            fit="cover" 
            alt="Каждый день праздник"
            class="hero__image"
        />

        <div class="wrapper hero__wrapper">
            <div class="hero__title">
                <h1 class="hero__text">
                    О &nbsp;<p class="hero__name">
                        <span class="hero__name--main">joki joya</span> 
                        <span class="hero__name--shadow">joki joya</span></p>
                </h1>
                <div class="hero__icons">
                    <SvgoStar class="hero__icon" />
                    <SvgoStar class="hero__icon" />
                    <SvgoStar class="hero__icon" />
                </div>
            </div>
            
            <NuxtImg src="/welcome.png" format="webp" preload width="144" height="144" alt="Каждый день праздник" />

            
        </div>
    </section>
</template>

<style scoped>
.hero {
    display: grid;
    justify-content: center;
    gap: 40px;
}

.hero__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: start;
}

.hero__image {
    height: 100%;
    border-radius: 32px;
}

.hero__title {
    display: grid;
    grid-auto-flow: column;
    gap: 2vw;
}

.hero__text {
    display: flex;
    font-family: 'druk_wide';
    font-size: clamp(2rem, 1rem + 3vw, var(--f-size-73));
    text-transform: uppercase;
}

.hero__name {
    color: var(--clr-blue);
    text-wrap: nowrap;
    position: relative;
    z-index: var(--z-index-content);
}

.hero__name--main {
    position: relative;
    z-index: var(--z-index-content);
}

.hero__name--shadow {
    position: absolute;
    left: 8px;
    top: 8px;
    color: var(--clr-green);
    -webkit-text-stroke: 3px var(--clr-green);
    -webkit-text-fill-color: transparent;
    z-index: var(--z-index-background);
}

.hero__icons {
    align-self: center;
    display: flex;
    gap: 1.18rem;
    color: var(--clr-blue);
    font-size: clamp(24px, 1rem + 3vw, 55px);
}

@media (max-width: 958px) {
    .hero__image {
        max-width: 80vw;
    }
    
    .hero__icon:nth-of-type(3) {
        display: none;
    }
}

@media (max-width: 840px) {
    .hero__icon:nth-of-type(2) {
        display: none;
    }
}

@media (max-width: 768px) {
    .hero__image {
        max-width: 90vw;
        min-height: 616px;
    }
}

@media (max-width: 720px) {
    .hero__wrapper {
        display: grid;
        gap: 3.375rem;
    }
}

</style>