import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [ // 빈 리스트로 선언해서 값을 입력하면 리스트에 추가되는 형식
      // {
      //   title: '할 일 1',
      //   isCompleted: false,
      // },
      // {
      //   title: '할 일 2',
      //   isCompleted: false,
      // },
    ]
  },
  getters: {
  },
  mutations: {
    CREATE_TODO(state, todoItem) {
      state.todos.push(todoItem)
      // console.log(state.todos)
    }
  },
  actions: {
    createTodo(context, todoTitle) {
      const todoItem = {
        title: todoTitle,
        isCompleted: false,
      }
      // console.log(todoItem)
      context.commit('CREATE_TODO',todoItem)
    }
  },
  modules: {
  }
})
