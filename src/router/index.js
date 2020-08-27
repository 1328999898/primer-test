import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/components/HelloWorld')
  },
  {
    path: '/p1',
    name: 'P1',
    component: () => import('@/components/p1')
  },
]

const router = new VueRouter({
  routes
})

export default router