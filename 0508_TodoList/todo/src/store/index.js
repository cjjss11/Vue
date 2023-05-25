import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [

    ]
  },
  getters: {
    alltodosCount(state) {
      return state.todos.length
    },
    completedTodosCount(state) {
      const completedTodos = state.todos.filter((todoitem) => {
        return todoitem.isCompleted === true
      })
      return completedTodos.length
    },
    uncompletedTodosCount(state,getter) {
      return getter.alltodosCount - getter.completedTodosCount
    }
  },
  mutations: {
   CREATE_TODO(state,todoItem) {
    state.todos.push(todoItem)
   },
   DELETE_TODO(state,todoItem) {
    const index = state.todos.indexOf(todoItem)
    state.todos.splice(index,1) // 몇 번째(index)에서 몇 개(1개)를 삭제할 것인지
   },
   UPDATE_TODO(state,todoItem) {
    // 함수 -> state.todos 배열에서 클릭한 todo item을 찾고, 해당 todo.isCompleted를 반대로 뒤집는다
    // true->false로 뒤집기 (토글)
    state.todos = state.todos.map((todoitem) => {
      if (todoitem === todoItem) { // 클릭한 todo item을 stat.todos 배열에서 찾아서
        todoitem.isCompleted = !todoitem.isCompleted // todo item의 isCompleted를 뒤집기
      }
      return todoitem
    })
   },
   LOAD_TODOS(state) {
    const localStorageTodos = localStorage.getItem('todos')
    const parsedTodos = JSON.parse(localStorageTodos)

    state.todos = parsedTodos
   }
  },
  actions: {
    createTodo(context, todoTitle) {
      const todoItem = {
        title: todoTitle,
        isCompleted: false,
      }
      context.commit('CREATE_TODO', todoItem)
      context.dispatch('saveTodosToLocalStorage') // create하고 로컬스토리지에 저장
    },
    deleteTodo(context, todoItem) {
      context.commit('DELETE_TODO', todoItem)
      context.dispatch('saveTodosToLocalStorage') // delete하고 로컬스토리지에 저장
    },
    updateTodo(context, todoItem) {
      context.commit('UPDATE_TODO', todoItem)
      context.dispatch('saveTodosToLocalStorage') // update하고 로컬스토리지에 저장
    },
    saveTodosToLocalStorage(context) {
      const jsonTodos = JSON.stringify(context.state.todos)
      localStorage.setItem('todos', jsonTodos)
    },
    loadTodos(context) {
      context.commit('LOAD_TODOS')
    }
  },
  modules: {
  }
})
