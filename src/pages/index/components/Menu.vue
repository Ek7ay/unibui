<template>
    <div class="main">
        <el-col :span="24">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                @select="handleSelect"
                background-color="#262A36"
                text-color="#fff"
                active-text-color="#ffd04b"
            >
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                   
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
               

                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>

                </el-submenu>

                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>导航2</span>
                    </template>
                    <el-menu-item index="2-1" disabled="">选择1</el-menu-item>
                    <el-menu-item index="2-2">选择2</el-menu-item>
                </el-submenu>

                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>

                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        methods: {
            handleOpen (key, keyPath) {
                console.log("展开" + key, keyPath);
            },
            handleClose (key, keyPath) {
                console.log("收起" + key, keyPath);
            },
            handleSelect (key, keyPath) {
                console.log("选中key" + " " + key)
                console.log("选中keyPath" + " " + keyPath)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .main
        width 244px
        margin-top -1px
        overflow auto
        height 92.35vh
        background #262A36
        overflow inherit
    .main [class*=el-col-]
        position relative
        left 1px
</style>
