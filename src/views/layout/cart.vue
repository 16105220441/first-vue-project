<script setup>
import {ref,reactive} from  'vue';
const isLogin = ref(false)
const carList = reactive([{

}])
</script>

<template>
  <div class="cart">
    <van-nav-bar title="购物车" fixed></van-nav-bar>
    <div v-if="isLogin && carList.length > 0"></div>
    <div class="empty-cart" v-else>
      <van-image src="src/assets/empty.png" alt=""></van-image>
      <div class="tips">
        您的购物车是空的，快去逛逛吧
      </div>
      <van-button type="danger">去逛逛</van-button>
    </div>
  </div>
</template>

<style scoped>
.cart{
  padding-top: 46px;
  padding-bottom: 100px;
  background-color: #f5f5f5;
  min-height: 100vh;
}
.empty-cart{
  padding: 80px 30px;
  .van-image{
    width:140px;
    height:92px;
    display:block;
    margin: 0 auto;
  }
  .tips{
    text-align:center;
    color:#666;
    margin:20px;
  }
  .van-button {
    width:110px;
    height: 32px;
    line-height:32px;
    border-radius:16px;
    display:block;
    margin: 0 auto;
  }
}
</style>
