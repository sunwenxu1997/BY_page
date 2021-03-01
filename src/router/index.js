import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details',
    name: 'details',
    component: () => import( '../views/Details.vue')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import( '../views/Video.vue')
  },
  {
    path: '/xwgg',
    name: 'xwgg',
    component: () => import( '../views/xwgg.vue')
  },
  {
    path: '/zxcs',
    name: 'zxcs',
    component: () => import( '../views/zxcs.vue')
  },
  {
    path: '/zlxz',
    name: 'zlxz',
    component: () => import( '../views/zlxz.vue')
  },
  {
    path: '/jxsp',
    name: 'jxsp',
    component: () => import( '../views/jxsp.vue')
  },
  {
    path: '/sshd',
    name: 'sshd',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/xwgg',
    name: 'xwgg',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/xwgg',
    name: 'xwgg',
    component: () => import( '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
