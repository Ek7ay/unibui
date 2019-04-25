<template>
    <div class="header">
      <img class="img1" src="../../../assets/img/login/liantongLogo.png" height="48" width="88"/>
      <img class="img2" src="../../../assets/img/login/Group.png" height="21" width="252"/>
      <i class="el-icon-edit"></i>
      <i class="el-icon-toilet-paper"></i><i class="el-icon-toilet-paper"></i><i class="el-icon-toilet-paper">
      </i><i class="el-icon-toilet-paper"></i>
      <i class="el-icon-toilet-paper">
      </i><i class="el-icon-toilet-paper"></i><i class="el-icon-toilet-paper"></i>
    </div>
</template>

<script>
    export default {
        name: "LoginHeader",
        data () {
          return{
            from: {
              name: ""
            }
          }
        }
    }
</script>

<style lang="stylus" scoped>
.header
  width 100%
  height 50px
  display flex
  align-items center
  border 1px solid red




</style>
