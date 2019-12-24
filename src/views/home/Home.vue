<template>
  <div class="home">
    <nav-bar class="nav-bar">
      <div slot="nav-bar-center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" ref="hSwiper" class="swipper"></home-swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

import HomeSwiper from "./childComponents/HomeSwiper";

import { getSwipperData } from "network/homeData";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      banners: []
    };
  },
  created() {
    // 大图轮播数据
    getSwipperData().then(res => {
      this.banners = res.data.data;
    }).catch(err => console.log(err));
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.swipper {
  margin-top: 44px;
}
</style>