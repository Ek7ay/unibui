<template>
    <div class="main">
      <span class="sp">© 2018 中国联通江苏省分公司 All rights reserved</span>
    </div>
</template>

<script>
    export default {
        name: "Tail"
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .main
    width 100%
    height 46px
    background-color $white
    position absolute
    bottom 0
    z-index 10
    display flex
    align-items center
    justify-content center
    .sp
      font-size 14px
      color #666666
      font-family PingFang-SC-Medium
      font-weight 500
</style>
