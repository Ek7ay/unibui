<template>
  <div>
    <login-header></login-header>
    <login-background></login-background>
    <login-tail></login-tail>
  </div>
</template>

<script>
    import LoginHeader from './components/Header'
    import LoginBackground from './components/Background'
    import LoginTail from './components/Tail'

    export default {
        name: "Login",
        components: {
          LoginHeader,
          LoginBackground,
          LoginTail
        }
    }
</script>

<style scoped>

</style>
