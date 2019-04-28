<template>
    <div>
      <index-header></index-header>
      <index-menu></index-menu>
    </div>
</template>

<script>
    import IndexHeader from './components/Header'
    import IndexMenu from './components/Menu'

    export default {
        name: "Index",
        components: {
          IndexHeader,
          IndexMenu
        }
    }
</script>

<style scoped>

</style>
