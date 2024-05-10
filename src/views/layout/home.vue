<script setup>
import {ref, reactive} from "vue"
import GoodsItem from "@/components/GoodsItem.vue";
import {getHomeData} from "@/api/home.js";
import {useRouter} from "vue-router";


const finished = ref(false);
let bannerList = reactive([])
let navList = reactive([])
let proList = reactive([])
const router = useRouter()
const getPageData = async () => {
  let {data: {pageData: {items}}} = await getHomeData();
  console.log('items', items)
  // 使用 Vue 提供的响应式 API 来更新响应式对象的值
  bannerList.splice(0, bannerList.length, ...items[1].data);
  // 或者使用循环遍历赋值
  // bannerList.length = 0;
  // bannerList.push(...items[1].data);

  // 更新其他响应式对象的值
  navList.splice(0, navList.length, ...items[3].data);
  proList.splice(0, proList.length, ...items[6].data);
  console.log('bannerList', bannerList[0])
}
getPageData()

const navigateToSearch = ()=>{
  router.push('/search')
}
</script>

<template>
  <div class="page">
    <van-nav-bar title="智慧商城" fixed></van-nav-bar>

    <van-search  placeholder="请输入搜索关键词" background="#f1f1f2" readonly shape="round" @click="navigateToSearch"/>
    <main>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">

        <van-swipe-item v-for="(item,index) in bannerList" :key="index">
          <img :src="item.imgUrl" alt="">
        </van-swipe-item>
      </van-swipe>
      <van-grid :column-num="5">
        <van-grid-item v-for="(item,index) in navList" :key="index" :icon="item.imgUrl" :text="item.text"/>
      </van-grid>

      <div class="main">
        <img src="@/assets/main.png" alt="">
      </div>
      <div class="guess">
        <p class="guess-title">——猜你喜欢——</p>
        <van-list
            :finished="finished"
            finished-text="没有更多了"
        >
          <van-cell v-for="(item,index) in proList" :key="index">
            <GoodsItem :data-item="item" class="goods-item" :class="index==proList.length-1 ? 'end' : '' "></GoodsItem>
          </van-cell>
        </van-list>
      </div>

    </main>
  </div>
</template>

<style lang="less" scoped>
.page {
  height: 100%;
}

.van-nav-bar {
  z-index: 999;
  background-color: #c21401;

  ::v-deep .van-nav-bar__title {
    color: #ffffff;
  }
}

.van-search {
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  top: 46px;
  z-index: 999;
  padding-left: 5%;
  padding-right: 5%;
  //padding:0 10%;
}

main {
  position: relative;
  top: 100px
}

.my-swipe {
  .van-swipe-item {
    height: 185px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #39a9ed;

    img {
      width: 100%;
      height: 185px;
    }
  }
}

.main img {
  display: block;
  width: 100%;
}

.guess {
  .guess-title {
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #f6f6f6;
  }

  .van-list {
    background-color: #f6f6f6;
    height:100vh;

    .van-cell {
      background-color: #f6f6f6;
      padding: 0;

      .goods-item {
        margin-bottom:10px;
        background-color: #fff;
      }
      .goods-item.end{
        margin-bottom:50px
      }
    }


  }

}

</style>
