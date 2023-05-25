<template>
  <div>
    value: {{ value }}
    <button @click="changeValue">Change Value</button><br>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  data() {
    return {
      value: 0,
    }
  },
  methods: {
    changeValue() {
      this.value = this.value + 1
    }
  },
  // 밑에 있는 함수 하나하나가 hook(훅)
  beforeCreate() {
    console.log('Child beforeCreate') // 처음에 시작하자마자 console 창에 출력됨
  },
  created() {
    console.log('Child created') // 처음에 시작하자마자 console 창에 출력됨
  },
  beforeMount() {
    console.log('Child beforeMount') // 처음에 시작하자마자 console 창에 출력됨
  },
  mounted() {
    console.log('Child mounted') // 처음에 시작하자마자 console 창에 출력됨
  },
  beforeUpdate() {
    console.log('Child beforeUpdate') // 값이 변경되면 console 창에 출력됨
  },
  updated() {
    console.log('Child updated') // 값이 변경되면 console 창에 출력됨
  },
  beforeDestroy() {
    console.log('Child beforeDestroy') // toggle 버튼을 클릭하여 값을 변경하는 버튼이 사라지면 console 창에 출력됨
  },
  destroyed() {
    console.log('Child destroyed') // toggle 버튼을 클릭하여 값을 변경하는 버튼이 사라지면 console 창에 출력됨
  }
}
</script>
