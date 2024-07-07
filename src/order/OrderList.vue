<script setup>
import {ref,reactive} from "vue"
import {get_orderList} from "@/api/order.js";
import {userStore} from "@/store/userStore.js";
import router from "@/router/index.js";
import GoodsItem from "@/components/GoodsItem.vue";
import OrderList from "@/order/OrderList.vue";
import OrderComponent from "@/components/OrderComponent.vue";

const loading = ref(false);
const finished = ref(false);

let orderList = reactive([])
let pageNum = ref(1)
const getOrderList = async ()=>{
  let {data:{orderDetailList:{list,isLastPage}}} = await
      get_orderList(userStore().userInfo.userId,pageNum.value)
  for(let i = 0; i < list.length; i++){
    orderList.push(list[i])
  }
  if(!isLastPage){
    pageNum.value++
  }
  else{
    finished.value = true
  }
}
getOrderList()
</script>

<template>
<div class="order">
  <van-nav-bar
      title="我的订单"
      left-arrow
      @click-left="router.go(-1)"
  />
  <main>
    <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="orderList"
    >
      <van-cell v-for="(item,index) in orderList" :key="item">
        <order-component :content="item"></order-component>
      </van-cell>
    </van-list>
  </main>
</div>
</template>

<style scoped lang="less">
.van-nav-bar{
  ::v-deep(.van-nav-bar__left){
    .van-icon{
      color: #1c1c1e;
    }
  }
}

</style>
