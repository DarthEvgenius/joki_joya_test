<script setup>
    const props = defineProps({
        font: {
            // default: 'druk_cyr',
            type: String,
        },
        bd: {
            default: true,
            type: Boolean,
        },
        bdRad: {
            // default: '30px',
            type: String,
        },
        bg: {
            // default: 'transparent',
            type: String,
        },
        color: {
            // default: 'black',
            type: String,
        },
        pInline: {
            // default: '17px',
            type: String,
        }
    });

    const dynamicStyle = computed(() => ({
        paddingInline: props.pInline || '17px',
        color: props.color ? `var(--clr-${props.color})` : 'var(--clr-black)' ,
        backgroundColor: props.bg ? `var(--clr-${props.bg})` : 'transparent',
        border: props.bd ? `2px solid var(--clr-${props.color})` : 'none',
        borderRadius: props.bdRad || '30px',
        fontFamily: props.font || 'druk_cyr',
    }))
</script>

<template>
    <button class="btn" :style="dynamicStyle">
        <slot />
    </button>
</template>

<style scoped>
    .btn {
        padding-block: 11px;
        height: fit-content;
        width: fit-content;
        font-size: 1.375rem;
        line-height: 24px;
        text-transform: uppercase;
        letter-spacing: 1px;
        cursor: pointer;
        transition: box-shadow 200ms;

        &:hover {
            box-shadow: 0 0 4px var(--clr-black);
        }
    }
</style>