<template>
    <div class="links">
        <div class="links__section">
            <Button 
            class="xl-only"
            pInline="16px"
            pBlock="8px"
            color="purple-dark"
            :iconHover="true">
                <SvgoLocation />
                Москва
            </Button>

            <Button 
                class="lm-only"
                pInline="16px"
                pBlock="8px"
                font="druk_wide"
                :letterSpacing="false"
                color="purple-dark"
                :iconHover="true">
                    <SvgoPhone />
                    <a 
                        href="tel:+78126352277"
                        aria-label="Позвонить по телефону"
                        class="font-size-s no-wrap">
                        +7 (812) 635 22 77
                    </a>
            </Button>
        </div>
        
        <div class="links__section">
            <Button 
            pInline="32px"
            pBlock="12px"
            color="white"
            :bd="false"
            bg="pink">
                Купить билеты
            </Button>
            
            <Button 
                class="l-only"
                pInline="32px" 
                pBlock="12px"
                :bd="false"
                bg="green">
                    Заказать праздник
            </Button>
        </div>
    </div>
</template>

<style scoped>
.links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    font-size: 2rem;
}

.links__section {
    display: flex;
    gap: 1rem;
}

.links__btn {
    margin-right: 100px;
}

.margin-right-100 {
    margin-right: auto;
}


@media (max-width: 958px) {
    .links {
        justify-content: center;
    }
}
</style>