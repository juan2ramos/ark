<template lang="pug">
  div
    ul(v-for="arknew in arknews")
      ark-news(:arknew="arknew")
</template>
<script>
  import api from '@/api'
  import ArkNews from '@/components/news.vue'

  export default {
    components: {ArkNews},
    data () {
      return {
        arknews: ''
      }
    },
    created () {
      api.getPost().then(r => {
        this.arknews = r
      })
    }
  }
</script>

<style scoped></style>
