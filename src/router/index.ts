import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import SearchPage from '@/pages/SearchPage.vue';
import LyricsPage from '@/pages/LyricsPage.vue';

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
    {
      path: '/search/:id',
      name: 'qwe',
      component: LyricsPage,
    },
  ],
})

export default router
