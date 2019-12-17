<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  height: 49px;
  text-align: center;
  background-color: #f2f2f2;
  box-shadow: 0 -2px 3px rgba(100, 100, 100, 0.1);
}

</style>