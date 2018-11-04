import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    cart: [],
    aa: 10
  },
  mutations: {
    addToCar (state, goods) {
      let flag = false
      state.cart.some(item => {
        if (item.id === goods.id) {
          item.count += goods.count
          flag = true
          return true
        }
        if (!flag) {
          state.cart.push(goods)
        }
      })
    }
  },
  getters: {}
})

// export default storee
