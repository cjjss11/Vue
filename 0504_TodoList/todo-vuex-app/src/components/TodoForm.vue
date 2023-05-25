<template>
  <div>
    <input type="text" v-model.trim="todoTitle" @keyup.enter="createTodo">
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      todoTitle: null,
    }
  },
  methods: {
    createTodo() {
      // console.log(this.todoTitle)
      if (this.todoTitle) { // 빈 값이 입력 되지 않도록 하기 위한 조건문
        this.$store.dispatch('createTodo', this.todoTitle)
      }
      else {
        alert('할 일을 입력하세요!')
      }
      this.todoTitle = null
    }
  }
}
</script>

<style>

</style>