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
                active-text-color="#ed514b">
            >
                <el-submenu
                    :index="item.id"
                    v-for="item in menudata"
                    :key="item.id"
                >
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span>{{item.name}}</span>
                    </template>
                   
                    <el-menu-item
                        :index="subItem.childid"
                        v-for="subItem in item.children"
                        :key="subItem.childid"
                    >
                        <i :class="subItem.childicon"></i>
                        <span>{{subItem.childname}}</span>
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
                    "id" : "1",
                    "children": [{
                        "childname": "用户管理",
                        "childicon": "el-icon-platform-eleme",
                        "childid" : "1-1"
                    },{
                        "childname": "客户管理",
                        "childicon": "el-icon-c-scale-to-original",
                        "childid" : "1-2"
                    },{
                        "childname": "楼宇客户信息维护",
                        "childicon": "el-icon-s-order",
                        "childid" : "1-3"
                    },{
                        "childname": "商机客户管理",
                        "childicon": "el-icon-s-promotion",
                        "childid" : "1-4"
                    }]
                },{
                    "name": "系统监控",
                    "icon": "el-icon-eleme",
                    "id" : "2",
                    "children": [{
                        "childname": "在线用户",
                        "childicon": "el-icon-s-help",
                        "childid" : "2-1"
                    }]
                },{
                    "name": "商务楼宇",
                    "icon": "el-icon-menu",
                    "id" : "3",
                    "children": [{
                        "childname": "楼宇管理",
                        "childicon": "el-icon-s-unfold",
                        "childid" : "3-1"
                    },{
                        "childname": "客户管理",
                        "childicon": "el-icon-s-marketing",
                        "childid" : "3-2"
                    },{
                        "childname": "楼宇客户信息维护",
                        "childicon": "el-icon-s-opportunity",
                        "childid" : "3-3"
                    },{
                        "childname": "竞争产品管理",
                        "childicon": "el-icon-picture",
                        "childid" : "3-4"
                    },{
                        "childname": "客户到期管理",
                        "childicon": "el-icon-location",
                        "childid" : "3-5"
                    },{
                        "childname": "商机楼宇管理",
                        "childicon": "el-icon-success",
                        "childid" : "3-6"
                    },{
                        "childname": "商机客户管理",
                        "childicon": "el-icon-video-camera-solid",
                        "childid" : "3-7"
                    }]
                },{
                    "name": "空间资源",
                    "icon": "el-icon-s-tools",
                    "id" : "4",
                    "children": [{
                        "childname": "综合接入区管理",
                        "childicon": "el-icon-star-on",
                        "childid" : "4-1"
                    },{
                        "childname": "客户管理",
                        "childicon": "el-icon-message-solid",
                        "childid" : "4-2"
                    },{
                        "childname": "楼宇客户信息维护",
                        "childicon": "el-icon-share",
                        "childid" : "4-3"
                    },{
                        "childname": "商机客户管理",
                        "childicon": "el-icon-s-data",
                        "childid" : "4-4"
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
