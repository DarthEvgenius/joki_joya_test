<template>
    <div class="sidebar-right">
        <SidebarButton :menuButtonBefore="true" value="Парки" class="sidebar-button-right"  />
    </div>
</template>

<style scoped>
.sidebar-right {
    position: fixed;
    right: 0;
    top: 70%;
    width: 2rem;
}

.sidebar-button-right {
    color: var(--clr-black);
}

.sidebar-button-right * {
    fill: var(--clr-pink);
}
</style>