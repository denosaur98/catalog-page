<template>
  <header class="header">
    <div class="header-top">
      <div class="btns-block-top">
        <NuxtLink to="#" class="link">О компании</NuxtLink>
        <NuxtLink to="#" class="link">Как заказать</NuxtLink>
        <NuxtLink to="#" class="link">Доставка и оплата</NuxtLink>
        <NuxtLink to="#" class="link">Документы</NuxtLink>
        <NuxtLink to="#" class="link">Контакты</NuxtLink>
      </div>
      <div class="contacts-block">
        <NuxtLink to="#" class="link">+7 (812) 412-22-40</NuxtLink>
        <NuxtLink to="#" class="link">+7 (495) 664-66-30</NuxtLink>
      </div>
      <div class="social-block">
        <NuxtLink to="#">
          <img src="/assets/icon-vk.svg" class="icon">
        </NuxtLink>
        <NuxtLink to="#">
          <img src="/assets/icon-instagram.svg" class="icon">
        </NuxtLink>
        <NuxtLink to="#">
          <img src="/assets/icon-facebook.svg" class="icon">
        </NuxtLink>
      </div>
    </div>
    <div class="header-bottom">
      <div class="logo-block">
        <img src="/assets/logo.svg" class="logo">
        <div class="btns-block-bottom">
          <button class="burger-btn">
            <img src="/assets/burger.svg">
            Каталог товаров
          </button>
          <button class="dropdown-btn">
            Наши услуги
            <img src="/assets/arrow.svg">
          </button>
          <NuxtLink to="#" class="link">Наши проекты</NuxtLink>
        </div>
      </div>
      <div class="basket-block">
        <NuxtLink to="#">
          <img src="/assets/icon-basket.svg" class="icon">
        </NuxtLink>
        <div class="description">
          <NuxtLink to="#">
            <h1 class="title">Ваша корзина</h1>
          </NuxtLink>
          <p class="items">{{ props.distinctProductCount }} {{ props.productNounForm }}</p>
          <p class="price">{{ props.totalOrderSum }} ₽</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  distinctProductCount: Number,
  totalOrderSum: Number,
  productNounForm: String
})
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.header {
  display: flex;
  flex-direction: column;

  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 80px;
    background: #F6F8FA;

    .btns-block-top, .contacts-block {
      display: flex;
      gap: 30px;

      .link {
        color: #1F2432;
        font-family: 'Lato';
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }

      .phone {
        color: #1F2432;
        font-family: 'Lato';
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        letter-spacing: 0.07px;
      }
    }
    
    .social-block {
      display: flex;
      gap: 10px;

      .icon {
        width: 22px;
        height: 22px;
      }
    }
  }

  .header-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px 80px;
    box-shadow: 0px 2px 15px 0px rgba(44, 50, 66, 0.12);

    .logo-block {
      display: flex;
      gap: 30px;

      .logo {
        width: 157px;
        height: 60px;
      }

      .btns-block-bottom {
        display: flex;
        align-items: center;
        gap: 30px;

        .burger-btn {
          cursor: pointer;
          display: inline-flex;
          padding: 10px 25px 10px 15px;
          justify-content: center;
          align-items: center;
          gap: 12px;
          border-radius: 4px;
          background: #0069B4;
          border: none;
          color: #FFF;
          text-align: center;
          font-family: 'Lato';
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 130%;

          &:hover {
            opacity: 0.5;
            transition: all (0.3s);
          }
        }

        .dropdown-btn {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: #1F2432;
          font-family: 'Lato';
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 145%;
        }

        .link {
          color: #1F2432;
          font-family: 'Lato';
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 145%;
        }
      }
    }

    .basket-block {
      display: flex;
      gap: 10px;
      align-items: center;

      .icon {
        width: 40px;
        height: 40px;

        &:hover {
          opacity: 0.5;
          transition: all (0.3s);
        }
      }

      .description {
        display: flex;
        flex-direction: column;

        .title {
          color: #1F2432;
          font-family: 'Lato';
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 125%;
        }

        .items {
          color: #797B86;
          font-family: 'Lato';
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 125%;
        }

        .price {
          color: #1F2432;
          font-family: 'Roboto';
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 125%;
        }
      }
    }
  }
}
</style>