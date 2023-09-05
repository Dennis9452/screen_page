<template>
  <div> 功能列表 </div>
  <p class="nav">
    <router-link to="/screenList"> screenList </router-link> 
    <router-link to="/playlistCompare"> playlistCompare </router-link>
    <router-link to="/efkLog"> efkLog </router-link>
  </p>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
