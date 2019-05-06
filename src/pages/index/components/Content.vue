<template>
    <div class="content">
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
    .content
      position absolute
      top 87px
      left 256px
      right 12px
      bottom 0px
      overflow-x  auto
</style>
