import VueRouter from 'vue-router'
import Vue from 'vue'

// 导入各页面
import Home from 'components/home/Home'
import Cart from 'components/cart/Cart'
import Category from 'components/category/Category'
import Profile from 'components/profile/Profile'


// 1. 使用插件
Vue.use(VueRouter);

// 2. 创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

// 3. 导出路由
export default router