<template>
    <div class="sidebar">
        <SidebarButton class="sidebar__item" :menuButtonAfter="true" value="Парки" />
        <SidebarButton class="sidebar__item" :menuButtonAfter="true" value="Праздники" />
        <SidebarButton class="sidebar__item" :menuButtonAfter="true" value="Рестораны" />
        <SidebarButton class="sidebar__item" :menuButtonAfter="false" value="Афиша" />
    </div>
</template>

<style scoped>
    .sidebar {
        position: fixed;
        width: 64px;
        height: 100%;
        padding-top: 80px;
        /* display: grid;
        justify-items: center;
        align-items: start; */
        /* grid-auto-rows: 75px; */
        /* gap: 80px; */
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
        flex-direction: column;
        background-color: var(--bg-accent-color);        
    }

    .sidebar__item {
        flex: 1;
        /* transform: translateX(10px); */
    }

    @media (max-width: 768px) {
        .sidebar {
            display: none;
        }
    }
</style>