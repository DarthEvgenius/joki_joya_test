<script setup>
    const props = defineProps({
        font: {
            type: String,
        },
        letterSpacing: {
            type: Boolean,
            default: true,
        },
        bd: {
            default: true,
            type: Boolean,
        },
        bdRad: {
            type: String,
        },
        bg: {
            type: String,
        },
        color: {
            type: String,
        },
        pInline: {
            type: String,
        },
        pBlock: {
            type: String,
        },
        iconHover: {
            type: Boolean,
        },
    });

    const dynamicStyle = computed(() => ({
        paddingInline: props.pInline || '17px',
        paddingBlock: props.pBlock || '11px',
        color: props.color ? `var(--clr-${props.color})` : 'var(--clr-black)' ,
        backgroundColor: props.bg ? `var(--clr-${props.bg})` : 'transparent',
        border: props.bd ? `2px solid var(--clr-${props.color})` : 'none',
        borderRadius: props.bdRad || '30px',
        fontFamily: props.font || 'druk_cyr',
        letterSpacing: props.letterSpacing ? '1px' : '0',
    }));
</script>


<template>
    <button class="btn no-wrap" :class="{'icon-hover': iconHover}" :style="dynamicStyle">
        <slot />
    </button>
</template>

<style scoped>
.btn {
  height: fit-content;
  width: fit-content;
  display: flex;        
  align-items: center;
  gap: 0.625rem;
  font-size: 1.375rem;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: scale 300ms;

  &:not(.icon-hover):hover {
      scale: 1.05;
  }
}
</style>