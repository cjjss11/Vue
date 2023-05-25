<template>
    <div>
        <h1>점심메뉴</h1>
        <button @click="pickLunch">Pick Lunch</button>
        <p>{{ selectedLunch }}</p>
        <br>
        <h2>로또를 뽑아보자</h2>
        <button @click="pickLottoNum">Pick Lotto</button>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'TheLunch',
    data: function () {
        return {
            lunch: ['떡볶이','탕수육','피자','치킨'],
            selectedLunch: null,
        }
    },
    methods: {
        pickLunch: function () {
            this.selectedLunch = _.sample(this.lunch)
        },
        pickLottoNum: function () {
            this.$router.push({ name: 'TheLotto', params: { lottoNum: 6 }})
        }
    }
}
</script>
