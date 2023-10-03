import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WysimarkPage from '../views/WysimarkPage.vue'
import type { RouterOptions } from 'vite-ssg'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/wysimark',
    name: 'wysimark',
    component: WysimarkPage
  }
]

export const routerOptions: RouterOptions = {
  routes,
  scrollBehavior (to, _from, _savedPosition) {
    if (!to.hash) return { top: 0 }
    return {
      el: to.hash,
      behavior: 'smooth'
    }
  }
}
