<template>
  <div id="app">
    <happy-scroll hide-horizontal  size="8">
      <router-view></router-view>
    </happy-scroll>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {}
  }
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 16px;
  }
  .happy-scroll-container .happy-scroll-content{
    display: inline !important;
  }
</style>