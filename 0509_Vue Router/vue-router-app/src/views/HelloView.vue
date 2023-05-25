<template>
  <div>
    <!-- params는 URL로 데이터를 전달 -->
    <!-- <h1>Hello, {{ $route.params.userName }}</h1> -->
    <h1>Hello, {{ userName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloView',
  data() {
    return {
      userName: this.$route.params.userName
    }
  }
}
</script>