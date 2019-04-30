<template>
    <div class="header">
      <img class="img1" src="static/img/login/liantongLogo.png" height="48" width="88"/>
      <img class="img2" src="static/img/login/Group.png" height="21" width="252"/>
    </div>
</template>

<script>
    export default {
        name: "LoginHeader"
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    width 100%
    height 70px
    display flex
    align-items center
    background-color $white
    position absolute
    top 0
    z-index 10
    .img1
      margin-left 73px
    .img2
      margin-left 13px
</style>
