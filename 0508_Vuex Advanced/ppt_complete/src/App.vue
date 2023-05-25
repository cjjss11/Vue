<template>
  <div id="app">
    <!-- 원래 {{ message }}였지만 mapState를 사용해서 객체 형태로 매핑하여 이름을 msg로 변경  -->
    <h1>길이 {{ messageLength }}의 메시지 '{{ msg }}'를 입력받음</h1>
    <h3>'{{ msg }}'의 길이의 두배 : {{ doubleLength }}</h3>
    <!-- <h1>age: {{ age }}</h1> -->

    <!-- mapActions를 배열 형태로 사용할 때는 changeMessage에 인자(inputData)를 넘겨주어야 함 -->
    <!-- <input type="text" @keyup.enter="changeMessage(inputData)" v-model="inputData"> -->

    <!-- mapActions를 객체 형태(changeMessage 이름 바꿈)로 사용할 때는 onSubmit이라는 새로운 메서드 만들어서 사용 -->
    <input type="text" @keyup.enter="onSubmit" v-model="inputData">
    <h1>{{ level }}</h1>
    <button @click="uplevel">levelup</button>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
  },
  created() {
    this.$store.dispatch('loadMessage')
    console.log(this.$store)
    
  },
  computed: {
    // message() {
    //   return this.$store.state.message  // 같은 코드
    // },
    // ...mapState(['message']),  // 같은 코드 - 그대로 쓸 때는 배열 사용
    ...mapState(['age']),
    ...mapState({
      msg: state => state.message,  // 같은 코드 - 이름을 바꾸고 싶을 때는 객체 사용
      level: state => state.myModule.level,
    }),
    // messageLength() {
    //     return this.$store.getters.messageLength
    // },
    // doubleLength() {
    //     return this.$store.getters.doubleLength
    // },
    ...mapGetters(['messageLength', 'doubleLength'])
  },
  data() {
    return {
      inputData: null,
    }
  },
  methods: {
    // // mapActions를 사용하면 안 써도 됨
    // changeMessage() {
    //   const newMessage = this.inputData
    //   this.$store.dispatch('changeMessage', newMessage)
    //   this.inputData = null
    // },
    // ...mapActions(['changeMessage'])
    ...mapActions({
      actionsChangeMessage: 'changeMessage', // 객체 사용해서 이름 바꿈
      uplevel: 'incrementLevel',
    }),
    // onSubmit이라는 다른 메서드를 만들어서 mapActions에서 만든 메서드를 불러옴
    onSubmit() {
      const newMessage = this.inputData
      this.actionsChangeMessage(newMessage)
      this.inputData = null
    },
    // // mapActions를 사용하면 안 써도 됨
    // uplevel() {
    //   this.$store.dispatch('incrementLevel')
    // }
  },
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
