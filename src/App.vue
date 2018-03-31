<template lang="pug">
  #app
    ark-header
    router-view
    ark-footer
</template>

<script>
  import ArkHeader from '@/components/layout/Header.vue'
  import ArkFooter from '@/components/layout/Footer.vue'

  export default {
    name: 'app',
    components: {ArkHeader, ArkFooter}
  }
</script>

<style lang="scss">
  @import "scss/main.scss";
</style>
