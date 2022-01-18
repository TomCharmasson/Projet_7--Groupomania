import { createRouter, createWebHistory } from 'vue-router'

// Routes to the different pages

import Wall from '../views/Wall.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import ForgottenPassword from '../views/ForgottenPassword.vue'
import Profile from '../views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'Wall',
    component: Wall
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgotten-password',
    name: 'ForgottenPassword',
    component: ForgottenPassword
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
