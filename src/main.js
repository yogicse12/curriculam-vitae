// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex';

export default function (Vue, { appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(Vuex);

  appOptions.store = new Vuex.Store({
    state: {
      loading: false
    },
    mutations: {
      on(state) {
        state.loading = true;
      },
      off(state) {
        state.loading = false;
      }
    }
  })
}
