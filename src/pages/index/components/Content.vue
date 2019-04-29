<template>
    <div class="main">
      <router-view/>
    </div>
</template>

<script>
    export default {
        name: "Content"
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .main
      position fixed
      top 87px
      left 256px
      right 12px
      bottom 0px
</style>
