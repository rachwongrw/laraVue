import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import VueRouter from 'vue-router'
import DogsPage from './components/DogsPage.vue'
import DogDetails from './components/DogDetails.vue'
import AdoptForm from './components/AdoptForm.vue'
import Dashboard from './components/Dashboard.vue';
import NavBar from './components/NavBar'

Vue.config.productionTip = false


Vue.use(VueRouter)


const routes = [
  { path: '/', component: NavBar },
  { path: '/dogspage', component: DogsPage },
  { path: '/dogdetails/:id', component: DogDetails, props: true },
  // { path: '/dogdetails/id/:id', component: DogDetails },
  { path: '/adopt', component: AdoptForm }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  router,
  vuetify,
  render: h => h(Dashboard),
}).$mount('#app')
