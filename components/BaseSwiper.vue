<template>
  <div class="title-block">
    <h1 class="title">Просмотренные товары</h1>
    <div class="slider-btns-block">
      <button class="slider-btn" @click="prevSlide">
        <img src="/assets/icon-arrow-left.svg">
      </button>
      <div class="count-slides-block">
        <p class="active">{{ activeSlide }}</p>
        <p class="count">/ {{ totalSlides }}</p>
      </div>
      <button class="slider-btn" @click="nextSlide">
        <img src="/assets/icon-arrow-right.svg">
      </button>
    </div>
  </div>
  <swiper
    :loop="true"
    :slides-per-view="slidesPerView"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(product, index) in products" :key="index">
      <div class="product-item">
        <img :src="product.imgBig" class="product-img">
        <h1 class="product-title">{{ product.title }}</h1>
        <p class="product-description">{{ product.descriptionItem }}</p>
        <div class="price-block">
          <p class="rouble">{{ product.minPrice }} ₽ – {{ product.maxPrice }} ₽</p>
          <p class="euro">{{ product.minEuro }} € – {{ product.maxEuro }} €</p>
          <button class="more-btn">Подробнее</button>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { ref, computed, onMounted  } from 'vue';
import store from '../store/index';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const products = computed(() => store.getters.viewedProducts)
const swiperRef = ref(null)
const activeSlide = ref(1)
const totalSlides = ref(5)
const slidesPerView = ref(3)

function onSwiper(swiper) {
  swiperRef.value = swiper
}
function prevSlide() {
  swiperRef.value.slidePrev()
  updateActiveSlide()
}
function nextSlide() {
  swiperRef.value.slideNext()
  updateActiveSlide()
}
function updateActiveSlide() {
  const activeIndex = swiperRef.value.realIndex + 1
  activeSlide.value = activeIndex > totalSlides.value ? totalSlides.value : activeIndex
}
function updateSlidesPerView() {
  if (window.innerWidth >= 1500) {
    slidesPerView.value = 4
  } else {
    slidesPerView.value = 3
  }
}

onMounted(() => {
  window.addEventListener('resize', updateSlidesPerView)
  updateSlidesPerView()
})
</script>

<style lang="scss" scoped>
.title-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 47px;

  .slider-btns-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 179px;
    
    .slider-btn {
      cursor: pointer;
      width: 50px;
      height: 50px;
      border: none;
      background: none;
    }

    .count-slides-block {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 44px;
      height: 36px;

      .active {
        color: #212121;
        font-family: 'Lato';
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
      }

      .count {
        margin-bottom: 2px;
        color: #797B86;
        font-family: 'Lato';
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
    }
  }
}
.product-item {
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: 305px;
  height: 563px;
  border-radius: 5px;
  background: #F6F8FA;

  .product-img {
    width: 245px;
    height: 245px;
  }

  .product-title {
    color: #1F2432;
    font-family: 'Lato';
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 120.523%;
  }

  .product-description {
    color: #1F2432;
    font-family: 'Lato';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 145%;
    margin-top: 10px;
  }

  .price-block {
    display: flex;
    flex-direction: column;
    margin-top: auto;

    .rouble {
      color: #1F2432;
      font-family: 'Roboto';
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%;
      letter-spacing: 0.11px;
    }

    .euro {
      color: #797B86;
      font-family: 'Lato';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 145%;
    }

    .more-btn {
      cursor: pointer;
      display: flex;
      width: 255px;
      height: 52px;
      padding: 15px 50px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 4px;
      background: #0069B4;
      color: #FFF;
      text-align: center;
      font-family: 'Lato';
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 145%;
      border: none;
      margin-top: 20px;

      &:hover {
        opacity: 0.5;
        transition: all (0.3s);
      }
    }
  }
}
</style>