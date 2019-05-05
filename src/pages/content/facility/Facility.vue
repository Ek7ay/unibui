<template>
    <div class="cus">
        <bread-crumbs></bread-crumbs>
        <common-conditions></common-conditions>
        <search></search>
        <sure-reset></sure-reset>
        <results></results>
        <my-form></my-form>
    </div>
</template>

<script>
    import BreadCrumbs from '@/common/BreadCrumbs'
    import CommonConditions from '@/common/Conditions'
    import Results from '@/common/Results'
    import Search from './components/Search'
    import SureReset from '@/common/SureReset'
    import MyForm from './components/MyForm'
    export default {
        name: "Facility",
        components: {
            BreadCrumbs,
            CommonConditions,
            Results,
            Search,
            SureReset,
            MyForm
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .cus
        background-color $white
        padding 0 20px
</style>