<template>
  <div class="catalog__header">
    <h1 class="catalog__header_left">{{ title }}</h1>
    <div class="catalog__header_right hide_on_mobile">
      <!-- <pre style="font-size: 15rem">{{ getDownloads }}</pre> -->
      <a href="https://vinetaboat.ru/" target="_blank" class="catalog__header_btn">
        <div class="text">{{ $t('buttons.boats') }}</div>
        <div class="icon">
          <svg id="a" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 72 72">
            <defs>
              <component :is="'style'">.b { fill: none; stroke: #fff; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2.7px; }</component>
            </defs>
            <polygon class="b" points="52.32 48.01 10.37 48.01 7.26 33.98 64.74 33.98 52.32 48.01" />
            <path class="b" d="M35.77,18.74H12.12v15.24H52.59l-11.07-12.64c-1.45-1.66-3.55-2.61-5.75-2.61Z" />
            <line class="b" x1="18.94" y1="26.36" x2="12.12" y2="26.36" />
            <line class="b" x1="28.26" y1="26.97" x2="46.45" y2="26.97" />
            <line class="b" x1="17.92" y1="8.89" x2="17.92" y2="18.74" />
            <line class="b" x1="26.02" y1="12.67" x2="26.02" y2="18.74" />
            <path class="b" d="M64.55,60.06c-8.2,0-7.84-4.92-14.16-4.92-6.32,0-5.96,4.92-14.16,4.92h0c-8.2,0-7.84-4.92-14.16-4.92-6.32,0-5.96,4.92-14.16,4.92" />
          </svg>
        </div>
      </a>
      <template v-if="getDownloads['katalog-produktsii']">
        <a v-if="'PROPERIES' in getDownloads['katalog-produktsii']" :href="getDownloads['katalog-produktsii'].PROPERIES[0].VALUE.SRC" target="_blank" download="catalogue_Vineta" class="catalog__header_link">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 15 21" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.33396 17.2091L6.33396 0H8.18582L8.18581 17.2091L12.4977 12.8972C12.8593 12.5356 13.4456 12.5356 13.8072 12.8972C14.1688 13.2588 14.1688 13.845 13.8072 14.2066L7.91462 20.0992C7.55302 20.4608 6.96676 20.4608 6.60516 20.0992L0.712604 14.2066C0.351007 13.845 0.351007 13.2588 0.712604 12.8972C1.0742 12.5356 1.66046 12.5356 2.02206 12.8972L6.33396 17.2091Z" fill="#FF0040" />
            </svg>
          </div>
          <div class="text">
            {{ $t('buttons.download_catalog') }}
          </div>
        </a>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'OsmCatalogTop',
  props: {
    title: {
      type: String,
      default: 'Каталог',
    },
  },
  computed: {
    ...mapGetters(['getDownloads']),
  },
}
</script>

<style lang="scss">
.catalog {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: rem(30);

    @media all and (max-width: 1280px) {
      margin-bottom: 30px;
    }

    @media all and (max-width: 640px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__header_left {
    font-style: normal;
    font-weight: 600;
    font-size: rem(40);
    line-height: 110%;
    color: #172242;
    margin: 0;

    @media all and (max-width: 1440px) {
      font-size: 40px;
    }

    @media all and (max-width: 1280px) {
      font-size: 30px;
    }
  }

  &__header_right {
    display: flex;
    align-items: center;

    @media all and (max-width: 840px) {
      flex-direction: column;
    }
  }

  &__header_btn {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 20px 10px;
    background: #ff0040;
    transition: all 0.3s ease;
    max-width: rem(203);
    // flex: 0 0 rem(203);
    text-align: center;
    padding-left: 20px;
    width: 100%;

    @media all and (max-width: 840px) {
      width: 100%;
      justify-content: center;
      margin-bottom: 20px;
    }

    &:hover {
      background: #df0043;
    }

    &:active {
      background: #a70032;
    }

    .text {
      font-style: normal;
      font-weight: 600;
      font-size: rem(20);
      line-height: 140%;
      color: #ffffff;
      white-space: nowrap;

      @media all and (max-width: 1280px) {
        font-size: 20px;
      }
    }

    .icon {
      width: rem(22);
      height: rem(22);
      margin-left: rem(22);
      font-size: 0;

      @media all and (max-width: 1280px) {
        width: 28px;
        height: 28px;
        margin-left: 20px;
      }
    }
  }

  &__header_link {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-left: rem(42);

    @media all and (max-width: 1280px) {
      margin-left: 40px;
    }

    @media all and (max-width: 840px) {
      margin-left: 0;
      margin-top: 0;
    }
    @media all and (max-width: 640px) {
      margin-top: 5px;
    }

    .text {
      font-style: normal;
      font-weight: 400;
      font-size: rem(16);
      line-height: 1;
      color: #ff0040;
      position: relative;
      white-space: nowrap;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 100%;
        bottom: rem(-5);
        height: rem(2);
        border-radius: rem(2);
        background: #ff0040;
        transition: all 0.3s ease;
      }

      @media all and (max-width: 1280px) {
        font-size: 16px;
      }
    }

    &:hover .text:after {
      right: 0;
    }

    .icon {
      width: 28rem;
      height: 28rem;
      margin-right: rem(13);
      font-size: 0;
      padding-bottom: rem(4);
      border-bottom: 2px solid #df0043;
      box-sizing: border-box;
      overflow: hidden;
      transition: all 0.3s ease;
      display: flex;
      justify-content: center;
      // svg {
      //   transform: translateY(100%);
      // }
      @media all and (max-width: 1280px) {
        width: 25px;
        margin-right: 10px;
      }
    }
    &:hover .icon svg {
      animation: flow 0.3s ease forwards;
    }
  }
}

@keyframes flow {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(110%);
  }
  50.1% {
    transform: translateY(-110%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
