import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import Paginate from 'vuejs-paginate'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '@/filters/localizeFilter.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import Loader from '@/components/app/Loader'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false


Vue.use(messagePlugin)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localizeFilter', localizeFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.use(Vuelidate)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate) 

firebase.initializeApp({
  apiKey: "AIzaSyCTg8_-1JMJl5rHKZLAys-BcU3z29Cm2N0",
  authDomain: "vue-crm-5817d.firebaseapp.com",
  databaseURL: "https://vue-crm-5817d-default-rtdb.firebaseio.com",
  projectId: "vue-crm-5817d",
  storageBucket: "vue-crm-5817d.appspot.com",
  messagingSenderId: "1003652266825",
  appId: "1:1003652266825:web:c2e6222b4dbfcd8da43898"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


