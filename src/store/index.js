import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import modCommon from './common'
import modProvider from './provider'

Vue.use(Vuex)

// 규모가 커짐에 따라 스토어를 모듈로 분리함
// common 모듈 : 시간 지연, 에러 메시지 처리 공통 내용
// provider 모듈 : 구글과 이메일 인증 처리 내용
export default new Vuex.Store({
  modules: {
    common: modCommon,
    provider: modProvider
  },
  plugins: [(new VuexPersistence({
    storage: window.localStorage
  })).plugin]
})
