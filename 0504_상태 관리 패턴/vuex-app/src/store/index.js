import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ // store.state.message => store 안에 state 안에 message
  state: {
    message: 'message in store'
  },
  getters: {
    messageLength(state) {
      return state.message.length 
    },
    doubleLength(state, getters) {
      return getters.messageLength * 2
    }
  },
  mutations: {
    CHANGE_MESSAGE(state, message) { // message 이름을 바꿔도 됨 여기서 바꾸면
      // console.log(state)
      // console.log(message)
      state.message = message // 여기 message 이름도 똑같이 바꿔야 함
    }
  },
  actions: {
    // 여기서 말하는 message는 App.vue안에 changeMessage 함수에서 선언된 newMessage를 넘겨준 것
    // 뒤에 오는 message를 payload라고 함
    changeMessage(context, message) { 
      // console.log(context)
      // console.log(message)
      context.commit('CHANGE_MESSAGE', message)
    }
  },
  modules: {
  }
})
