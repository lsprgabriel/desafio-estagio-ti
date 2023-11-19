import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router' 
import './index.css'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'

const router = createRouter({
    history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/cadastrar', component: Signup },
    { path: '/entrar', component: Login }
  ]
})

createApp(App)
.use(router)
.mount('#app')
