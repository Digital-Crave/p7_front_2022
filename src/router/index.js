import { createRouter, createWebHistory } from 'vue-router'

import login from '../components/login.vue'
import signup from '../components/signup.vue'
import home from '../components/home.vue'
import profile from '../components/profile.vue'

const routes = [
    { path: '/home', name: 'home', component: home },

    { path: '/login', name: 'Login', component: login },

    { path: '/signup', name: 'Signup', component: signup },

    { path: '/profile', name: 'Profile', component: profile }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router