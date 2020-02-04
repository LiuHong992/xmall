import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入dayjs
import dayjs from 'dayjs'
//引入axios
import axios from './http'
//引入element
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './global'
import api from './http/api'

Vue.config.productionTip = false
Vue.prototype.$dayjs = dayjs
Vue.prototype.$axios = axios
Vue.prototype.$api = api
Vue.use(ViewUI);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')