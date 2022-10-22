import Vue from 'vue'
import Router from 'vue-router'
import TabMenu from '@/components/TabMenu'
import Output from '@/components/Output' // ①import

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TabMenu',
      component: TabMenu
    },

    // ②profile
    {
      path: '/outputs',
      name: 'Output',
      component: Output
    }
  ]
})
