<template>
  <div id="app">
    <!-- index.js에서 선언한 것을 가져올 때 -->
    <!-- <h1>{{ $store.state.message }}</h1> -->

    <!-- computed에 정의해서 가져올 때 -->
    <h1>{{ message }}의 길이는 {{ messageLength }}</h1>
    <h2>{{ message }}의 길이의 두배는 {{ doubleLength }}</h2>
    <input type="text" @keyup.enter="changeMessage" v-model="inputData">
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      inputData: null,
    }
  },
  methods: {
    changeMessage() {
      const newMessage = this.inputData
      this.$store.dispatch('changeMessage',newMessage)
      this.inputData = null
    }
  },
  components: {
  },
  computed: {
    message() {
      return this.$store.state.message
    },
    messageLength() {
      return this.$store.getters.messageLength
    },
    doubleLength() {
      return this.$store.getters.doubleLength
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
