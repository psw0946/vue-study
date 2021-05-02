import { createStore } from 'vuex/dist/vuex.mjs';

import productsModule from '@/store/modules/products';
import cartsModule from '@/store/modules/carts';

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartsModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
