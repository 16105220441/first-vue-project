<script setup>

import router from "@/router/index.js";
import {ref} from "vue"
import {useRoute} from "vue-router";
import {getProDetail, getPrReviews} from "@/api/product.js";
import CountBox from "@/components/CountBox.vue";
import {userStore} from "@/store/userStore.js"
import {cartStore} from "@/store/cartStore.js";
import {addCart} from "@/api/cart.js";
import {showToast} from "vant";



let goodId = ref()

const getGoodId = () => {
  goodId.value = useRoute().params.id;

}
getGoodId()
let detailRef = ref({})

const getDetail = async () => {
  const {data: {productData}} = await getProDetail(goodId.value)
  console.log(productData)
  detailRef.value = productData
}
getDetail()

let totalRef = ref(0)
let proReviews = ref([])
let proReviews_page = ref(0);
let proReviews_pageSize = 3
let isLastReviews = ref(false)
let defaultImg = "http://smart-shop.itheima.net/uploads/10001/20230321/a0db9adb2e666a65bc8dd133fbed7834.png"
const getReviews = async () => {
  if (!isLastReviews.value) {
    const {data: {proReviews: {list, total, isLastPage}}} = await
        getPrReviews(goodId.value,
            proReviews_page.value, proReviews_pageSize)
    proReviews.value.push(...list)
    totalRef.value = total
    if (!isLastPage) {
      proReviews_page.value++
    } else {
      isLastReviews.value = true
    }
  }
}
getReviews()

let show = ref(false)
let option = ref('')
let cartTotal = ref(0)
const addCartBtn = () => {

  show.value = true
  option.value = 'cart'
}
const addBuyBtn = () => {
  console.log(1)
  show.value = true
  option.value = 'buy'
}
let is_it_larger_than_stock = ref(false)
let addCount = ref(1)
const updateCount = (value) => {
  console.log(`value`, value)
  if (addCount.value > detailRef.value.stockTotal) {
    showToast({message: '所选数量大于该商品的库存量，请重新选择'});
    addCount.value = 1
    is_it_larger_than_stock.value = true
  } else {
    addCount.value = value
  }


}
let showDialog = ref(false)
const submitAddCart = async () => {
  if (userStore().userInfo.token === '' || userStore().userInfo.token === null) {
    showDialog.value = true
  } else {
    cartTotal.value = addCount.value
    if (is_it_larger_than_stock.value) {
      showToast({message: '所选数量大于该商品的库存量，请重新选择'});
    } else {
      await
          addCart(detailRef.value.productId,
              addCount.value, userStore().userInfo.userId)
      cartStore().addTotalNum(addCount.value)
      show.value = false
    }

  }

}
const summitBuyNow = () => {
  if (userStore().userInfo.token === '' || userStore().userInfo.token === null) {
    showDialog.value = true

  } else {
    show.value = false
    router.push({name: 'pay'})
  }
}
const login = () => {
  router.push({name: 'login'})
}
</script>

<template>
  <div class="proDetail">
    <van-nav-bar title="商品详情页" left-arrow @click-left="router.go(-1)" fixed
                 placeholder></van-nav-bar>
    <div class="content">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="(item,index) in detailRef.productDetail"
                        :key="index">
          <van-image :src="item.productCarousel" fit="cover"></van-image>
        </van-swipe-item>
        <template #indicator="{ active, total }">
          <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
        </template>
      </van-swipe>

      <div class="info">
        <div class="title">
          <div class="price">
            <span class="now">
              ￥{{ detailRef.discountPrice }}
            </span>
            <span class="oldPrice">
              ￥{{ detailRef.originalPrice }}
            </span>
          </div>
          <div class="sellCount">
            已售{{ detailRef.productSales }}件
          </div>
        </div>
        <van-text-ellipsis rows="2"
                           :content="detailRef.name"
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
          <div class="left">商品评价({{ totalRef }}条）</div>
          <div class="right" @click="getReviews">
            <span>{{ isLastReviews === false ? "查看更多" : "暂无更多" }}</span>
            <van-icon name="arrow" color="#959595"></van-icon>
          </div>
        </div>

        <div class="comment-list">
          <div class="comment-item" v-for="(item,index) in proReviews"
               :key="index">
            <div class="top">
              <img
                  :src="item.customers.avatar || defaultImg"
                  alt="">
              <div class="name">{{ item.customers?.pickName }}</div>
              <van-rate

                  :size="16"
                  color="#ffd21e"
                  void-icon="star"
                  void-color="#eee"
                  v-model="item.satisfaction"
              />
            </div>
            <div class="content">
              <van-text-ellipsis rows="1" :content="item.review"/>
            </div>
            <div class="time">
              {{ item.createTime }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 商品描述 -->
    <div class="desc">
      <div class="tips">商品描述</div>
      <div class="desc" v-html="detailRef.content"></div>
    </div>

    <div class="footer">
      <van-action-bar placeholder>
        <van-action-bar-icon icon="wap-home-o" text="首页" to="/home"/>
        <van-action-bar-icon icon="shopping-cart-o" text="购物车"
                             v-if="cartStore().cartInfo.totalNum > 0"
                             :badge="cartStore().cartInfo.totalNum"
                             to="/cart"/>
        <van-action-bar-icon v-else icon="shopping-cart-o" text="购物车"

                             to="/cart"/>

        <van-row>
          <van-button type="warning" color="#ffa900" round
                      @click="addCartBtn">加入购物车
          </van-button>
          <van-button type="danger" round @click="addBuyBtn">立即购买
          </van-button>
        </van-row>
      </van-action-bar>
    </div>
    <van-action-sheet v-model:show="show" :title="option === `cart` ? `加入购物车`
     : `立即购买`">
      <div class="product">
        <van-row class="product-title" gutter="20">
          <van-col span="8" class="left">
            <img :src="detailRef.productImage" alt="" srcset="" width="100%">
          </van-col>
          <van-col class="right">
            <div class="price">
              <span>￥</span>
              <span class="nowPrice">{{ detailRef.discountPrice }}</span>
            </div>
            <div class="count">
              <span>库存</span>
              <span>{{ detailRef.stockTotal }}</span>
            </div>
          </van-col>
        </van-row>

        <van-row class="num-box">

          <span>数量</span>


          <CountBox v-model:value="addCount"
                    :update-count="updateCount"
          ></CountBox>


          <!--          <CountBox v-model:value="addCount"
                            ></CountBox>-->
        </van-row>

        <div class="showButton" v-if="detailRef.stockTotal > 0">
          <van-button v-if="option === `cart`"
                      @click="submitAddCart"
                      color="#ff9402" round>加入购物车
          </van-button>
          <van-button v-else @click="summitBuyNow"
                      color="#fe5630" round>立即购物
          </van-button>
        </div>
        <div class="showButton" v-else>
          <van-button color="#cccccc" round>该商品已抢空</van-button>
        </div>
      </div>
    </van-action-sheet>

    <van-dialog v-model:show="showDialog" title="温馨提示" show-cancel-button
                cancel-button-text="再逛逛" confirm-button-text="去登录"
                confirm-button-color="#ee0a24" @confirm="login"
                #default>
      <p>此时需要登录才能继续操作</p>
    </van-dialog>

    <van-back-top right="10" bottom="60"/>
  </div>
</template>

<style lang="less" scoped>

.proDetail {
  font-size: 16px;

  ::v-deep(.van-nav-bar) {
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
    align-items: center;

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
        align-items: center;

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

.desc {
  .tips {
    padding: 10px
  }

  ::v-deep(img) {
    display: block;
    width: 100% !important;
  }
}

.footer {
  /deep/ .van-action-bar {
    width: 375px;

    .van-icon {
      font-size: 25px;
      font-weight: bolder;
    }

    .van-row {
      width: 100%;
      justify-content: space-around;
      padding: 0 10px;

    }
  }
}

.van-action-sheet {
  .product {
    .price {
      color: #fe5f16;

      .nowPrice {
        font-size: 24px;

      }

    }

    .num-box {
      margin: 20px 10px;
      display: flex;
      justify-content: space-between;
      align-content: center;
    }

    .showButton {
      margin: auto;
      padding: 0 5% 15px;

      .van-button {

        width: 100%
      }
    }
  }
}

::v-deep(.van-dialog) {
  text-align: center;
  height: 150px;

  .van-dialog__content {
    margin: 10px 0;
    color: #959595
  }
}
</style>
