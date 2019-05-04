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
                <el-submenu :index="index + 1" v-for="(item, index) in menudata" :key="index">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{item.name}}</span>
                    </template>
                   
                    <el-menu-item index="1-1" v-for="subItem in item.children" :key="subItem">
                        {{subItem.childname}}
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </el-col>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        data (){
            return{
                menudata: [{
                    "name": "系统管理",
                    "icon": "el-icon-location",
                    "children": [{
                        "childname": "用户管理",
                        "childicon": "el-icon-menu"
                    },{
                        "childname": "客户管理",
                        "childicon": "el-icon-menu"
                    },{
                        "childname": "楼宇客户信息维护",
                        "childicon": "el-icon-menu"
                    },{
                        "childname": "商机客户管理",
                        "childicon": "el-icon-menu"
                    }]
                },{
                    "name": "系统监控",
                    "icon": "el-icon-location",
                    "children": [{
                        "childname": "用户管理",
                        "childicon": "el-icon-menu"
                    },{
                        "childname": "客户管理",
                        "childicon": "el-icon-menu"
                    },{
                        "childname": "楼宇客户信息维护",
                        "childicon": "el-icon-menu"
                    },{
                        "childname": "商机客户管理",
                        "childicon": "el-icon-menu"
                    }]
                },{
                    "name": "商务楼宇",
                    "icon": "el-icon-location",
                    "children": [{
                        "childname": "用户管理",
                        "childicon": "el-icon-menu"
                    },{
                        "childname": "客户管理",
                        "childicon": "el-icon-menu"
                    },{
                        "childname": "楼宇客户信息维护",
                        "childicon": "el-icon-menu"
                    },{
                        "childname": "商机客户管理",
                        "childicon": "el-icon-menu"
                    }]
                },{
                    "name": "空间资源",
                    "icon": "el-icon-location",
                    "children": [{
                        "childname": "用户管理",
                        "childicon": "el-icon-menu"
                    },{
                        "childname": "客户管理",
                        "childicon": "el-icon-menu"
                    },{
                        "childname": "楼宇客户信息维护",
                        "childicon": "el-icon-menu"
                    },{
                        "childname": "商机客户管理",
                        "childicon": "el-icon-menu"
                    }]
                }]
          }
        },
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
        position absolute
        top 74px
        left 0
        bottom 0
        background #262A36
    .main .el-menu
        border-right 0px
</style>
