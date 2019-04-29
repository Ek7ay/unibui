<template>
    <div class="shuju">
      <img :src="imgpath"/>
      <span class="building">{{building}}</span>
      <span class="nu">{{nu}}</span>
    </div>
</template>

<script>
    export default {
        name: "Datashow",
        data () {
          return{
            imgpath: require("../../../../assets/img/index/1.png"),
            building: "楼宇总量（栋）",
            nu: 46767
          }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.shuju
  width 33.3%
  min-width 310px
  line-height  97px
  background-color $white
.shuju img
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
