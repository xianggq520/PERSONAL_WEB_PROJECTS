// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n/index'
import ElementUI from 'element-ui';
import Icon from 'vue-svg-icon/Icon.vue';

import 'element-ui/lib/theme-chalk/index.css';
 
 

Vue.config.productionTip = false

// 引入mockjs
require('./mock.js')

Vue.use(ElementUI);

Vue.component('icon', Icon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
