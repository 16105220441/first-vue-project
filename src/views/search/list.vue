<script setup>
import {onBeforeMount, onMounted, ref} from 'vue'
import {useRoute} from "vue-router";
import {goodList} from "@/api/product.js";
import GoodsItem from "@/components/GoodsItem.vue";
import {setHistoryList} from "@/utils/storage.js";
import router from "@/router/index.js";

let querySearch = ref('')
let categoryId = ref('')
const route = useRoute();

const proList = ref([])
const resetQuerySearch = (() => {

})


const getGoodsData = async () => {
  let {data: {productsData}} = await goodList({
    goodsName: querySearch.value,
    categoryId:categoryId.value
    // page: 1
  })

  proList.value = productsData.list
}
const reGetGoodsData = () => {

  router.push({name:'search'})


}

onMounted(() => {
  getGoodsData()
})

onBeforeMount(() => {
  // 通过route.query来获取查询参数
  querySearch.value = route.query.search
  categoryId.value = route.query.categoryId
  // console.log(searchParam); // 这里将输出 "手机"，对应你提供的示例中的查询参数
});
</script>

<template>
  <div class="search">
    <van-nav-bar
        title="商品列表"
        left-arrow
        fixed
        @click-left="router.go(-1)"
    />
    <van-search v-model="querySearch" placeholder="请输入搜索关键词" shape="round"
                @click-left-icon="reGetGoodsData" @focus="reGetGoodsData"

                show-action>
      <template #action>
        <van-icon name="apps-o"/>
      </template>
    </van-search>
    <van-row gutter="20">
      <van-col span="8">综合</van-col>
      <van-col span="8">销量</van-col>
      <van-col span="8">价格</van-col>
    </van-row>

    <div class="main" >
      <GoodsItem v-for="(item,index) in proList" :key="index" :data-item="item"  ></GoodsItem>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search {
  min-height: 100vh;

  /deep/ .van-nav-bar {
    .van-nav-bar__title {
      font-weight: normal;
    }

    .van-icon {
      color: #3c3c3c;
    }
  }

  .van-search {
    width: 100%;
    position: fixed;
    top: 46px;

    .van-icon {
      font-size: 24px;
      line-height: 24px;
    }
  }

}

.van-row {
  position: relative;
  top: 100px;
  margin-top: 10px;
  text-align: center;
}
</style>
