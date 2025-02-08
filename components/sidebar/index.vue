<template>
    <div class="sidebar">
        <SidebarButton :menuButtonAfter="true" value="Парки" />
        <SidebarButton :menuButtonAfter="true" value="Праздники" />
        <SidebarButton :menuButtonAfter="true" value="Рестораны" />
        <SidebarButton :menuButtonAfter="false" value="Афиша" />
    </div>
</template>

<style scoped>
    .sidebar {
        position: fixed;
        width: 64px;
        height: 100%;
        padding-top: 100px;
        display: grid;
        justify-items: center;
        align-items: start;
        grid-auto-rows: 75px;
        gap: 113px;
        background-color: var(--bg-accent-color);        
    }
</style>