import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue3 from 'bootstrap-vue-3'
import { createRouter, createWebHistory } from 'vue-router'

import login from './components/login.vue'
import signup from './components/signup.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const routes = [
    { path: '/login', name: 'Login', component: login }

    , { path: '/signup', name: 'Signup', component: signup }
]

const router = createRouter({ history: createWebHistory(), routes })


const app = createApp(App)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')
