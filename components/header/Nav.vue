<script setup>
    const isMenuActive = ref(false);

    const toggleMenu = () => {
        isMenuActive.value = !isMenuActive.value;
    };
</script>

<template>
    <nav 
        class="nav" 
        :class="{ active: isMenuActive }"
        @click="toggleMenu" 
    >
        <div class="nav__lines">
            <span class="nav__line"></span>
            <span class="nav__line"></span>
            <span class="nav__line"></span>
        </div>
        <p class="nav__text">меню</p>
    </nav>
</template>

<style scoped>
.nav {
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: end;
    gap: 4px;
    color: var(--clr-blue);
    cursor: pointer;
}

.nav__text {
    text-transform: uppercase;
    font-family: 'montserrat';
    font-size: 11px;
}

.nav__lines {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 6px;
}

.nav__line {
    width: 32px;
    height: 4px;
    background-color: var(--clr-blue);
    transition: transform 0.3s;
}

.nav__line:nth-child(2) {
    width: 22px;
}

.active {
    .nav__line:nth-child(1),
    .nav__line:nth-child(3) {
        transform: 
            translateX(-5px)
            scaleX(0.5);
    }
    .nav__line:nth-child(2) {
        transform: 
            translateX(5px)
            scaleX(0.7);
    }
} 

</style>