<template>
    <div>
        <span>Test Font</span>
        <span>Test Font</span>
        <Button 
            pInline="32px" 
            color="white"
            :bd="false"
            bg="pink"
        >
            Купить билеты
        </Button>
        <SvgoLocation class="contacts" />
        <SvgoPhone class="contacts" />
    </div>
</template>

<style scoped>
    .contacts {
        color: #5834A4;
    }

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