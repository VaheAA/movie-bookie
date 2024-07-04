import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/components/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'booking/:roomId',
          name: 'Booking',
          component: () => import('@/views/BookingView.vue')
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/AboutView.vue')
        }
      ]
    }
  ]
})

export default router
