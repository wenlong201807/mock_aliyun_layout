// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// Vue.http.options.emulateJSON =true
import echarts from 'echarts'
import axios from 'axios'
router.beforeEach((to, from, next) => {
  // 判断to到哪里去？如果去一些不需要校验用户是否已登录的页面，那么就直接放行==》next()
  console.log(to, from)
  next()
})
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios

Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
