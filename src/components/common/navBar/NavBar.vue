<template>
  <div class="nav-bar">
    <div class="nav-bar-left">
      <slot name="nav-bar-left"></slot>
    </div>
    <div class="nav-bar-center">
      <slot name="nav-bar-center"></slot>
    </div>
    <div class="nav-bar-right">
      <slot name="nav-bar-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar"
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  text-align: center;
}
.nav-bar-left, .nav-bar-right {
  width: 60px;
}
.nav-bar-center {
  flex: auto;
}
</style>