<template>
    <div class="main">
      <p>欢迎登陆</p>

      <div class="input-box">
        <el-input
          class="input1"
          v-model="a"
          prefix-icon="el-icon-user-solid"
        >
        </el-input>
      </div>

      <div class="input-box">
        <el-input
          class="input2"
          type="password"
          v-model="b"
          prefix-icon="el-icon-lock"
          suffix-icon="el-icon-view"
        >
        </el-input>
      </div>

      <el-checkbox v-model="checked">记住我</el-checkbox>

      <el-button type="primary">登录</el-button>
    </div>
</template>

<script>
    export default {
        name: "Panel",
        data () {
          return{
            checked: true,
            a: "",
            b: ""
          }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .main
    width 358px
    height 354px
    border-radius 5px
    background-color $white
    position fixed
    top 50%
    left  50%
    transform translate(70%, -50%)
    z-index 20px
  .main p
    font-size 18px
    font-family PingFang-SC-Medium
    font-weight 500
    color rgba(51,51,51,1)
    padding-left 40px
    line-height 68px
  .main >>> .el-input
    width 284px
    height 38px
    margin 16px 0 25px 0
  .main >>> .el-input input
    border 1px solid rgba(204,204,204,1)
  .main >>> .el-input i
    color #666666
  .main >>>  .input-box
    width 100%
    display flex
    justify-content center
  .main >>> .el-checkbox
    position relative
    left 37px
    bottom 10px
  .main >>> .el-button
    width 282px
    height 38px
    background rgba(235,74,75,1)
    border-radius 3px
    outline none
    border none
    font-size 18px
    font-family PingFang-SC-Medium
    font-weight 500
    color rgba(254,254,254,1)
    margin 23px 0 0 40px
    line-height 13px
</style>

