import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import('../views/Home.vue'),
      sidebar: () => import('../components/navbar/HomeNav.vue'),
    }
  },
  {
    path: '/GameSelect', 
    name:'Select',
    components: {
        default: () => import('../views/Select.vue'),
        sidebar: () => import('../components/navbar/SelectNav.vue'),
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
