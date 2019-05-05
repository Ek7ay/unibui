<template>
    <div class="surereset">
        <el-button class="sure change" type="success">确定</el-button>
        <el-button class="change">重置</el-button>
    </div>
</template>

<script>
    export default {
        name: "SureReset"
    }
</script>

<style lang="stylus" scoped>
    .surereset
        text-align center
        margin-bottom 20px
        .sure
            background-color #ED1B23
            border-color #ED1B23
        .change
            width 80px
            height 40px
</style>