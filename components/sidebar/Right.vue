<template>
    <div class="sidebar-right">
        <SidebarButton :menuButtonBefore="true" value="О нас" class="sidebar-button-right"  />
    </div>
</template>

<style scoped>
.sidebar-right {
    position: fixed;
    right: 1.5rem;
    top: 70%;
    width: 2rem;
}

.sidebar-button-right {
    color: var(--clr-black);
}

.sidebar-button-right * {
    fill: var(--clr-pink);
}

@media (max-width: 768px) {
    .sidebar-right {
        display: none;
    }
}
</style>