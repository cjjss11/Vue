<template>
  <div class="border">
    <h1>This is MyComponent</h1>
    <MyChild static-props="component(부모)에서 child로"
    :my-props="dynamicProps"
    @child-to-parent="parentGetEvent"
    />
    <MyChild static-props="1"
    :my-props="1"
    @child-to-parent="parentGetEvent"
    />
  </div>
</template>

<script>
import MyChild from '@/components/MyChild'

export default {
  name: 'MyComponent',
  components: {
    MyChild,
  },
  data: function () {
    return {
      dynamicProps: "It is a data"
    }
  },
  methods: {
    parentGetEvent(inputData) {
      console.log('자식 컴포넌트에서 발생한 이벤트!')
      console.log(`child에서 보낸 ${inputData}를 받음!`)
    }
  }
}
</script>

<style>
  .border {
    border: solid;
  }
</style>