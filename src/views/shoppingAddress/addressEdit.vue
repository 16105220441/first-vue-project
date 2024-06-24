<script setup>
import {areaList} from '@vant/area-data';
import {ref} from "vue"
import router from "@/router/index.js";
import {useRoute} from "vue-router"
import {
  add_addressDetail, delete_address,
  get_addressDetail,
  update_addressDetail,
  update_defaultAddress
} from "@/api/address.js";
import {userStore} from "@/store/userStore.js";
import {showConfirmDialog, showSuccessToast} from "vant";

let type = ref()
let address_detail = ref()

const route = useRoute()

const get_addressDetail_info = async (val) => {
  let {data: {addressDetail}} = await get_addressDetail(val)
  address_detail.value = {
    name: addressDetail.name,
    province: addressDetail.province,
    city: addressDetail.city,
    county: addressDetail.county,
    addressDetail: addressDetail.addressDetail,
    isDefault: addressDetail.isDefault === 'true',
    tel: addressDetail.tel
  }
}
const getRouteQuery = () => {
  console.log(useRoute())
  type.value = useRoute().query.type
  if (type.value === 'update') {
    get_addressDetail_info(useRoute().query.addressDetailId)
  }

}
getRouteQuery()

const onSave = async (address) => {
  address.customerId = userStore().userInfo.userId;
  if (type.value === 'add') {
    let {code} = await add_addressDetail(address);

    if (code === 200) {
      showSuccessToast('添加成功');

    }
  } else {
    if (type.value === 'update') {
      address.addressDetailId = route.query.addressDetailId
      console.log(address)
      let {code} = await update_addressDetail(address)

      if (address.isDefault) {
        let res = await update_defaultAddress(address.addressDetailId, address.customerId)
        if (code === 200 && res.code === 200) {
          showSuccessToast('修改成功');

        }
      } else {
        if (code === 200 && res.code === 200) {
          showSuccessToast('修改成功');

        }
      }

    }
  }

  router.go(-1)

}
const searchResult = ref([]);
const onChangeDetail = (val) => {
  if (val) {
    searchResult.value = [
      {
        name: '黄龙万科中心',
        address: '杭州市西湖区',
      },
    ];
  } else {
    searchResult.value = [];
  }
};
const onright = () => {
  showConfirmDialog({
    title: '是否删除该地址',

  })
      .then(async () => {
        // on confirm
        await delete_address(route.query.addressDetailId)
        router.go(-1)
      })
      .catch(() => {
        // on cancel

      });
}

</script>

<template>

  <div>
    <van-nav-bar :title="type === 'add' ? '新建收货地址':'修改收货地址'"
                 left-arrow
                 :right-text="type ==='add' ? '':'删除'" @click-right="onright"
                 @click-left="router.go(-1)"
                 fixed
                 placeholder></van-nav-bar>
    <main>
      <van-address-edit
          :area-list="areaList"
          :address-info="address_detail"
          show-set-default
          show-search-result
          show-area
          :search-result="searchResult"
          :area-columns-placeholder="['请选择', '请选择', '请选择']"
          @save="onSave"
          @change-detail="onChangeDetail"
      />
    </main>


  </div>

</template>

<style scoped lang="less">
::v-deep(.van-nav-bar) {
  .van-nav-bar__right{
    span{
      color: #1c1c1e;
    }

  }
  .van-icon {
    color: #333
  }
}

.van-address-edit {
  ::v-deep(.van-switch--on) {
    background-color: #c21401;
  }

  ::v-deep(.van-button[type='submit']) {
    background-color: #c21401;
    border: #c21401;
    box-shadow: none;
  }
}
</style>
