import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'

import LoginCommon from '@/views/Login/Login_common'
import LoginIcdp from '@/views/Login/Login_icdp'
// 视图部分
import Home from '@/views/Home'

import PageA from '@/views/Main/Page_1'
import PageB from '@/views/Main/Page_2'
import PageC from '@/views/Main/Page_3'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login_common',
      name: 'LoginCommon',
      component: LoginCommon
    },
    {
      path: '/login_icdp',
      name: 'LoginIcdp',
      component: LoginIcdp
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/page_1',
      children: [
        {
          path: '/page_1',
          name: 'Page_1',
          component: PageA
        },
        {
          path: '/page_2',
          name: 'Page_2',
          component: PageB
        },
        {
          path: '/page_3',
          name: 'Page_3',
          component: PageC
        }
      ]
    }
  ]
})
