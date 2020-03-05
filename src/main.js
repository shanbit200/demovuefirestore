import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from './Firebase'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)

let app = '';

/* new Vue({
  router,
  render: h => h(App)
}).$mount('#app') */

firebase.auth().onAuthStateChanged(() =>{
  if(!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
    
  }
})
