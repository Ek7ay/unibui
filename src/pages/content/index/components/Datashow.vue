<template>
    <div class="main">
      <img :src="imgpath" height="50" width="50"/>
      <span class="building">楼宇总量（栋）</span>
      <span class="nu">46767</span>
    </div>
</template>

<script>
    export default {
        name: "Datashow",
        data () {
          return{
            imgpath: "../../../../assets/img/index/1.png",
            building: ""
          }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.main
  width 33.3%
  line-height  97px
  background-color $white
  .main img
    margin-left 28px
  .building
    display inline
    margin-left 1.4%
    color #333333
    font-size 14px
    padding-bottom 5px
    padding-right 10px
    border-bottom 3px solid #FF7676
  .nu
    color: #333333;
    font-size: 28px;
    float right
    margin-right 32px
</style>
