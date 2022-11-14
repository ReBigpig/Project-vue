import Vue from 'vue'
import App from './App.vue'
//按需引入element ui
import elementui  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'//可以不写index.js因为默认读取的就是index
Vue.use(elementui)

Vue.config.productionTip = false

new Vue({
  //挂载router
  router,
  render: h => h(App),
}).$mount('#app')
