<template>
    <section class="hero">
        <NuxtImg 
            src="/hero.png" 
            format="webp" 
            preload 
            width="1216" 
            height="616" 
            alt="Каждый день праздник"
            class="hero__image" />

        <div class="wrapper hero__wrapper">
            <div class="hero__title">
                <h1 class="hero__text">
                    О &nbsp;<p class="hero__name">
                        <span class="hero__name--main">joki joya</span> 
                        <span class="hero__name--shadow">joki joya</span></p>
                </h1>
                <div class="hero__icons">
                    <SvgoStar />
                    <SvgoStar />
                    <SvgoStar />
                </div>
            </div>
            
            <NuxtImg src="/welcome.png" format="webp" preload width="144" height="144" alt="Каждый день праздник" />

            
        </div>
    </section>
</template>

<style scoped>
.hero {
    display: grid;
    gap: 40px;
}

.hero__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: start;
}

.hero__image {
    border-radius: 32px;
}

.hero__title {
    display: grid;
    grid-auto-flow: column;
    gap: 1vw;
}

.hero__text {
    display: flex;
    font-family: 'druk_wide';
    font-size: var(--f-size-xxl);
    text-transform: uppercase;
}

.hero__name {
    color: var(--clr-blue);
    text-wrap: nowrap;
    position: relative;
    z-index: 1;
}

.hero__name--main {
    position: relative;
    z-index: 1;
}

.hero__name--shadow {
    position: absolute;
    left: 8px;
    top: 8px;
    color: var(--clr-green);
    -webkit-text-stroke: 3px var(--clr-green);
    -webkit-text-fill-color: transparent;
    z-index: 0;
}

.hero__icons {
    align-self: center;
    display: flex;
    gap: 8px;
    color: var(--clr-blue);
    font-size: 55px;
}

</style>