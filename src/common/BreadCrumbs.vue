<template>
    <el-breadcrumb
        separator-class="el-icon-arrow-right"
        class="crumb"
    >
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: "BreadCrumbs"
    }
</script>

<style lang="stylus" scoped>
    .crumb
        padding 16px 0 16px 0px

</style>