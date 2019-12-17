<template>
  <div class="tab-bar-item" @click="changeRouterPath">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-active-icon"></slot></div>
    <div :style="styleActive"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    style: {
      type: String,
      default: '#ff5777'
    }
  },
  data() {
    return {
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    styleActive() {
      return this.isActive ? {color: this.style} : {}
    }
  },
  methods: {
    changeRouterPath() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #666;
}
.tab-bar-item .tab-bar-img {
  width: 22px;
  height: 22px;
  vertical-align: middle;
}
.tab-bar-item {
  margin-top: 2px;
}

</style>