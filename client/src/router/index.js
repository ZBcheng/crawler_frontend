import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import SearchResult from '@/components/SearchResult'
import HelloVue from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
