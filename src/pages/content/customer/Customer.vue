<template>
    <div class="customer">
        <el-tabs
            class="test"
            v-model="activeName"
            @tab-click="handleClick"
        >
            <el-tab-pane label="用户管理" name="first">
                <div class="tab">

                </div>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "Customer",
        data () {
            return{
                activeName: 'second'
            }
        },
        methods: {
            handleClick (tab, event) {
                console.log(tab, event)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .customer
        background-color $white
        .test
            background-color $white
            .tab
                width 200px
                height 100px
                background-color red
</style>