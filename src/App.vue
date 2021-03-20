<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">New MadLib</router-link> |
      <router-link to="/create">See MadLibs</router-link>
    </div>
    <router-view/>
    <div class="footer"><a href="https://github.com/joshuamoore5899/creative3">Github Link</a>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.footer {
  margin-top: 250px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #d21404;
}
</style>
