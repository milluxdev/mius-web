<template>
  <div class="main-page">
    <div class="header-warpper">
      <TitleBar />
    </div>
    <div class="content-wrapper">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import TitleBar from './component/TitleBar';
  export default {
    name: 'home',
    components: {
      TitleBar
    }
  }
</script>
<style>
  .header-warpper {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1500;
  }

  .content-wrapper {
    padding-top: 5px;
    margin-top: 80px;
  }

  .container {
    width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
</style>