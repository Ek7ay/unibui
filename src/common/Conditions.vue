<template>
    <div class="conditions">
        <span class="redline"></span>
        <span class="writer">查询条件</span>
    </div>
</template>

<script>
    export default {
        name: "Conditions"
    }
</script>

<style lang="stylus" scoped>
    .conditions
        height 19px
        display flex
        align-items center
        .redline
            width 0
            height 12px
            border-radius 5px
            border 2.5px solid #ED1B23
        .writer
            margin-left 5px
            font-family PingFangSC-Medium
            font-weight 600
            font-size 16px
            color #333333
            line-height 24px
</style>