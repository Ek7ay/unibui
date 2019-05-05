<template>
    <div class="headermain">
        <div class="logo-box">
            <img src="../../../../static/img/index/logo_new.png" height="57" width="155"/>
        </div>
        <img class="title" src="../../../../static/img/index/Group.png" height="21" width="252"/>
        <div class="dropbox">
            <img src="../../../../static/img/index/head.png" height="28" width="28"/>
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    欢迎您<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-back">退出</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-s-custom">个人信息</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-key">修改密码</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .headermain
        width 100%
        min-width 700px
        height 74px
        background-color $white
        border-bottom 1px solid #edeaea
        position absolute
        top 0
        .logo-box
            display inline-block
            width 244px
            line-height 74px
            background-color #ED514B
        .logo-box img
            margin-left 40px
        .title
            margin-left 10px
        .dropbox
            display inline-block
            float right
            line-height 74px
            margin-right 30px
            cursor pointer
</style>
