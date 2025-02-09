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
        gap: 2px;
        cursor: pointer;
        font-size: clamp(1rem, 1rem + 1vh, var(--f-size-24));
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
        rotate: 90deg;
    }

</style>