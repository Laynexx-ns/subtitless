import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import SearchPage from '@/pages/SearchPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: MainPage,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchPage,
    },
  ],
})

export default router
