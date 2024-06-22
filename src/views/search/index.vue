<script setup>
import {ref} from 'vue'
import {showToast} from "vant";
import router from "@/router/index.js";
import {getHistoryList, setHistoryList} from "@/utils/storage.js";

;

let history = ref(getHistoryList())
console.log('history', history)

let searchKey = ref('')


const goSearch = (item) => {
  console.log('items', item)
  const index = history.value.indexOf(item);

  if (index > -1) {
    history.value.splice(index, 1);
  }
  history.value.unshift(item);
  setHistoryList(history.value)
  console.log('history.value', history.value)
  console.log('getHistoryList', getHistoryList())
  router.push(`/searchList?search=${item}`)
}

const clear = () => {
  // showToast('clear已经被点击')
  setHistoryList([])
  history.value = getHistoryList()
  console.log('history', history)
}
</script>

<template>
  <div class="search">
    <van-nav-bar title="商品搜索" left-arrow @click-left="router.go(-1)"></van-nav-bar>
    <van-search
        v-model="searchKey"
        show-action
        placeholder="请输入搜索关键词"



    >

      <template #action >
        <van-button type="danger" text="搜索" size="small" @click="goSearch(searchKey)"></van-button>
      </template>
    </van-search>

    <div class="search-history" v-if="history?.length > 0">
      <div class="title">
        <van-nav-bar>
          <template #left>
            <span>最近搜索</span>
          </template>

          <template #right>
            <van-icon name="delete-o" size="16" color="#000000" @click="clear"/>
          </template>
        </van-nav-bar>
      </div>
    </div>
    <van-row :gutter="[10,10]">
      <van-col span="8" v-for="(item,index) in history" :key="index" @click="goSearch(item)">
        <van-button type="default" round block >{{ item }}</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<style lang="less" scoped>
.search {
  /deep/ .van-search__action {
    background-color: #c21401;
    color: #fff;
    width:15vw;
    //padding: 0 20px;
    padding:0;
    border-radius: 0 5px 5px 0;
    margin-right: 10px;

    .van-button {
      background-color: #c21401;
      border: 0;
      padding: 0;
      display: block;
      width: 100%;

    }
  }

  /deep/ .van-icon-arrow-left {
    color: #333;
  }

  .van-row {
    padding: 0 10px;

    .van-col {
      .van-button {
        width: 100%;
        text-overflow: ellipsis;
      }
    }
  }
}

</style>
