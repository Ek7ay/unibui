<template>
    <div class="search">
        <span class="lable">地市</span>
        <el-select v-model="value" placeholder="请选择">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
            >
            </el-option>
        </el-select>
        <span class="lable lable2">县区</span>
        <el-input
            class="xianqu"
            v-model="input"
            placeholder="请输入内容"
        >
        </el-input>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data () {
            return{
                input: "",
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ''
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .search
        padding 20px 0
        .lable
            margin-right 8px
            font-family MicrosoftYaHeiUI
            font-size 14px
            color #333333
            letter-spacing 0
            text-align right
        .lable2
            margin-left 20px
        .xianqu
            width 214px
</style>