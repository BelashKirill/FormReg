import { createRouter, createWebHistory } from 'vue-router'
import Registration from '../views/Registration.vue'

const routes = [
  {
    path: '/',
    name: 'Registration',
    component: Registration
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
