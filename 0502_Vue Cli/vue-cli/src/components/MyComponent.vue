<template>
  <div class="border">
    <h1>This is MyComponent</h1>
    <MyChild />
    <MyChild />
    <MyChild />
    <MyChild />
  </div>
</template>

<script>
import MyChild from '@/components/MyChild'

export default {
  name: 'MyComponent', // 변수명을 바꾸려면 여기서 바꿔야 함
  components: {
    MyChild,
  }
}
</script>

<style>
  .border {
    border: solid;
  }
</style>