<template>
  <div>
    <h2>This is MyChild</h2>
    <p>{{ staticProps }}</p>
    <p>{{ myProps }}</p>
    <button @click="ChildToParent">클릭!</button>
    <input type="text" v-model="childInputData" @keyup.enter="childInput"> 
  </div>
</template>

<script>
export default {
  name: 'MyChild',
  data: function () {
    return {
      childInputData: null,
    }
  },
  props: {
    staticProps: String,
    myProps: String,
  },
  methods: {
    ChildToParent: function () {
      this.$emit('child-to-parent','child Data') // 'child Data'는 MyComponent에서 inputData로 받아 콘솔에 출력
    },
    childInput: function () {
      this.$emit('child-input', this.childInputData)
      this.childInputData = ""
    }
  }
}
</script>

<style>

</style>