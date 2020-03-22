import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import VueRouter from 'vue-router'
import DogsPage from './components/DogsPage.vue'
import Dashboard from './components/Dashboard.vue';
Vue.config.productionTip = false


Vue.use(VueRouter)


const routes = [
  {path: '/', component: Dashboard },
  {path: '/dogspage', component: DogsPage }
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
