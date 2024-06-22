<script setup>
import {ref} from 'vue';
import {showToast} from "vant";
import {cartStore} from "@/store/cartStore.js";

const active = ref(0);
const onChange = (index) => showToast(`标签 ${index}`);
</script>

<template>
  <router-view></router-view>
  <van-tabbar v-model="active" @change="onChange" active-color="#ee0a24"

              route fixed >
    <van-tabbar-item icon="wap-home-o" to="/home">首页
    </van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" to="/cart"
                     v-if="cartStore().cartInfo.totalNum > 0"
                     :badge="cartStore().cartInfo.totalNum">购物车
    </van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" to="/cart"
                     v-else
    >购物车
    </van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
  </van-tabbar>
</template>

<style lang="less" scoped>

</style>
