<script setup>
import {reactive, ref} from "vue"
import {
  getCarouselImg,

  getRecommendedProducts,
  getTopCategorise
} from "@/api/home.js";
import {useRouter} from "vue-router";
import GoodsItem from "@/components/GoodsItem.vue";


let bannerList = reactive([])
let navList = reactive([])
let proList = reactive([])
const router = useRouter()

const getBannerList = async () => {
  let {data: {carouselImg}} = await getCarouselImg()
  bannerList.splice(0, bannerList.length, ...carouselImg)
}
getBannerList()

const getNavList = async () => {
  let {data: {topCategorise}} = await getTopCategorise()
  navList.splice(0, navList.length, ...topCategorise);

}
getNavList()

const list = ref([]);
const loading = ref(false);
const finished = ref(false);
/*const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1);
    }

    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    if (list.value.length >= 40) {
      finished.value = true;
    }
  }, 1000);
};*/
let page = ref(1)
const getProList = async () => {
  let {data: {productsData:{list, isLastPage}}} = await
      getRecommendedProducts(page.value, 3)

  proList.push(...list)

  loading.value = false
  if (!isLastPage) {
    page.value++;
  } else {
    finished.value = true
  }
  console.log(list, isLastPage)

}
/*getProList()*/

const navigateToSearch = () => {
  router.push('/search')
}

</script>

<template>
  <div class="page">
    <van-nav-bar title="小小商城" fixed></van-nav-bar>

    <van-search placeholder="请输入搜索关键词" background="#f1f1f2" readonly
                shape="round" @click="navigateToSearch"/>

    <main>

      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">

        <van-swipe-item v-for="(item,index) in bannerList" :key="index">
          <img :src="item.imageUrl" alt="">
        </van-swipe-item>
      </van-swipe>

      <van-grid :column-num="5">
        <van-grid-item v-for="(item,index) in navList" :key="index"
                       :icon="item.imageUrl" :text="item.text"/>
      </van-grid>

      <div class="main">
        <img src="@/assets/main.png" alt="">
      </div>
      <div class="guess">
        <p class="guess-title">——猜你喜欢——</p>
        <van-list
            v-model:loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="getProList" offset="30"
        >
          <van-cell v-for="(item,index) in proList" :key="item">
            <GoodsItem :data-item="item"/>
          </van-cell>
        </van-list>
      </div>

    </main>
  </div>
</template>

<style lang="less" scoped>
.page {
  //height: 100%;
}

.van-nav-bar {
  z-index: 999;
  background-color: #c21401;

  ::v-deep(.van-nav-bar__title) {
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
  top: 100px;

  /*img {
    width: 100%;

  }*/
}

/*.main{
  img{
    display: block;
    width: 100%;
  }
}*/
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
    height: 100vh;

    .van-cell {
      background-color: #f6f6f6;
      padding: 0;

      .goods-item {
        margin-bottom: 10px;
        background-color: #fff;
      }

      .goods-item.end {
        margin-bottom: 50px
      }
    }


  }

}

</style>
