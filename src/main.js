// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  AlertPlugin,
  ToastPlugin
} from 'vux'

import 'amfe-flexible/index.js'
// import FastClick from 'fastclick'

// FastClick.attach(document.body);
import axios from 'axios';
import API from './api/api'

Vue.prototype.axios = axios;
Vue.prototype.$api = API;

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
