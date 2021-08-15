<template>
  <div id="app">
    <div class="title">
      <h1>带盐优选</h1>
    </div>
    <div id="nav">
      <router-link to="/">带盐商城</router-link> |
      <router-link to="/cart">购物车({{ getTotalCount }})</router-link>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('goodsList', ['getTotalCount'])
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    width: 100%;
    color: #f2aa3c;
    text-align: center;
    font-size: 40px;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
