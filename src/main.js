import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// 파이어베이스 앱 객체 모듈 가져오기
import firebase from 'firebase/compat/app';
import '@/datasources/firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created() {
    // 사용자가 로그아웃했을 때 등을 처리
    firebase.auth().onAuthStateChanged(pUserInfo => {
      if(pUserInfo){
        // 이미 로그인되어 있었는지 등의 상태를 파악하여 처리
        store.dispatch('fnDoLoginAuto', pUserInfo) // 자동 로그인
      }
    })
  },
  render: h => h(App)
}).$mount('#app')
