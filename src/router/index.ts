import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/MyHome.vue'), // 懒加载组件
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
