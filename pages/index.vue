<template>
  <Header
    :distinctProductCount="distinctProductCount"
    :totalOrderSum="totalOrderSum"
    :productNounForm="productNounForm"
  />
  <div class="basket-page">
    <div class="breadcrumbs">
      <NuxtLink to="#" class="link">Главная</NuxtLink>
      <img src="/assets/arrow-right.svg">
      <NuxtLink to="#" class="link">Корзина</NuxtLink>
    </div>
    <div class="title-block">
      <h1 class="title">
        Ваша корзина
        <span class="item">{{ distinctProductCount }} {{ productNounForm }}</span>
      </h1>
      <button class="clear" @click="clearCart">Очистить корзину</button>
    </div>
    <div class="content">
      <div class="products-container">
        <div class="product-block" v-for="(product, index) in products" :key="index">
          <img :src="product.img" class="product-img">
          <div class="description-container">
            <div class="btns-block">
              <h1 class="title-item">{{ product.title }}</h1>
              <button class="close-btn" @click="removeProduct(index)">
                <img src="/assets/icon-close.svg" class="close">
              </button>
            </div>
            <div class="description-block">
              <p class="description">{{ product.descriptionOne }} / {{ product.descriptionTwo }} / {{ product.descriptionThree }}</p>
              <div class="count-block">
                <button class="minus" @click="minus(index)">
                  <img src="/assets/icon-minus.svg">
                </button>
                <p class="count">{{ product.count }}</p>
                <button class="plus" @click="plus(index)">
                  <img src="/assets/icon-plus.svg">
                </button>
              </div>
              <p class="price">{{ product.price }} ₽</p>
            </div>
            <p class="artikul">Артикул: {{ product.artikul }}</p>
          </div>
        </div>
      </div>
      <div class="summ-block">
        <h1 class="title-summ">Итого</h1>
        <div class="order-block">
          <div class="order-description">
            <p class="order-name">Сумма заказа</p>
            <p class="order-summ">{{ totalOrderSum }} ₽</p>
          </div>
          <div class="order-description">
            <p class="order-name">Количество</p>
            <p class="order-count">{{ totalProductCount }}</p>
          </div>
          <div class="order-description">
            <p class="order-name">Установка</p>
            <p class="order-plant">{{ isChecked ? 'Да' : 'Нет' }}</p>
          </div>
        </div>
        <div class="result-block">
          <p class="result-name">Стоимость товаров</p>
          <p class="result-summ">{{ totalOrderSum }} ₽</p>
        </div>
        <button class="order-btn" @click="placeOrder">Оформить заказ</button>
        <button class="click-btn">Купить в 1 клик</button>
        <p class="order-status-ok" v-if="orderStatus === 'ok'">Заказ успешно оформлен</p>
        <p class="order-status-err" v-if="orderStatus === 'err'">Ошибка при оформлении заказа</p>
      </div>
    </div>
    <div class="plant-block">
      <div class="custom-checkbox" @click="toggleCheckbox">
        <span class="checkbox-icon" :class="{ 'checked': isChecked }">
          <img v-if="isChecked" src="/assets/icon-checkmark.svg" alt="Checkmark Icon">
        </span>
      </div>
      <div class="plant-icon">
        <img src="/assets/icon-plant.svg">
      </div>
      <div class="label-block">
        <label>Установка</label>
        <p>Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</p>
      </div>
    </div>
    <div class="swiper-block">
      <Swiper :products="products"/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios'
import store from '../store/index'
import Header from "../components/Header.vue"
import Swiper from "../components/BaseSwiper.vue"

const products = computed(() => store.getters.allProducts)

function clearCart() {
  store.dispatch('clearCart')
}
function removeProduct(index) {
  store.dispatch('removeProduct', index)
}
function minus(index) {
  if (products.value[index].count > 0) {
    products.value[index].count--
  }
}
function plus(index) {
  if (products.value[index].count < 9) {
    products.value[index].count++
  }
}
const orderStatus = ref(null)
function placeOrder() {
  const orderData = {
    products: products.value,
    totalOrderSum: totalOrderSum.value,
    totalProductCount: totalProductCount.value,
    isChecked: isChecked.value
  }
  orderStatus.value = null
  axios.post('https://eojnq8g29o9xdn0.m.pipedream.net', orderData)
    .then(response => {
      orderStatus.value = 'ok'
      clearCart()
    })
    .catch(error => {
      orderStatus.value = 'err'
    })
}

const totalProductCount = computed(() => {
  return products.value.reduce((sum, product) => sum + product.count, 0)
})
const totalOrderSum = computed(() => {
  return products.value.reduce((sum, product) => sum + (product.count * product.price), 0)
})
const distinctProductCount = computed(() => {
  const distinctArtikuls = new Set(products.value.map(product => product.artikul))
  return distinctArtikuls.size
})
const productNounForm = computed(() => {
  const count = distinctProductCount.value
  function getNounForm(count) {
    if (count === 1) {
      return 'товар'
    } else if (count >= 2 && count <= 4) {
      return 'товара'
    } else {
      return 'товаров'
    }
  }
  return getNounForm(count)
})

const isChecked = ref(false)
function toggleCheckbox() {
  isChecked.value = !isChecked.value
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.basket-page {
  display: flex;
  flex-direction: column;
  padding: 31px 80px 116px;

  @media screen and (min-width: 1450px) {
    padding: 35px calc((100% - 1340px) / 2) 250px;
  }

  .breadcrumbs {
    display: flex;
    gap: 10px;

    .link {
      color: #33374E;
      font-family: 'Lato';
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;

      &:last-child {
        opacity: 0.5;
      }
    }
  }

  .title-block {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 800px;
    margin-top: 65px;

    .title {
      color: #1F2432;
      font-family: 'Lato';
      font-size: 44px;
      font-style: normal;
      font-weight: 700;
      line-height: 120.523%;

      .item {
        color: #797B86;
        font-family: 'Lato';
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 145%;
        margin-left: 22px;
      }
    }

    .clear {
      cursor: pointer;
      border: none;
      background: none;
      color: #797B86;
      text-align: right;
      font-family: 'Lato';
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      text-decoration-line: underline;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    margin-top: 39px;

    @media screen and (min-width: 1500px) {
      width: 1300px;
    }

    .products-container {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      gap: 29px;

      .product-block {
        display: flex;
        width: 800px;
        min-height: 121px;
        border-bottom: 1px solid #C4C4C4;
        gap: 30px;
        padding: 0 0 25px 25px;

        .product-img {
          width: 100px;
          height: 100px;
          background-size: cover;
        }

        .description-container {
          display: flex;
          flex-direction: column;
          width: 100%;

          .btns-block {
            display: flex;
            justify-content: space-between;
            width: 100%;

            .title-item {
              color: #1F2432;
              font-family: 'Lato';
              font-size: 16px;
              font-style: normal;
              font-weight: 600;
              line-height: 145%;
            }

            .close-btn {
              cursor: pointer;
              background: none;
              border: none;
              width: 12px;
              height: 12px;

              .close {
                width: 12px;
                height: 12px;
              }
            }
          }

          .description-block {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-top: 6px;
            padding-right: 45px;

            .description {
              display: flex;
              margin-bottom: auto;
              color: #2C3242;
              font-family: 'Lato';
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%;
              height: 23px;
              width: 263px;
            }

            .count-block {
              display: flex;
              gap: 3px;

              .minus {
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                border-bottom-left-radius: 4px;
                border-top-left-radius: 4px;
                border: none;
                background: #F6F8FA;
                width: 34px;
                height: 34px;
              }

              .count {
                display: flex;
                align-items: center;
                justify-content: center;
                border: none;
                background: #F6F8FA;
                width: 34px;
                height: 34px;
                font-family: 'Lato';
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
              }

              .plus {
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                border-bottom-right-radius: 4px;
                border-top-right-radius: 4px;
                border: none;
                background: #F6F8FA;
                width: 34px;
                height: 34px;
              }
            }

            .price {
              color: #1F2432;
              font-family: 'Roboto';
              font-size: 18px;
              font-style: normal;
              font-weight: 500;
              line-height: 145%;
            }
          }

          .artikul {
            color: #797B86;
            font-family: 'Lato';
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            margin-top: 6px;
          }
        }
      }
    }

    .summ-block {
      display: flex;
      flex-direction: column;
      padding: 35px;
      width: 350px;
      height: 458px;
      border-radius: 5px;
      background: #F6F8FA;

      .title-summ {
        color: #1F2432;
        font-family: 'Lato';
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 120.523%;
      }

      .order-block {
        display: flex;
        flex-direction: column;
        margin-top: 31px;
        border-bottom: 1px solid #AEB0B6;
        padding-bottom: 30px;
        gap: 18px;

        .order-description {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;

          .order-name {
            color: #1F2432;
            font-family: 'Lato';
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 145%;
          }

          .order-summ, .order-count, .order-plant {
            color: #1F2432;
            text-align: right;
            font-family: 'Roboto';
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 145%;
          }
        }
      }

      .result-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        width: 100%;

        .result-name {
          color: #1F2432;
          font-family: 'Lato';
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 145%;
        }

        .result-summ {
          color: #1F2432;
          text-align: right;
          font-family: 'Roboto';
          font-size: 26px;
          font-style: normal;
          font-weight: 700;
          line-height: 130%;
          letter-spacing: 0.13px;
        }
      }

      .order-btn {
        cursor: pointer;
        border: none;
        display: inline-flex;
        padding: 14px 40px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 4px;
        background: #0069B4;
        color: #FFF;
        font-family: 'Lato';
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 145%;
        margin-top: 30px;

        &:hover {
          opacity: 0.5;
          transition: all (0.3s);
        }
      }

      .click-btn {
        cursor: pointer;
        border: none;
        display: inline-flex;
        padding: 14px 40px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 4px;
        border: 1px solid #0069B4;
        background: #FFF;
        color: #0069B4;
        font-family: 'Lato';
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 145%;
        margin-top: 12px;

        &:hover {
          opacity: 0.5;
          transition: all (0.3s);
        }
      }

      .order-status-ok {
        margin-top: 5px;
        font-size: 13px;
        text-align: center;
        font-weight: 600;
        color: rgb(0, 128, 11);
        text-transform: uppercase;
      }

      .order-status-err {
        margin-top: 5px;
        font-size: 13px;
        text-align: center;
        font-weight: 600;
        color: rgb(196, 0, 0);
        text-transform: uppercase;
      }
    }
  }

  .plant-block {
    display: flex;
    align-items: center;
    width: 800px;
    height: 102px;
    border-radius: 5px;
    background: #F6F8FA;
    margin-top: 47px;
    padding: 25px;
    gap: 20px;

    .custom-checkbox {
      cursor: pointer;
      display: flex;
      align-items: center;

      .checkbox-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border-radius: 3px;
        border: 1px solid #797B86;
        transition: background-color 0.3s ease;
      }
    }

    .plant-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 4px;
      background: #FFF;
    }

    .label-block {
      display: flex;
      flex-direction: column;

      p {
        color: #797B86;
        font-family: 'Lato';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
    }
  }

  .swiper-block {
    margin-top: 95px;
  }
}
</style>