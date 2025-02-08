<script setup>
const { data: cards } =  await useFetch('/api/cards', {
    transform: (cards) => cards.data
});

console.log('cards', toRaw(cards.value));
</script>

<template>
    <section class="facts">
        <!-- <MainCard :card="card" /> -->
        <!-- <Card v-for="card in cards" :key="card.id" :card="card" /> -->
    </section>
</template>

<style scoped>
.facts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 240px;
}
</style>