import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import VueRouter from 'vue-router'
import DogDetails from './components/views/DogDetails'
import Nav from './components/Nav'
import Home from './components/views/Home'

Vue.config.productionTip = false


Vue.use(VueRouter)


const routes = [
  { path: '/', component: Home },
  { path: '/dogspage', component: () => import ("./components/views/DogsPage") },
  { path: '/dogdetails/:id', component: DogDetails, props: true },
  // { path: '/dogdetails/id/:id', component: DogDetails },
  { path: '/adopt', component: () => import ("./components/views/AdoptForm") }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  router,
  vuetify,
  render: h => h(Nav),
}).$mount('#app')
