import { createRouter, createWebHistory } from 'vue-router'

import login from '../views/login.vue'
import signup from '../views/signup.vue'
import home from '../views/home.vue'
import profile from '../views/profile.vue'

const routes = [
    { path: '/home', name: 'home', component: home },

    { path: '/login', name: 'Login', component: login },

    { path: '/signup', name: 'Signup', component: signup },

    { path: '/profile', name: 'Profile', component: profile },

    { path: '/', redirect: '/home' }
]

const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach((to, from, next) => {

    const publicPages = ['/login', '/signup'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('token');

    if (loggedIn && publicPages.includes(to.path)) {
        return next('/home');
    }

    if (authRequired && !loggedIn) {
        return next('/login');
    }
    next();
});



export default router