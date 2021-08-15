import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import goodsList from './modules/goodsList'

Vue.use(Vuex)

// 使用了module

const store = new Vuex.Store({
  modules: {
    cart,
    goodsList
  }
})

window.onbeforeunload = function () {
  // 保存到本地
  window.localStorage.setItem(
    'cartList',
    JSON.stringify(store.getters['goodsList/getGoodsList'])
  )
}

export default store
