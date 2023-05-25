<template>
    <div>
        <h1>로또</h1>
        <button @click="getLuckyNumbers">Get Lucky Numbers</button>
        <p>{{ selectedLuckyNumbers }}</p>
    </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"></script>

<script>

export default {
    name: 'TheLotto',
    data: function () {
        return {
            sampleNums: [],
            selectedLuckyNumbers: [],
        }
    },
    methods: {
        getLuckyNumbers: function () {
            const numbers = _.range(1, 46)
            this.sampleNums = _.sampleSize(numbers, this.$route.params.lottoNum)
            this.selectedLuckyNumbers = _.sortBy(this.sampleNums)
        }
    }
}
</script>
