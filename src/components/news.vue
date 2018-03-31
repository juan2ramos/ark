<template lang="pug">
  div
    li {{arknew.title.rendered}}
      p( v-html="arknew.content.rendered" )
</template>

<script>
  export default {
    props: {
      arknew: { type: Object, required: true }
    }
  }
</script>

<style scoped>

</style>