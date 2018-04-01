<template lang="pug">
  div
    p {{ count }}
    p {{ doubleCount }}
    button( @click="increment") +
    button( @click="decrement") -
    p
      button( @click="increment10") +10
    ul(v-for="arknew in arknews")
      ark-news(:arknew="arknew")
</template>
<script>
  import api from '@/api'
  import ArkNews from '@/components/news.vue'
  import { mapMutations, mapState, mapGetters } from 'vuex'

  export default {
    components: {ArkNews},
    data () {
      return {
        arknews: ''
      }
    },
    computed: {
      ...mapState(['count']),
      ...mapGetters(['doubleCount'])
    },
    methods: {
      ...mapMutations(['increment', 'decrement']),
      increment10 () {
        this.$store.commit('increment10', {
          number: 10
        })
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
