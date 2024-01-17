<template>
  <div class="title-block">
    <h1 class="title">Просмотренные товары</h1>
    <button>aaa</button>
  </div>
  <swiper
    :loop="true"
    :slides-per-view="3"
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
import { defineProps } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const props = defineProps(['products'])
</script>

<style lang="scss" scoped>
.title-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 47px;
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
      font-family: Lato;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 145%;
      border: none;
      margin-top: 20px;
    }
  }
}
</style>