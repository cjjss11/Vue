<template>
  <div>
    <li @click="updateTodo" :class="{'is-completed' : todoitem.isCompleted}">{{ todoitem.title }}</li>
    <button @click="deleteTodo">DELETE</button>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todoitem: Object,
  },
  methods: {
    deleteTodo() {
      this.$store.dispatch('deleteTodo', this.todoitem)
    },
    updateTodo() {
      this.$store.dispatch('updateTodo', this.todoitem)
    }
  }
}

</script>


<style>
  .is-completed {
    text-decoration: line-through;
  }
</style>