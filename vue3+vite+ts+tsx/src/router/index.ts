import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/home')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index')
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
