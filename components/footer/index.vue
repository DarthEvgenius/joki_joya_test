<script setup></script>

<template>
    <footer class="footer">
        <div class="footer__logo">
            <NuxtImg 
                src="/footer-logo.png"
                format="webp" 
                width="102"
                height="64"
            />
        </div>
        <div class="footer__contacts">
            <p>
                <a href="tel:+12345667" class="font-green font-druk-wide font-size-s">+7 (495) 181 22 77</a>
            </p>
            <p class="font-white font-druk-wide font-size-s">(МОСКВА, ТВЕРЬ)</p>
            <p>
                <a href="tel:+12334567" class="font-green font-druk-wide font-size-s">+7 (812) 635 22 77</a>
            </p>
            <p class="font-white font-druk-wide font-size-s">(САНКТ-ПЕТЕРБУРГ)</p>
        </div>
        <div class="footer__socials">
            <a href="#"><SvgoVk /></a>
            <a href="#"><SvgoTg /></a>
            <a href="#"><SvgoJj /><SvgoJj /></a>
        </div>
        <div class="footer__copy">
            <p>Joki Joya ©</p>
            <p>2023</p>
            <p>joki-joya.ru</p>
        </div>
        <a href="#hero" class="footer__anchor">
            <Button
                font="druk_cyr"
                color="white"
                pBlock="20px"
                pInline="52px"
            >
                Наверх
                <SvgoArrow45 class="icon-no-fill" />
            </Button>
        </a>
    </footer>
</template>

<style scoped>
    .footer {
        position: relative;
        padding-block: 3rem;
        padding-inline: 7vw;
        width: 100vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--clr-pink);
        z-index: var(--z-index-content);
    }

    .footer__socials {
        display: flex;
        gap: 5vw;
    }

    .footer__socials a {
        display: inline-block;
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--bg-primary-color);
        color: var(--clr-blue);
        font-size: var(--f-size-22);
        border-radius: 50%;
        transition: scale 300ms;
    }

    .footer__socials a:hover {
        scale: 1.1;
    }

    .footer__copy {
        font-family: 'NunitoSans_Black';
        font-size: var(--f-size-13);
        color: var(--clr-white);
    }

    .footer__copy p {
        text-align: right;
    }

    @media (max-width: 992px) {
        .footer {
            flex-wrap: wrap;
            row-gap: 2rem;
        }

        .footer__socials {
            order: -1;
            flex: 1 1 100%;
            justify-content: space-evenly;
        }
    }

    @media (max-width: 540px) {
        .footer {
            flex-direction: column;
        }
        
        .footer__socials {
            order: 0;
            flex: 1 1 100%;
            justify-content: space-evenly;
        }

        .footer__anchor {
            order: -1;
        }
    }
</style>