<template lang="pug">
  div
    p {{ count }}
    p {{ doubleCount }}
    button( @click="increment") +
    button( @click="decrement") -
    p
      button( @click="increment10") +10
    p
      button( @click="incrementAsync") +Async
    ul(v-for="arknew in recentPost")
      ark-news(:arknew="arknew")
</template>
<script>
  import ArkNews from '@/components/news.vue'
  import {mapMutations, mapState, mapGetters} from 'vuex'

  export default {
    components: {ArkNews},
    created () {
      this.$store.dispatch('getPosts', {limit: 10})
    },
    computed: {
      ...mapState(['count', 'recent']),
      ...mapGetters(['doubleCount', 'recentPost'])
    },
    methods: {
      ...mapMutations(['increment', 'decrement']),
      increment10 () {
        this.$store.commit('increment10', {
          number: 10
        })
      },
      incrementAsync () {
        this.$store.dispatch('incrementAsync', {
          number: 2
        })
      }
    }
  }
</script>

<style scoped></style>
