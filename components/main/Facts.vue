<script setup>
// const { data } =  await useFetch('/api/cards', {
//     transform: (cards) => cards.data
// });
// const cards = toRaw(data.value);

const cards = [
    {
        id: 1,
        text: `
            <p class="font-size-3xl font-druk">26</p>
            <p class="font-size-s font-druk-wide">парков</p>
        `,
        btnText: 'посмотреть адреса',
        color: 'black',
        bgColor: 'green',
        imgUrl: '/castle.png',
    },
    {
        id: 2,
        text: `
            <p class="font-size-3xl font-druk">800+</p>
            <p class="font-size-s font-druk-wide">аттракционов</p>
        `,
        btnText: 'во всех парках',
        color: 'white',
        bgColor: 'blue',
        imgUrl: '/castle.png',
    },
    {
        id: 3,
        text: `
            <p class="font-size-3xl font-druk">200+</p>
            <p class="font-size-s font-druk-wide">банкетных<br/>комнат</p>
        `,
        btnText: 'во всех парках',
        color: 'white',
        bgColor: 'orange',
        imgUrl: '/castle.png',
    },
    {
        id: 4,
        text: `
            <p class="font-size-3xl font-druk">Семенйные</p>
            <p class="font-size-s font-druk-wide">рестораны</p>
        `,
        btnText: 'во всех парках',
        color: 'white',
        bgColor: 'pink',
        imgUrl: '/castle.png',
    },
    {
        id: 5,
        text: `
            <p class="font-size-3xl font-druk">11</p>
            <p class="font-size-s font-druk-wide">пермиальных<br/>ресторанов<br/> Family Villa</p>
        `,
        btnText: 'подробнее',
        color: 'white',
        bgColor: 'black',
        imgUrl: '/castle.png',
    },
    {
        id: 6,
        text: `
            <p class="font-size-s font-druk-wide">бесплатные</p>
            <p class="font-size-3xl font-druk">праздники</p>
            <p class="font-size-s font-druk-wide">и мастер-классы</p>
        `,
        btnText: 'купить билеты',
        color: 'white',
        bgColor: 'purple-light',
        imgUrl: '/castle.png',
    },
    {
        id: 7,
        text: `
            <p class="font-size-3xl font-druk">300+</p>
            <p class="font-size-s font-druk-wide">аниматоров<br/>квестов<br/>и шоу-программ</p>
        `,
        btnText: 'подробнее',
        color: 'black',
        bgColor: 'green',
        imgUrl: '/castle.png',
    },
]

</script>

<template>
    <section class="facts">
        <h2 class="facts__title font-druk-wide font-size-xs">
            JJ \\\ Facts
        </h2>
        <MainCard v-for="card in cards" :key="card.id" :card="card" />
    </section>
</template>

<style scoped>
.facts {
    position: relative;
    padding-bottom: 15vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 240px;
}

.facts__title {
    position: absolute;
    left: -2rem;
    top: 0;
    writing-mode: sideways-lr;
}

@media (max-width: 600px) {
    .facts__title {
        display: none;
    }
}
</style>