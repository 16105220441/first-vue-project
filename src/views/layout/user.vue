<script setup>
import {reactive, ref} from 'vue'

const isLogin = ref(false)
const detail = reactive({
  mobile: '1587946'
})

function Login() {
  console.log("点击跳转")
}
</script>

<template>
  <div class="user">
    <div class="head-page" v-if="isLogin">
      <div class="head-img">
        <img src="@/assets/default-avatar.png" alt=""/>
      </div>
      <div class="info">
        <div class="mobile">{{ detail.mobile }}</div>
        <div class="vip">
          <van-icon name="diamond-o"></van-icon>
          普通会员
        </div>
      </div>
    </div>

    <div v-else class="head-page" @click="Login">
      <div class="head-img">
        <img src="@/assets/default-avatar.png" alt="" srcset="">
      </div>
      <div class="info">
        <div class="mobile">未登录</div>
        <div class="words">点击登录账号</div>
      </div>
    </div>
    <div class="my-asset">
      <van-row :gutter="[20, 20]">
        <van-col span="6">
          <span>{{ detail.payMoney || 0 }}</span>
          <span>账户余额</span>
        </van-col>
        <van-col span="6">
          <span>0</span>
          <span>积分</span>
        </van-col>
        <van-col span="6"><span>0</span>
          <span>优惠券</span></van-col>
        <van-col span="6">
          <van-icon name="balance-pay"></van-icon>
          <span>积分</span></van-col>
      </van-row>
    </div>
    <div class="order-navbar">
      <van-row getter="[20,20]">
        <van-col span="6">
          <van-icon name="balance-list-o"></van-icon>
          <span>全部订单</span>
        </van-col>
        <van-col span="6">
          <van-icon name="clock-o"></van-icon>
          <span>待支付</span>
        </van-col>
        <van-col span="6">
          <van-icon name="logistics"></van-icon>
          <span>待发货</span>
        </van-col>
        <van-col span="6">
          <van-icon name="send-gift-o"></van-icon>
          <span>待收货</span>
        </van-col>
      </van-row>
    </div>
    <div class="service">
      <div class="title">我的服务</div>
      <van-grid clickable :column-num="4" :border="false" :gutter="[10]">
        <van-grid-item to="/">
          <van-icon name="records"></van-icon>
          <span>收货地址</span>
        </van-grid-item>
        <van-grid-item to="/">
          <van-icon name="gift-o"></van-icon>
          <span>领券中心</span>
        </van-grid-item>
        <van-grid-item to="/">
          <van-icon name="gift-card-o"></van-icon>
          <span>优惠券</span>
        </van-grid-item>
        <van-grid-item to="/">
          <van-icon name="question-o"></van-icon>
          <span>我的帮助</span>
        </van-grid-item>
        <van-grid-item to="/">
          <van-icon name="balance-o"></van-icon>
          <span>我的积分</span>
        </van-grid-item>
        <van-grid-item to="/">
          <van-icon name="refund-o"></van-icon>
          <span>退换/售后</span>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="logout-btn">
      <van-button type="danger">退出登录</van-button>
    </div>

  </div>

</template>

<style lang="less" scoped>
.user {
  min-height: 100vh;
  background-color: #f7f7f7;
  padding-bottom: 50px;
}

.head-page {
  height: 130px;
  background: url("http://cba.itlike.com/public/mweb/static/background/user-header2.png");
  background-size: cover;
  display: flex;
  align-items: center;

  .head-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.info {
  .mobile {
    margin-bottom: 5px;
    color: #c59a46;
    font-size: 18px;
    font-weight: bold;
  }

  .vip {
    display: inline-block;
    background-color: #3c3c3c;
    padding: 3px 5px;
    border-radius: 5px;
    color: #e0d3b6;
    font-size: 14px;

    .van-icon {
      font-weight: bold;
      color: #ffb632;
    }
  }
}

.my-asset {
  padding: 20px 0;
  background-color: #fff;

  .van-row {
    justify-content: space-evenly;

    .van-col {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span:first-child {
        margin-bottom: 5px;
        color: #ff0000;
        font-size: 16px
      }

      .van-icon {
        margin-bottom: 5px;
        font-size: 24px
      }

    }
  }
}

.order-navbar {
  padding: 15px 0;
  margin: 10px;
  font-size: 14px;
  background-color: #fff;
  border-radius: 5px;

  .van-row {
    .van-col {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .van-icon {
        font-size: 24px;
        margin-bottom: 5px
      }

      /*span{
        text-align:center;
      }*/
    }
  }
}

.service{
  font-size:14px;
  background-color:#fff;
  border-radius:5px;
  margin:10px;
  padding-bottom:10px;
  .title{
    height:50px;
    line-height:50px;
    padding:0 15px;
    font-size:16px;
  }
  .van-grid{
    justify-content: flex-start;
    font-size:14px;
    background-color:#fff;
    border-radius: 5px;
    .van-grid-item{
      height:55px;
      .van-icon{
        font-size:24px;
        margin-bottom:5px;
        color:#ff3800
      }
    }
  }
}
.logout-btn{
  margin-top:20px;
  width:100%;
  .van-button{
    display:block;
    width:75vw;
    margin:auto;
    border-radius:10px;

  }
}

</style>
