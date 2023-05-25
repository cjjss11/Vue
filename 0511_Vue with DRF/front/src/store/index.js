import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [

    ],
  },
  getters: {
  },
  mutations: {
    GET_ARTICLES(state, articles) {
      state.articles = articles 
    }
  },
  actions: {
    getArticles(context) {
      // commit은 state를 변경할 때 필요하므로 API로 django에서 데이터를 불러올 때는 commit을 쓰지 않음
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/articles/`,
      })
      .then((response) => {
        // console.log(response)
        context.commit('GET_ARTICLES', response.data)
      })
      .catch((error) => {
        console.log(error)
      }) 
    }
  },
  modules: {
  }
})
