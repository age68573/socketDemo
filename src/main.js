import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false
Vue.prototype.$getNowFormatDate =  function () {
  var  date =  new  Date();
  var  seperator1 =  "-" ;
  var  year = date.getFullYear();
  var  month = date.getMonth() + 1;
  var  strDate = date.getDate();
  if  (month >= 1 && month <= 9) {
    month =  "0"  + month;
  }
  if  (strDate >= 0 && strDate <= 9) {
    strDate =  "0"  + strDate;
  }
  var  currentdate = year + seperator1 + month + seperator1 + strDate;
  return  currentdate;
};

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://192.168.1.96:3000',
  vuex: {}
}))

new Vue({
  vuetify,
  render: h => h(App),
  router,
  store,
}).$mount('#app')
