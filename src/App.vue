<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
}
html{height:100%}
body{min-height:100%}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  min-height:100%;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  min-height:100%;
  padding: 0px;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
}

</style>
