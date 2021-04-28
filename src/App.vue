<template>
  <div>
    <Nav/>
  <router-view />
  </div>
</template>

<script>
import Nav from './components/ngoc/nav'
export default {
  name: 'App',
  components: {
    Nav
  }

}
</script>

<style>
</style>
