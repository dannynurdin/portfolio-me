<template>
  <div id="app">
    <div id="nav">
      <router-link class="font-bold px-2 py-2 mt-4 mb-4" to="/">Home</router-link> |
      <router-link class="font-bold px-2 py-2 mt-4 mb-4" to="/project">Project</router-link> |
      <router-link class="font-bold px-2 py-2 mt-4 mb-4" to="/profile">Profile</router-link>
    </div>
      <router-view/>
  </div>
</template>

<style src="@/assets/style/tailwind.css"></style>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
