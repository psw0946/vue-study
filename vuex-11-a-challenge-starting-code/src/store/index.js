import { createStore } from 'vuex/dist/vuex.mjs';

import productsModule from '@/store/modules/products';
import cartsModule from '@/store/modules/carts';

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartsModule,
  },
});

export default store;
