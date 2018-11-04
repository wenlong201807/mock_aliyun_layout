import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import actions from './actions'
// import mutations from './mutations'
// import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    AppName: '管理端',
    shopList: [],
    dropList: [],
    cart: []
  },
  // 若是多个页面公用的后台数据，使用actions这种方式请求
  actions: {
    queryShopList (context, q) {
      axios.get('http://localhost:3000/enter?_page=1&_limit=5&q=' + q, {}).then(res => {
        context.commit('AddShopList', res.data)
      })
    }
  },
  mutations: {
    changeAppName: (state, newName) => {
      state.AppName = newName
    },
    AddShopList (state, list) {
      state.shopList = [...list]
    },
    addDropList (state, list) {
      state.dropList = [...list]
    },
    addToCar (state, goods) {
      let flag = false
      state.cart.some(item => {
        if (item.id === goods.id) {
          item.count += goods.count
          flag = true
          return true
        }
      })
      if (!flag) {
        state.cart.push(goods)
      }
    }
  },
  getters: {
    getAppName: state => {
      return state.AppName
    },
    getShopList: state => {
      return state.shopList
    },
    getDropList: state => {
      return state.dropList
    },
    totalcount (state) {
      let c = 0
      state.cart.forEach(item => (c += item.count))
      return c
    }
  }
})
