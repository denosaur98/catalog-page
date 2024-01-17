import { createStore } from 'vuex';

import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import bxc from '../assets/BXC-big.png';
import g2h from '../assets/G2H-big.png';
import ghn from '../assets/GHN-big.png';
import tda from '../assets/TDA-big.png';
import notfound from '../assets/notfound-picture.svg';

const store = createStore({
  state() {
    return {
      products: [
        {
          img: img1,
          imgBig: g2h,
          title: 'Вытяжное устройство G2H',
          price: 12644,
          minPrice: 6848,
          maxPrice: 56584,
          minEuro: 77.60,
          maxEuro: 643.86,
          descriptionOne: '12-72/168 м3/ч',
          descriptionTwo: 'гидрорегулируемый расход',
          descriptionThree: 'от датчика присутствия',
          descriptionItem: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
          artikul: 'G2H1065',
          count: 1
        },
        {
          img: img2,
          imgBig: bxc,
          title: 'Вытяжное устройство BXC',
          price: 25288,
          minPrice: 5841,
          maxPrice: 36524,
          minEuro: 55.20,
          maxEuro: 443.80,
          descriptionOne: '15-72/168 м3/ч',
          descriptionTwo: 'гидрорегулируемый расход',
          descriptionThree: 'от датчика присутствия',
          descriptionItem: 'Вытяжное устройство для механической системы вентиляции',
          artikul: 'G2H2215',
          count: 3
        },
        {
          img: img3,
          imgBig: ghn,
          title: 'Вытяжное устройство GHN',
          price: 17644,
          minPrice: 7848,
          maxPrice: 76577,
          minEuro: 80.10,
          maxEuro: 770.50,
          descriptionOne: '19-52/148 м3/ч',
          descriptionTwo: 'гидрорегулируемый расход',
          descriptionThree: 'от датчика присутствия',
          descriptionItem: 'Вытяжное устройство с датчиком присутствия',
          artikul: 'G2H1112',
          count: 5
        },
        {
          img: notfound,
          imgBig: tda,
          title: 'Вытяжное устройство TDA',
          price: 6990,
          minPrice: 3580,
          maxPrice: 25700,
          minEuro: 38.80,
          maxEuro: 423.90,
          descriptionOne: '14-52/10 м3/ч',
          descriptionTwo: 'гидрорегулируемый расход',
          descriptionThree: 'от датчика присутствия',
          descriptionItem: 'Вытяжное устройство с датчиком присутствия',
          artikul: 'TDA2132',
          count: 1
        }
      ],
    }
  },
  getters: {
    allProducts: state => state.products
  },
  mutations: {
    clearCart(state) {
      state.products = []
    },
    removeProduct(state, index) {
      state.products.splice(index, 1)
    }
  },
  actions: {
    clearCart({ commit }) {
      commit('clearCart')
    },
    removeProduct({ commit }) {
      commit('removeProduct')
    }
  }
})

export default store