<template>
    <div class="content">
        <article class="content__article parks">
            <div class="content__header">
                <h2>наши парки:</h2>
                <NuxtImg src="/diamond.png" format="webp" loading="lazy" alt="diamond" width="128" height="128" class="content__img" />
            </div>

            <div class="content__text">
                <MainStrip class="content__strip" />
                
                <p><b>Первый парк развлечений Joki Joya</b> открылся в августе 2014 года в Санкт-Петербурге. Сегодня бренд Joki Joya является лидером индустрии детских развлечений в России и состоит из 28 парков в 3 городах: 17 в Москве и Московской области, 10 в Санкт-Петербурге и 1 в Твери.
                На территории каждого парка размещено более 30 аттракционов в игровой зоне, семейный ресторан с детским и взрослым меню, индивидуальные банкетные комнаты для проведения праздников.</p>
                <p>Площадь парков от 2000 до 6000 квадратных метров в зависимости от ТРЦ.</p>
                <p>Также Joki Joya занимается организацией праздников «под ключ»: детские дни рождения, выпускные детского сада или школы, Новый Год, корпоративные праздники.</p>

                <Button 
                    fong="druk_cyr"
                    color="black"
                    letterSpacing
                    pInline="12px"
                    class="content__btn">
                        посмотреть адреса
                        <SvgoArrowLong />
                </Button>
            </div>
        </article>

        <article class="content__article holidays">
            <div class="content__header">
                <h2>праздники у нас:</h2>
                <NuxtImg src="/flower.png" format="webp" loading="lazy" alt="diamond" width="128" height="128" class="content__img" />
            </div>

            <div class="content__text">
                <MainStrip class="content__strip" />
                
                <p>Праздник можно отметить в индивидуальной банкетной комнате, расписанной профессиональными художниками вручную под тематику популярных фильмов или мультфильмов, либо в семейном ресторане.</p>
                <p>Что мы имеем в виду, когда говорим про организацию праздников «под ключ»? За каждым праздником мы закрепляем личного банкетного менеджера, который будет курировать ваш праздник.</p>
                <p>В нашей базе более 300 аниматоров, шоу-программ и квестов, которые помогут создать особую атмосферу праздника. Украсят ваш праздник профессиональные аквагримеры, лучшие торты на заказ, а также фото — и видеосъемка.</p>
                <p><b>Joki Joya</b> - это целая история про детей и их родителей. История, которая помогает семьям объединяться, окунаться с головой в детство и проводить время вместе, забывая о повседневной суёте.</p>
            </div>
        </article>
    </div>
</template>

<style scoped>
    .content {
        display: grid;
        gap: 7.875rem;
    }

    .content__article {
        display: grid;
        grid-auto-flow: column;
        gap: 2rem;
    }

    .content__header {
        padding-block: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .content__header h2 {
        max-width: 7ch;
        font-family: 'druk_wide';
        font-size: var(--f-size-13);
    }

    .content__img {
        width: clamp(64px, 10vw, 128px);
    }

    .content__text {
        columns:  2;
    }

    .content__text p {
        margin-bottom: 2rem;
        max-width: 40ch;
        font-family: 'NunitoSans_Regular';
        font-size: var(--f-size-16);
    }

    .content__text p:last-child {
        margin-bottom: 0;
    }

    .content__strip {
        display: none;
    }

    @media (max-width: 1024px) {
        .content__article {
            grid-auto-flow: row;
        }

        .content__header {
            flex-direction: row-reverse;
            justify-content: space-around;
        }
    }

    @media (max-width: 600px) {
        .content {
            gap: 4rem;
        }
        
        .content__header {
            display: grid;
            grid-auto-flow: column;
            grid-template-columns: 2.5rem 1fr;
            gap: 2.5rem;
            justify-content: space-between;
        }

        .content__header h2 {
            grid-column: 2/3;

        }

        .content__text {
            width: 100%;
            columns:  1;
            display: grid;
            grid-template-columns: 2.5rem 1fr;
            gap: 2.5rem;
        }

        .content__text p {
            grid-column: 2/3;
            margin-bottom: 0;
        }

        .content__strip {
            display: block;
            background-size: cover;
            grid-row: 1/5;
        }

        .content__btn {
            grid-column: 2/3;
        }
    }
</style>