<script setup>
import {ref,reactive} from "vue"
import router from "@/router/index.js";
import {getAddressList, update_defaultAddress} from "@/api/address.js";
import {userStore} from "@/store/userStore.js";


const chosenAddressId = ref('1');
let list = reactive([])
const AddressList = async () => {

  const {data: {shoppAddressList}} = await
      getAddressList(userStore().userInfo.userId)

  if (shoppAddressList?.length > 0) {
    if (shoppAddressList[0].shoppingAddressDetails?.length > 0)
      for (let i = 0; i < shoppAddressList[0].shoppingAddressDetails.length;
           i++) {
        list.push({
          id: shoppAddressList[0].shoppingAddressDetails[i].addressDetailId,
          name: shoppAddressList[0].shoppingAddressDetails[i].name,
          tel: shoppAddressList[0].shoppingAddressDetails[i].tel,
          address: shoppAddressList[0].shoppingAddressDetails[i].province !==
          shoppAddressList[0].shoppingAddressDetails[i].city ?
              shoppAddressList[0].shoppingAddressDetails[i].province + shoppAddressList[0].shoppingAddressDetails[i].city + shoppAddressList[0].shoppingAddressDetails[i].country + shoppAddressList[0].shoppingAddressDetails[i].addressDetail :
              shoppAddressList[0].shoppingAddressDetails[i].city +
              shoppAddressList[0].shoppingAddressDetails[i].country  + shoppAddressList[0].shoppingAddressDetails[i].addressDetail,
          isDefault:shoppAddressList[0].shoppingAddressDetails[i].isDefault
              === 'true' ?
              shoppAddressList[0].shoppingAddressDetails[i].isDefault : null
        })
      }

  }
}
AddressList()

const onAdd = () => {

  router.push({
    name: "addressEdit", query: {
      type: "add"
    }
  })
};

const onEdit = (item, index) => {
  console.log(item)
  router.push({
    name: "addressEdit", query: {
      type: "update",
      addressDetailId:item.id
    }
  })
}

const  onselect = async (item,index)=>{

  await update_defaultAddress(item.id,userStore().userInfo.userId);
  await router.push({name: 'pay'})
}
</script>

<template>
  <div>
    <van-nav-bar :title="list.length > 0 ? '收货地址':'新建收货地址'" left-arrow
                 @click-left="router.go(-1)"
                 fixed
                 placeholder></van-nav-bar>
    <main>
      <van-address-list
          v-model="chosenAddressId"
          :list="list"
          default-tag-text="默认"
          @add="onAdd"
          @select="onselect"
          @edit="onEdit"
      />
    </main>
  </div>
</template>

<style scoped lang="less">
::v-deep(.van-nav-bar) {
  .van-icon {
    color: #333
  }
}

main {
  ::v-deep(.van-address-list) {
    .van-button--round {
      background-color: #c21401;
      box-shadow: none;
      border: #c21401;
    }
  }
}
</style>
