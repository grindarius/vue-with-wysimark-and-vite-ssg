import './assets/main.css'

import App from './App.vue'
import { routes, routerOptions } from './router'
import { ViteSSG } from 'vite-ssg'

export const createApp = ViteSSG(App, routerOptions, ({ app, router, isClient, initialState }) => {
  app.use(router)
})
