<script setup>

import router from "@/router/index.js";
import {computed, ref} from "vue";
import {showToast} from "vant";
import {get_defaultAddress} from "@/api/address.js";
import {useRoute} from "vue-router";
import '@/assets/icon.css'
import {getCartList} from "@/api/cart.js";
import {userStore} from "@/store/userStore.js";

let message = ref()


let addressList = ref([])

let longAddress = computed(() => {
  const region = defaultAddress.value.region
  return region.province + region.city + region.region + defaultAddress.value.detail
})
/*const getAListOfAddresses = async () => {
  let {data: {list}} = await getAddressList()
  addressList.value = list
  // console.log(addressList.value)
}
getAListOfAddresses()*/

let mode = ref()
let getMode = () => {
  mode.value = useRoute().query.shopping_detailIdList

}
getMode()

let Order = ref({})


let getOrderList = async () => {

  let {data: {cartList}} = await
      getCartList(userStore().userInfo.userId, mode.value)
  Order.value = cartList
}
getOrderList()

let totalPrice = computed(() => {
  let total = 0

  for (let i = 0; i < Order.value.length; i++) {
    total =
        Number((total + Order.value[i].shoppingCartDetails[0].itemTotalPrice).toFixed(2))
  }
  return total
})

const onSubmit = () => showToast('点击按钮');
const value = ref(0)
const menuRef = ref(null);
const itemRef = ref();

const options = [
  {text: '微信支付', value: 0, icon: 'iconalis icon-weixinzhifu1',},
  {text: '银行卡支付', value: 1, icon: 'iconalis icon-yinhangqiazhifu'},
  {text: '抖音支付', value: 2, icon: 'iconalis icon-svg-plat-douyin000'},
];

let default_address = ref()
const getDefaultAddress = async () => {
  let {data: {defaultAddress}} = await
      get_defaultAddress("true", userStore().userInfo.userId)
  if (defaultAddress !== null) {
    default_address.value = defaultAddress
  }

}
getDefaultAddress()
</script>

<template>
  <div class="pay">
    <van-nav-bar title="订单结算台" left-arrow
                 @click-left="router.go(-1)" border fixed
                 placeholder></van-nav-bar>
    <van-row class="address" @click="()=>{
        router.push({name:'addressList'})
    }">
      <div class="left-icon">
        <van-icon name="logistics"></van-icon>
      </div>
      <div class="info" v-if="default_address"
      >
        <div class="info-content">
          <span class="name">{{ default_address.name }}</span>


          <span class="mobile">
          {{ default_address.tel }}</span>

        </div>
        <van-text-ellipsis rows="2" class="info-address"
                           :content="default_address.province+default_address.city+default_address.county+default_address.addressDetail">

        </van-text-ellipsis>
      </div>

      <div class="info" v-else>
        <span>请填写配送地址</span>

      </div>

      <div class="right-icon">
        <van-icon name="arrow"></van-icon>
      </div>
    </van-row>

    <div class="pay-list">
      <van-row gutter="20" align="center" v-if="Order"
               v-for="(item,index)
       in Order" :key="index">
        <van-col span="8">
          <van-image
              :src="item.shoppingCartDetails[0].products.productImage"
              width="100%"></van-image>
        </van-col>

        <van-col span="16" class="right">
          <van-text-ellipsis rows="2"
                             :content="item.shoppingCartDetails[0].products.name"></van-text-ellipsis>
          <van-row class="info" justify="space-between">
            <div>
              <span>*{{ item.shoppingCartDetails[0].quantity }}</span>
            </div>
            <div>
              <span class="custom-class">¥{{
                  item.shoppingCartDetails[0].itemTotalPrice
                }}</span>
            </div>
          </van-row>
        </van-col>
      </van-row>
    </div>

    <div class="pay-info">
      <van-row class="pay-detail">
        <div>订单总金额：</div>
        <div class="custom-class">￥{{ totalPrice }}</div>
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
      <van-row style="color: #c21401">支付方式:</van-row>
      <van-row class="pay-cell-item" justify="space-between">
        <div style="width: 100%">
          <van-dropdown-menu ref="menuRef" class="van-icon-iconalis" direction="up">
            <van-dropdown-item ref="itemRef" v-model="value" :options="options"
                               :title-class="options[value].icon"


            >
            </van-dropdown-item>
          </van-dropdown-menu>
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
          <span class="custom-class">：￥{{ totalPrice }}</span>
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
  align-items: center;
  padding: 10px 5px 10px 20px;

  .info {
    width: 250px;
  }
}

.pay-list {
  padding: 10px 5px 10px 20px;
  border-bottom: 1px solid #d7d8da;

}

.pay-info {
  border-bottom: 1px solid #d7d8da;

  .pay-detail {
    padding: 10px 5px 10px 20px;
    justify-content: space-between;
  }

  .pay-cell {
    padding: 10px 5px 10px 20px;
    justify-content: space-between;
  }
}

.pay-cell {
  padding-left: 20px;
  padding-right: 5px;

  .van-row:not(.pay-cell-item) {
    padding: 10px 0;
  }
}

.van-cell-group {
  margin-right: 0;

  .van-field {
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

.van-dropdown-menu {
  border-bottom: 2px solid gray;

  ::v-deep(.van-dropdown-menu__bar) {
    box-shadow: none;

    .van-haptics-feedback {
      width: 100%;

      .van-dropdown-menu__title {
        padding-left: 0;
        display: flex;
        width: 100%;
        flex-direction: row-reverse;
        justify-content: space-between;

      }
    }
  }

}

</style>
