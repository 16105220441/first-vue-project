<script setup>

import router from "@/router/index.js";
import {ref} from "vue"
/*console.log('useRoute()',useRoute())*/
const images = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
];
let count = ref(5)
</script>

<template>
  <div class="proDetail">
    <van-nav-bar title="商品详情页" left-arrow @click-left="router.go(-1)" fixed
                 placeholder="true"></van-nav-bar>
    <div class="content">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
          <van-image :src="image" fit="cover"></van-image>
        </van-swipe-item>
        <template #indicator="{ active, total }">
          <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
        </template>
      </van-swipe>

      <div class="info">
        <div class="title">
          <div class="price">
            <span class="now">
              ￥0.01
            </span>
            <span class="oldPrice">
              ￥6699.00
            </span>
          </div>
          <div class="sellCount">
            已售1001件
          </div>
        </div>
        <van-text-ellipsis rows="2"
                           content="三星手机 SAMSUNG Galaxy S23 8GB+256GB 超视觉夜拍系统 超清夜景 悠雾紫 5G手机 游戏拍照旗舰机s23"
                           class="msg">

        </van-text-ellipsis>

        <div class="service">
          <div class="left-words">
            <span>
              <van-icon name="passed" color="#fa3030"></van-icon>
              七天无理由退货
            </span>
            <span>
              <van-icon name="passed" color="#fa3030"></van-icon>
              48小时发货
            </span>
          </div>
          <div class="right-icon">
            <van-icon name="arrow"></van-icon>
          </div>
        </div>
      </div>

      <div class="comment">

        <div class="comment-title">
          <div class="left">商品评价（9条）</div>
          <div class="right">
            <span>查看更多</span>
            <van-icon name="arrow" color="#959595"></van-icon>
          </div>
        </div>

        <div class="comment-list">
          <div class="comment-item" v-for="item in 3" :key="item">
            <div class="top">
              <img
                  src="http://smart-shop.itheima.net/uploads/10001/20230321/a0db9adb2e666a65bc8dd133fbed7834.png"
                  alt="">
              <div class="name">神雕大侠</div>
              <van-rate

                  :size="16"
                  color="#ffd21e"
                  void-icon="star"
                  void-color="#eee"
                  v-model="count"
              />
            </div>
            <div class="content">质量很不错，挺喜欢的</div>
            <div class="time">
              2023-03-21 15:01:35
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 商品描述 -->
    <div class="desc">
      <img src="https://uimgproxy.suning.cn/uimg1/sop/commodity/kHgx21fZMWwqirkMhawkAw.jpg" alt="">
      <img src="https://uimgproxy.suning.cn/uimg1/sop/commodity/0rRMmncfF0kGjuK5cvLolg.jpg" alt="">
      <img src="https://uimgproxy.suning.cn/uimg1/sop/commodity/2P04A4Jn0HKxbKYSHc17kw.jpg" alt="">
      <img src="https://uimgproxy.suning.cn/uimg1/sop/commodity/MT4k-mPd0veQXWPPO5yTIw.jpg" alt="">
    </div>

    <div class="footer">
      <van-action-bar placeholder>

        <van-action-bar-icon icon="wap-home-o" text="首页" to="/home"/>
        <van-action-bar-icon icon="shopping-cart-o" text="购物车" to="/cart"/>

            <van-row >
              <van-button type="warning" color="#ffa900" round>加入购物车</van-button>
              <van-button type="danger" round>立即购买</van-button>
            </van-row>




      </van-action-bar>
    </div>
  </div>
</template>

<style lang="less" scoped>
.proDetail {
  /deep/ .van-nav-bar {
    .van-icon {
      color: #333
    }
  }
}

.van-swipe {
  .van-swipe-item {
    position: relative;
    z-index: 10;
  }

  .custom-indicator {
    border-radius: 15px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 5px 15px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
}

.info {
  padding: 10px;

  .title {
    display: flex;
    justify-content: space-between;

    .now {
      //font-size:24px;
      font-size: 20px;
      color: #fa2209;
    }

    .oldPrice {
      color: #959595;
      text-decoration: line-through;
    }

    .sellCount {
      color: #959595;
    }
  }
}

.service {
  margin-top: 10px;
  background-color: #fafafa;
  display: flex;
  justify-content: space-between;

}

.comment {
  padding: 10px;

  .comment-title {
    display: flex;
    justify-content: space-between;

    .right {
      color: #959595;
    }
  }

  .comment-list {
    .comment-item {
      .top {
        margin-top: 20px;
        display: flex;

        img {
          width: 20px;
          height: 20px;
        }

        .name {
          margin: 0 15px;
        }
      }

      .content {
        height: 30px;
      }

      .time {
        color: #959595;
      }
    }

  }
}

.desc{
  img{
    display:block;
    width:100%;
  }
}
.footer{
  /deep/ .van-action-bar{
    .van-icon{
      font-size:25px;
      font-weight: bolder;
    }
    .van-row{
      width:100%;
      justify-content:space-around;
      padding:0 10px;

    }
  }
}
</style>
