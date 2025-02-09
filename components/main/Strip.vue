<template>
    <div class="strip"></div>
</template>

<style scoped>
    .strip {
        background-image: url('/strip.png');
        background-size: cover;
        background-repeat: repeat-y;
    }

    @media (max-width: 1024px) {
        .strip {
            background-size: contain;
        }
    }
</style>