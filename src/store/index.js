import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
//安裝插件
Vue.use(Vuex)

//創建store對象
const store = new Vuex.Store({
  state: {
    loginForm: {
      account: '',
      password: ''
    },
    token: ''
  },
  mutations: {
    getToken(state, data) {
      localStorage.token = data;
      state.token = data
      Cookies.set('login', state.token, { expires: 1 })
    }
  },
  actions: {

  }
})

export default store