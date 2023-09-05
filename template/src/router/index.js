import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/screenList',
    name: 'screenList',
    component: () => import('../components/screenList.vue')
  },
  {
    path: '/playlistCompare',
    name: 'playlistCompare',
    component: () => import('../components/playlistCompare.vue')
  },
  {
    path: '/efkLog',
    name: 'efkLog',
    component: () => import('../components/efkLog.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
