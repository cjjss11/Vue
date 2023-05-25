import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import myModule from './modules/myModule'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(), // plugins을 사용하면 밑에 로컬스토리지에 저장해서 사용하는 코드 안 써도 됨
  ],
  state: {
    message: 'message in state',
    age: 30,
  },
  getters: {
    messageLength(state) {
      return state.message.length
    },
    // messageLength를 이용해서 새로운 값을 계산
    doubleLength(state, getters) {
      return getters.messageLength * 2
    },
  },
  mutations: {
    CHANGE_MESSAGE(state, message){
      // console.log(state)
      // console.log(message)
      state.message = message
    },
    // LOAD_MESSAGE(state) {
    //   // localstorage에서 데이터를 꺼내옴
    //   const parsedMessage = JSON.parse(localStorage.getItem('message'))
    //   state.message = parsedMessage ? parsedMessage : '' // parsedMessage가 있으면 message 없으면 빈 문자열
    // }
  },
  actions: {
    changeMessage(context, message){
      // console.log(context)
      // console.log(message)
      context.commit('CHANGE_MESSAGE', message)
      // // localstorage에 저장
      // context.dispatch('messageSaveToLocalStorage')
    },
    // messageSaveToLocalStorage(context) {
    //   const message = JSON.stringify(context.state.message)
    //   localStorage.setItem('message', message)
    // },
    // loadMessage(context) {
    //   context.commit('LOAD_MESSAGE')
    // }
  },
  modules: {
    myModule
  }
})

