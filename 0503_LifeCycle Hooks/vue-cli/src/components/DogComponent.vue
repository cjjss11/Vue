<template>
  <div>
    <button @click="getDogImage">멍멍아 이리온</button><br><br>
    <img v-if="imgSrc" :src="imgSrc" alt="#"><br>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DogComponent',
  data() {
    return {
      imgSrc: null,
    }
  },
  methods: {
    getDogImage() {
      const dogImageSearchURL = 'https://dog.ceo/api/breeds/image/random'

      axios({
        methods: 'get',
        url: dogImageSearchURL
      })
        .then((response) => {
          const imgSrc = response.data.message
          this.imgSrc = imgSrc
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created() {
    this.getDogImage() // 이 코드가 없으면 처음 페이지 화면에 사진이 뜨지 않고 버튼을 클릭해야 사진이 뜸
    console.log('Dog created!')
    //const button = document.querySelector('button')
    // button.innerText = '멍멍!' // created 단계에서 toggle 버튼 이름을 멍멍으로 변경하면 바뀌지 않고 에러가 남
  },
  mounted() {
    console.log('Dog mounted!')
    //const button = document.querySelector('button')
    // button.innerText = '멍멍!' // toggle로 되어 있는 버튼 이름을 멍멍으로 변경하려면 mounted 단계에서 해야 함
  },
  updated() {
    console.log('새로운 멍멍이!')
    console.log('Dog updated!')
  }
}
</script>
