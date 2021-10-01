import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Earth from '../views/Earth.vue'
import Mars from '../views/Mars.vue'
import Moon from '../views/Moon.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/earth',
    name: 'Earth',
    component: Earth
  },
  {
    path: '/moon',
    name: 'Moon',
    component: Moon
  },
  {
    path: '/mars',
    name: 'Mars',
    component: Mars
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
