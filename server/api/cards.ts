export default defineEventHandler((event) => {
    const data = [
        {
            id: 1,
            text: `
                <p class="font-size-xxl font-druk">26</p>
                <p class="font-size-s font-druk-wide">парков</p>
            `,
            btnText: 'посмотреть адреса',
            color: 'black',
            bgColor: 'green',
            imgUrl: '/castle.png',
        },
    ]

    return {
        data
    }
});

// export default defineEventHandler((event) => {
//     return {
//       hello: 'world'
//     }
//   })