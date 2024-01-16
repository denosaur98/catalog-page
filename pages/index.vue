<template>
  <Header/>
  <div class="basket-page">
    <div class="breadcrumbs">
      <NuxtLink to="#" class="link">Главная</NuxtLink>
      <img src="/assets/arrow-right.svg">
      <NuxtLink to="#" class="link">Корзина</NuxtLink>
    </div>
    <div class="title-block">
      <h1 class="title">
        Ваша корзина
        <span class="item">4 товара</span>
      </h1>
      <NuxtLink to="#" class="link">Очистить корзину</NuxtLink>
    </div>
    <div class="content">
      <div class="products-container">
        <div class="product-block" v-for="product in 3">
          <img src="/assets/1.png" class="product-img">
          <div class="description-container">
            <div class="btns-block">
              <h1 class="title">Вытяжное устройство G2H</h1>
              <button class="close-btn">
                <img src="/assets/icon-close.svg" class="close">
              </button>
            </div>
            <div class="description-block">
              <p class="description">12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия</p>
              <div class="count-block">
                <button class="minus">
                  <img src="/assets/icon-minus.svg">
                </button>
                <div class="count">1</div>
                <button class="plus">
                  <img src="/assets/icon-plus.svg">
                </button>
              </div>
              <p class="price">12 644 ₽</p>
            </div>
            <p class="artikul">Артикул: G2H1065</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue"
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.basket-page {
  display: flex;
  flex-direction: column;
  padding: 31px 80px 116px;

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

    .link {
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

    .products-container {
      display: flex;
      flex-direction: column;
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
  }
}
</style>