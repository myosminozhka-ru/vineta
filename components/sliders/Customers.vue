<template>
    <div class="customers glide" v-if="fivethData.filter(item => item.PREVIEW_PICTURE).length">
    <!-- <pre>{{ fivethData.filter(item => item.PREVIEW_PICTURE) }}</pre> -->
        <client-only>
            <div class="customers__top">
                <osm-h2 class="customers__title">{{ $t('sections.fiveth.customers.title') }}</osm-h2>
                <osm-button class="customers__button" v-if="hasButton" link="partners">{{ $t('buttons.more') }}</osm-button>
            </div>
            <div class="customers__slider-in">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <li v-for="(item, key) in fivethData.filter(item => item.PREVIEW_PICTURE)" :key="key" class="customers__slide glide__slide">
                            <img :src="$vareibles.remote + item.PREVIEW_PICTURE" :alt="item.name">
                        </li>
                    </ul>
                </div>
                <div class="customers__arrows" data-glide-el="controls">
                    <button class="customers__arrow customers__arrow--left" data-glide-dir="<">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none">
                            <rect width="40" height="40"/>
                            <path d="M24 12L17 20L24 28" stroke="white" stroke-width="2"/>
                        </svg>
                    </button>
                    <button class="customers__arrow customers__arrow--right" data-glide-dir=">">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none">
                            <rect width="40" height="40"/>
                            <path d="M24 12L17 20L24 28" stroke="white" stroke-width="2"/>
                        </svg>
                    </button>
                </div>
            </div>
        </client-only>
    </div>
</template>

<script>
import Glide from '@glidejs/glide';
import { mapGetters } from 'vuex';
export default {
    name: "CustomersSlider",
    props: {
        hasButton: {
            type: Boolean,
            default: false
        }
    },
    components: {
        OsmH2: () => import('~/components/global/OsmH2.vue'),
    },
    data: () => ({
        slider: null
    }),
    computed: {
        ...mapGetters(['getMainMore']),
        fivethData() {
            return this.getMainMore.client;
        }
    },
    beforeDestroy() {
        if (this.slider) {
            this.slider.destroy();
        }
    },
    mounted() {
        // console.log('beforeMount');
        setTimeout(() => {
            if (!document.querySelector('.customers.glide')) return;
            this.slider = new Glide('.customers.glide', {
                perView: 6,
                type: 'carousel',
                breakpoints: {
                    1280: {
                        perView: 3
                    },
                    840: {
                        perView: 2
                    },
                    600: {
                        perView: 1
                    }
                }
            }).mount();
        }, 500)
    }
}
</script>

<style lang="scss" scoped>
.customers {
    &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: rem(30);
    }
    &__button {
        @media all and (max-width: 840px) {
            display: none;
        }
    }
    &__slider-in {
        position: relative;
        @media all and (max-width: 840px) {
            padding-right: 102px;
            .glide__track {
                overflow: visible;
            }
        }
    }
    &__slide {
        padding: rem(20);
        background: #D7DCE1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: rem(114);
        @media all and (max-width: 1280px) {
            height: 114px;
            padding: 20px;
        }
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
    &__arrows {}
    &__arrow {
        position: absolute;
        width: rem(40);
        top: 50%;
        border: none;
        background: none;
        padding: 0;
        transform: translateY(-50%);
        cursor: pointer;
        font-size: 0;
        @media all and (max-width: 1280px) {
            width: 40px;
        }
        &--left {
            left: rem(-20);
            @media all and (max-width: 1280px) {
                left: -20px;
            }
        }
        &--right {
            right: rem(-20);
            @media all and (max-width: 1280px) {
                right: -20px;
            }
            transform: translateY(-50%) rotate(180deg);
        }
        svg rect {
            fill: #FF004D;
            transition: all .3s ease;
        }
        &:hover {
            svg rect {
                fill: #DF0043;
            }
        }
        &:active {
            svg rect {
                fill: #A70032;
            }
        }
    }
}
</style>