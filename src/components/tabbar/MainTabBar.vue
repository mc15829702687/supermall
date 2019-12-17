<template>
  <tab-bar>
    <tab-bar-item v-for="(item, index) in tabBarList" :key="index" :path="item.path">
      <img :src="item.img" alt slot="item-icon" class="tab-bar-img" />
      <img :src="item.imgActive" alt slot="item-active-icon" class="tab-bar-img" />
      <div slot="item-text" class="tab-bar-text">{{item.text}}</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "components/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  data() {
    return {
      tabBarList: [
        {
          text: "首页",
          img: require("assets/img/tabbar/home.svg"),
          imgActive: require("assets/img/tabbar/home_active.svg"),
          path: "/home"
        },
        {
          text: "分类",
          img: require("assets/img/tabbar/category.svg"),
          imgActive: require("assets/img/tabbar/category_active.svg"),
          path: "/category"
        },
        {
          text: "购物车",
          img: require("assets/img/tabbar/cart.svg"),
          imgActive: require("assets/img/tabbar/cart_active.svg"),
          path: "/cart"
        },
        {
          text: "我的",
          img: require("assets/img/tabbar/profile.svg"),
          imgActive: require("assets/img/tabbar/profile_active.svg"),
          path: "/profile"
        }
      ]
    };
  },
  components: {
    TabBarItem,
    TabBar
  }
};
</script>

<style>
</style>