<template>
  <div>
    <login-header></login-header>
    <login-background></login-background>
    <login-tail></login-tail>
    <login-panel></login-panel>
  </div>
</template>

<script>
    import LoginHeader from './components/Header'
    import LoginBackground from './components/Background'
    import LoginTail from './components/Tail'
    import LoginPanel from './components/Panel'

    export default {
        name: "Login",
        components: {
          LoginHeader,
          LoginBackground,
          LoginTail,
          LoginPanel
        }
    }
</script>

<style scoped>

</style>
