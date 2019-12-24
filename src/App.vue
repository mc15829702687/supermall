<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>

import MainTabBar from "components/content/mainTab/MainTabBar";

export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>

<style scoped>
  @import url("assets/css/normalize.css");
  @import url("assets/css/base.css");
</style>
