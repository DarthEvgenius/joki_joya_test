<template>
    <header class="header">
        <div class="header__wrapper">
            <HeaderLogo />

            <div class="wrapper header__wrapper--links">
                <HeaderLinks />
            </div>

            <HeaderNav />

            <HeaderProgress />
        </div>
    </header>
</template>

<style scoped>
.header {
    position: fixed;
    width: 100vw;

    overflow: hidden;
    background-color: var(--bg-transparent-color);
    z-index: 100;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, 
                var(--bg-primary-color) 0%, 
                transparent 70%
        );
        backdrop-filter: blur(5px);
        mask-size: cover;
        z-index: -1;
    }
}

.header__wrapper {
    padding-block: 0.75rem;
    padding-inline: 1rem;
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;
}

.header__wrapper--links {
    flex-shrink: 1;
}
</style>