<script setup>
    const { menuButtonBefore, menuButtonAfter, value } = defineProps(['menuButtonBefore', 'menuButtonAfter', 'value']);
</script>

<template>
    <button class="sidebar-button">
        <SvgoPlus v-if="menuButtonBefore" :fontControlled="false" width="16" height="16" />
        <span class="value">{{ value }}</span>
        <SvgoArrow v-if="menuButtonAfter" class="icon-no-fill" />
    </button>
</template>

<style scoped>
    .sidebar-button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        font-size: var(--f-size-24);
        color: var(--clr-white);

        transform: rotate(-90deg);
    }
 
    .value {
        font-family: 'druk_cyr';
        letter-spacing: 1.7px;
        text-transform: uppercase;
        white-space: nowrap;
    }
    .sidebar-button svg {
        /* width: 24px;
        height: 24px; */
        rotate: 90deg;
    }

    .icon-no-fill * {
        fill: none;
    }
</style>