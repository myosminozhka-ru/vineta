<template>
  <section class="section section__item section__item--sixth catalog hide_on_mobile">
    <div class="catalog__wrap">
      <div class="catalog__left">
        <osm-h1 class="catalog__title">{{ this.$t('buttons.catalog') }}</osm-h1>
        <!-- <pre style="font-size: 15rem">{{ getCatalog }}</pre> -->
        <div class="catalog__points">
          <div class="catalog__point" v-for="(point, key) in getCatalog" :key="point.index" @click="catalog.slider.go(`=${key}`)">
            <div class="icon">
              <img :src="$vareibles.remote + point.PICTURE" width="100%" alt="" />
            </div>
            <div class="text">{{ point.NAME }}</div>
          </div>
        </div>
      </div>
      <div class="catalog__right catalog__slider glide">
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides">
            <nuxt-link
              :to="
                localePath({
                  name: 'catalog-catalogId',
                  params: { catalogId: item.CODE },
                })
              "
              class="catalog__item"
              v-for="item in getCatalog"
              :key="item.index"
            >
              <div class="catalog__item_in">
                <div class="image">
                  <img :src="$vareibles.remote + item.DETAIL_PICTURE" width="100%" alt="" />
                </div>
                <span class="text">{{ item.NAME }}</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Glide from '@glidejs/glide'
import { mapGetters } from 'vuex'
export default {
  name: 'OsmSixthSection',
  components: {
    OsmH1: () => import('~/components/global/OsmH1.vue'),
  },
  computed: {
    ...mapGetters(['getCatalog']),
  },
  data: () => ({
    catalog: {
      slider: new Glide('.catalog__slider.glide', {
        gap: 0,
      }),
      items: [
        {
          icon: require('~/assets/img/catalog/catalog_icon1.svg'),
          text: 'Теплообменное оборудование',
        },
        {
          icon: require('~/assets/img/catalog/catalog_icon1.svg'),
          text: 'Оборудование систем водоснабжения',
        },
        {
          icon: require('~/assets/img/catalog/catalog_icon1.svg'),
          text: 'Оборудование для подготовки топлива',
        },
        {
          icon: require('~/assets/img/catalog/catalog_icon1.svg'),
          text: 'Оборудование водоочистки и водоподготовки',
        },
        {
          icon: require('~/assets/img/catalog/catalog_icon1.svg'),
          text: 'Фильтры различных типов',
        },
        {
          icon: require('~/assets/img/catalog/catalog_icon1.svg'),
          text: 'Оборудование очистки газов и воздухаы',
        },
        {
          icon: require('~/assets/img/catalog/catalog_icon1.svg'),
          text: 'Судовые дизельные двигатели',
        },
        {
          icon: require('~/assets/img/catalog/catalog_icon1.svg'),
          text: 'Судовая арматура',
        },
        {
          icon: require('~/assets/img/catalog/catalog_icon1.svg'),
          text: 'Прочее оборудование',
        },
      ],
    },
  }),
  mounted() {
    this.catalog.slider.mount()
  },
}
</script>

<style lang="scss" scoped>
.catalog {
  display: flex;
  align-items: center;
  background: #ffffff;
  &__wrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: rem(120) rem(240) rem(0) rem(108);
    @media all and (max-width: 1440px) {
      padding-right: 94px;
    }
    @media all and (max-width: 1440px) and (min-width: 1281px) and (max-height: 900px) and (min-height: 670px) {
      padding-top: 81px;
    }
    @media all and (max-width: 1280px) {
      padding: 20px;
      align-items: flex-end;
    }
  }
  &__left {
    width: rem(657);
    padding-right: rem(100);
    box-sizing: border-box;
    @media all and (max-width: 1440px) {
      width: 578px;
    }
    @media all and (max-width: 1280px) {
      width: 300px;
      padding-right: 0;
    }
  }
  &__right {
    width: calc(100% - #{rem(657)});
    @media all and (max-width: 1440px) {
      width: calc(100% - 578px);
    }
    @media all and (max-width: 1280px) {
      width: calc(100% - 300px);
    }
  }
  &__title {
    font-size: rem(40);
    margin-bottom: rem(30);
    @media all and (max-width: 1280px) {
      margin-bottom: 30px;
      font-size: 30px;
    }
  }
  &__point {
    display: flex;
    align-items: center;
    cursor: pointer;
    &:not(:last-child) {
      margin-bottom: rem(30);
    }
    .icon {
      width: rem(40);
      margin-right: rem(20);
      @media all and (max-width: 1280px) {
        width: 30px;
      }
    }
    .text {
      width: calc(100% - #{rem(60)});
      font-weight: 400;
      font-size: rem(24);
      line-height: 140%;
      color: #555f76;
      position: relative;
      @media all and (max-width: 1280px) {
        font-size: 18px;
        width: calc(100% - #{rem(50)});
      }
      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 100%;
        bottom: rem(-5);
        height: 1px;
        background: #555f76;
        transition: all 0.3s ease;
      }
    }
    &:hover .text:after {
      right: 0;
    }
  }
  &__item {
    text-decoration: none;
  }
  &__item_in {
    position: relative;
    // background: #F2F2F2 url('~assets/img/catalog/catalog_bg.svg') 0 50% / auto 150% no-repeat;
    background-color: #f2f2f2;
    background-image: url('~assets/img/catalog/catalog_bg.svg');
    background-position: 0 50%;
    background-size: auto 150%;
    background-repeat: repeat;
    transition: 0s background-position 1s ease;
    height: 100%;
    border-bottom: rem(9) solid #2e5599;
    box-sizing: border-box;
    padding-left: rem(250);
    padding-bottom: rem(40);
    padding-right: rem(30);
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    @media all and (max-width: 1440px) {
      padding-left: 160px;
    }
    @media all and (max-width: 1366px) {
      padding-left: 30px;
    }
    @media all and (max-width: 1280px) {
      padding: 266px 30px 30px 100px;
      height: auto;
    }
  }
  &__item.glide__slide--active &__item_in {
    background-position: -850px 50%;
    transition: background-position 1s ease;
  }
  &__item {
    padding: rem(73) 0 0 rem(108);
    height: rem(435);
    box-sizing: border-box;
    overflow: hidden;
    @media all and (max-width: 1280px) {
      padding: 126px 0 0 167px;
      height: auto;
    }
    .image {
      position: absolute;
      top: rem(-73);
      left: rem(-108);
      width: rem(358);
      @media all and (max-width: 1280px) {
        width: 510px;
        height: 510px;
        left: -219px;
        top: -126px;
        padding: 60px;
      }
    }
    .text {
      text-decoration: none;
      text-align: right;
      font-style: normal;
      font-weight: 600;
      font-size: rem(40);
      line-height: 140%;
      text-align: right;
      text-transform: uppercase;
      color: #2e5599;
      max-width: 100%;
      white-space: initial;
      @media all and (max-width: 1440px) {
        font-size: 30px;
      }
    }
  }
}
</style>
