<template>
    <div>
        <span>Test Font</span>
        <span>Test Font</span>
        <span>Test Font</span>
        <span>Test Font</span>
        <span>Test Font</span>
    </div>
</template>

<style scoped>
div {
    display: flex;
    gap: 1rem;
    font-size: 2rem;
}
    span:nth-of-type(1) {
        color: red;
        font-family: 'druk_cyr';
    }
    span:nth-of-type(2) {
        color: green;
        font-family: 'druk_wide';
    }
    span:nth-of-type(3) {
        color: brown;
        font-family: 'montserrat';
    }
    span:nth-of-type(4) {
        color: blue;
        font-family: 'NunitoSans_Black';
    }
    span:nth-of-type(5) {
        color: black;
        font-family: 'NunitoSans_Regular';
    }
</style>