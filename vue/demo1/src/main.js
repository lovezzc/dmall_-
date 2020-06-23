// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import infiniteScroll from 'vue-infinite-scroll'//引用模块往下拉加载图片

Vue.config.productionTip = false
Vue.use(infiniteScroll)
Vue.use(Vuex)
/* eslint-disable no-new */

const store = new Vuex.Store({
  state:{
    cartCount:0
  },
  mutations:{
    updateCartCount(state,cartCount){
      state.cartCount += cartCount;
    },
    initCartCount(state,cartCount){
      state.cartCount = cartCount;
    }
  }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
