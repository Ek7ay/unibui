<template>
    <div>
      <index-header></index-header>
      <index-menu></index-menu>
      <index-content></index-content>
    </div>
</template>

<script>
    import IndexHeader from './components/Header'
    import IndexMenu from './components/Menu'
    import IndexContent from './components/Content'

    export default {
        name: "Index",
        components: {
          IndexHeader,
          IndexMenu,
          IndexContent
        }
    }
</script>

<style scoped>

</style>
