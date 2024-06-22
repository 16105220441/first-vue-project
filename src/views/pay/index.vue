<script setup>

import router from "@/router/index.js";
import {ref, onMounted,computed} from "vue";
import {showToast} from "vant";
import {getAddressList} from "@/api/address.js";
import {useRoute, useRouter} from "vue-router";
import {checkOrder} from "@/api/order.js";
import {cartStore} from "@/store/cartStore.js";


let message = ref()


let addressList = ref([])
let defaultAddress = computed(()=>{
  return addressList[0]
})
let longAddress = computed(()=>{
  const region = defaultAddress.value.region
  return region.province+region.city+region.region + defaultAddress.value.detail
})
const getAListOfAddresses = async ()=>{
  let {data:{list}} = await getAddressList()
  addressList.value = list
  // console.log(addressList.value)
}
getAListOfAddresses()

let mode = ref()
let getMode = ()=>{
  mode.value = useRoute().query.mode

}
getMode()

let cartIds = ref('')
let getCartId = ()=>{
   let cartList =  cartStore().getCartList()
 for(let i = 0; i < cartList.length; i++){
   cartIds.value += cartList[i].id
   if(i < cartList.length - 1){
     cartIds.value += ','
   }
 }
}
getCartId()

let Order = ref({})
let Personal = ref({})

let getOrderList = async ()=>{
  if(mode.value === 'cart'){
    let {data:{order,personal}} = await
        checkOrder(mode.value,{cartIds:cartIds.value})
    Order.value = order
    Personal.value = personal
  }
}
getOrderList()

const onSubmit = () => showToast('点击按钮');
</script>

<template>
  <div class="pay">
    <van-nav-bar title="订单结算台" left-arrow
                 @click-left="router.go(-1)" border fixed
                 placeholder></van-nav-bar>
    <van-row class="address">
      <div class="left-icon">
        <van-icon name="logistics"></van-icon>
      </div>
      <div class="info" v-if="defaultAddress">
        <div class="info-content">
          <span class="name">{{defaultAddress.name}}</span>
          <span class="mobile">{{defaultAddress.phone}}</span>
        </div>
        <div class="info-address">
         {{longAddress}}
        </div>
      </div>

      <div class="info" v-else style="margin-left: -180px">
        <span>请填写配送地址</span>
      </div>

      <div class="right-icon">
        <van-icon name="arrow"></van-icon>
      </div>
    </van-row>

    <!--
        <van-skeleton class="pay-list" :loading="loading"
                      style="padding: 10px 20px;border-bottom: 1px solid #d7d8da">
          <template #template>
            <div :style="{ display: 'flex', width: '100%'
            ,alignItems:'center'}">
              <van-skeleton-image>
                <van-image src=""></van-image>
              </van-skeleton-image>
              <div :style="{ flex: 1, marginLeft: '16px',}">
                <van-skeleton-paragraph>
                </van-skeleton-paragraph>
                <van-skeleton-paragraph>
                  <p class="info">
                    <span class="count">*3</span>
                    <span class="price">￥9.99</span>
                  </p>
                </van-skeleton-paragraph>
                <van-skeleton-paragraph class="flow-num-box">
                  <van-highlight
                      keywords="￥1219.00"
                      source-string="共 12 件商品，合计：￥1219.00"
                      highlight-class="custom-class"
                  />
                </van-skeleton-paragraph>
              </div>
            </div>
          </template>
        </van-skeleton>
    -->
    <div class="pay-list">
      <van-row  gutter="20" align="center" v-if="Order.goodsList" v-for="item
       in Order.goodsList" :key="item.goods_id">
        <van-col span="8">
          <van-image :src="item.goods_image" width="100%"></van-image>
        </van-col>

        <van-col span="16" class="right">
          <van-text-ellipsis rows="2"
                             :content="item.goods_name"></van-text-ellipsis>
          <van-row class="info" justify="space-between">
            <div>
              <span>*{{item.total_num}}</span>
            </div>
            <div>
              <span class="custom-class">¥{{item.total_pay_price}}</span>
            </div>
          </van-row>
        </van-col>
      </van-row>
    </div>

    <div class="pay-info">
      <van-row class="pay-detail">
        <div>订单总金额：</div>
        <div class="custom-class">￥{{Order.orderTotalPrice}}</div>
      </van-row>
      <van-row class="pay-cell">
        <div>优惠券：</div>
        <div>无优惠券可用</div>
      </van-row>
      <van-row class="pay-cell">
        <div>配送费用：</div>
        <div v-if="!defaultAddress">请先选择配送地址</div>
        <div v-else class="custom-class">+￥0.00</div>
      </van-row>
    </div>
    <div class="pay-cell">
      <van-row>支付方式</van-row>
      <van-row class="pay-cell-item" justify="space-between" >
        <div>
          <van-icon name="balance-o"/>
          <span>余额支付（可用 ¥{{Personal.balance}} 元）</span>
        </div>
        <div>
          <van-icon name="passed" color="#fe5731"/>
        </div>
      </van-row>
    </div>

    <van-cell-group inset>
      <van-field
          v-model="message"
          rows="2"
          autosize

          type="textarea"
          maxlength="50"
          placeholder="选填：买家留言（50字以内）"
          show-word-limit
          border
      />
    </van-cell-group>

    <van-submit-bar>
      <template #default>
        <div>
          <span>实付金额</span>
          <span class="custom-class">：￥{{Order.orderTotalPrice}}</span>
        </div>
      </template>
      <template #button>

        <van-button type="danger" @click="onSubmit" style="height: 100%">提交订单
        </van-button>

      </template>
    </van-submit-bar>

  </div>
</template>

<style lang="less" scoped>
::v-deep(.van-nav-bar) {
  .van-icon {
    color: #3c3c3c;
  }
}

.address {
  justify-content: space-between;
  border-bottom: 1px solid #d7d8da;
  padding: 10px 5px 10px 20px;

  .info {
    margin-left: -35px;
  }
}
.pay-list{
  padding: 10px 5px 10px 20px;
  border-bottom: 1px solid #d7d8da;

}
.pay-info{
  border-bottom: 1px solid #d7d8da;
  .pay-detail{
    padding: 10px 5px 10px 20px;
    justify-content: space-between;
  }
  .pay-cell{
    padding: 10px 5px 10px 20px;
    justify-content: space-between;
  }
}
.pay-cell{
  padding-left: 20px;
  padding-right: 5px;
  .van-row:not(.pay-cell-item){
    padding: 10px 0;
  }
}
.van-cell-group{
  margin-right: 0;
  .van-field{
    padding-left: 0;
  }
}
.custom-class {
  color: #fe5731;
}

.van-submit-bar {
  border-top: 1px solid #d7d8da;

  ::v-deep(.van-submit-bar__bar) {
    justify-content: space-between;
  }
}

</style>
