<script setup>
import {reactive, ref, watch, watchEffect} from 'vue';
import {deleteSelectedPro, getCartList, updateCart} from "@/api/cart.js";
import {userStore} from "@/store/userStore.js";
import {cartStore} from "@/store/cartStore.js";
import CountBox from "@/components/CountBox.vue";
import router, {backUrl} from "@/router/index.js";


let isLogin = ref(false)
let carList = reactive([])

let proNum = reactive([])
let totalProNum = ref(0)
let totalProPrice = ref(0)

let checkedAll = ref(false)
const logInOrNot = () => {
  isLogin.value = !!userStore().userInfo.token;
}

const getPageDetail = async () => {
  let {data: {cartList}} = await getCartList(userStore().userInfo.userId)
  console.log(cartList.totalQuantity)
  cartStore().cartInfo.totalNum = cartList.totalQuantity
  cartStore().cartInfo.totalPrice = cartList.totalPrice
  totalProPrice.value = cartList.totalPrice
  for (const listElement of cartList.shoppingCartDetails) {
    listElement.isChecked = true
    totalProNum.value += listElement.quantity
    proNum.push({'goods_num': listElement.quantity})
  }
  checkedAll.value = true
  carList.push(...cartList.shoppingCartDetails)

}

const updateCount = async (value, index) => {
  proNum[index].goods_num = value

  totalProPrice.value = (totalProPrice.value + (value
          - carList[index].quantity) *
      carList[index].products.discountPrice)
  carList[index].quantity = value
  let res = await
      updateCart(carList[index].products.productId,
          userStore().userInfo.userId, carList[index].quantity,
          carList[index].products.discountPrice * carList[index].quantity)

  cartStore().cartInfo.totalNum = res.data.shoppingCart.totalQuantity
  totalProNum.value = res.data.shoppingCart.totalQuantity

}

const toggleCheck = (index) => {
  console.log('toggleCheck')
  updateTotalProNum(index)
}

const updateTotalProNum = (index) => {

  console.log('updateTotalProNum')
  if (carList[index].isChecked) {

    totalProNum.value += carList[index].quantity
    totalProPrice.value += carList[index].itemTotalPrice
  } else {

    totalProNum.value -= carList[index].quantity
    totalProPrice.value -= carList[index].itemTotalPrice

  }

}

const toggleAllCheck = (value) => {
  console.log('toggleAllCheck')
  checkedAll.value = value
  for (let i = 0; i < carList.length; i++) {
    carList[i].isChecked = checkedAll.value
  }
}
let deleteOption = ref(false)
const edit = () => {
  checkedAll.value = false
  for (let i = 0; i < carList.length; i++) {
    carList[i].isChecked = false
  }
  deleteOption.value = !deleteOption.value
}
const deletePro = async () => {
  let deleteArray = []
  for (let i = 0; i < carList.length; i++) {
    // debugger
    if (carList[i].isChecked) {
      deleteArray.push({
        productId: carList[i].productId,
        customerId: userStore().userInfo.userId
      })
    }
  }
  await deleteSelectedPro(deleteArray)
  carList.splice(0, carList.length)
  proNum.splice(0, proNum.length)
  await getPageDetail()

}

const settlement = () => {
  console.log('settlement')
  // console.log(1)
  cartStore().setCartList(carList)
  cartStore().setTotalPrice(totalProPrice.value)
  router.push({
    name: 'pay', query: {
      mode: 'cart'
    }
  })
}


/*
watchEffect(() => {
  let bool = true
  for (let i = 0; i < carList.length; i++) {
    if (!carList[i].isChecked) {
      bool = false;
      break
    }
  }
  checkedAll.value = bool;
})
*/

/*watchEffect(() => {
  if (!deleteOption.value) {
    checkedAll.value = true
    for (let i = 0; i < carList.length; i++) {
      carList[i].isChecked = true
      totalProPrice.value += carList[i].itemTotalPrice
      totalProNum.value += carList[i].quantity
    }
  } else {
    totalProNum.value = 0
    totalProPrice.value = 0
  }
})*/
watch((deleteOption), () => {
  console.log('watch')
  if (!deleteOption.value) {
    checkedAll.value = true
    for (let i = 0; i < carList.length; i++) {
      carList[i].isChecked = true
      totalProPrice.value += carList[i].itemTotalPrice
      totalProNum.value += carList[i].quantity
    }
  } else {
    totalProNum.value = 0
    totalProPrice.value = 0
  }
})


watchEffect(() => {
  console.log('watchEffect')
  cartStore().setTotalPrice(totalProPrice.value)
})
watchEffect(() => {
  console.log('watchEffect')
  cartStore().setCartList(carList)
})

watchEffect(() => {
  console.log('watchEffect')
  totalProPrice.value = Number(Number(totalProPrice.value).toFixed(2))
})

watchEffect(() => {
  console.log('watchEffect')
  for (let i = 0; i < carList.length; i++) {
    if (carList[i].isChecked === false) {
      checkedAll.value = false;
      return
    }
  }
  return checkedAll.value = true

})

logInOrNot()

getPageDetail()

watchEffect(() => {

})
</script>

<template>
  <div class="cart">
    <van-nav-bar title="购物车" fixed placeholder
                 v-if="backUrl === '/'"></van-nav-bar>
    <van-nav-bar title="购物车" fixed placeholder left-arrow

                 v-else
                 @click-left="()=>{

                   router.go(-1)
                 }"></van-nav-bar>
    <div class="non-empty-cart" v-if="isLogin && carList.length > 0">
      <div class="cart-title">
        <div class="total-num">
          <span>共<i>{{ cartStore().cartInfo.totalNum }}</i>件商品</span>
        </div>
        <div class="edit" @click="edit">
          <van-icon name="edit" color="#000000"/>
          <span>编辑</span>
        </div>
      </div>
      <div class="car-list">
        <van-list>
          <van-row v-for="(item,index) in carList" gutter="10">
            <van-col span="3">
              <van-checkbox v-model="item.isChecked"
                            @click="toggleCheck(index)"></van-checkbox>
            </van-col>
            <van-col span="6">
              <van-image :src="item.products.productImage"></van-image>
            </van-col>
            <van-col span="15">
              <div class="info">
                <van-text-ellipsis :content="item.products
                    .name" rows="2"></van-text-ellipsis>
                <div class="bottom">
                  <span class="price">
                    ￥{{ item.products.discountPrice }}
                  </span>
                  <CountBox v-model:value="proNum[index].goods_num"
                            :index="index"
                            :update-count="updateCount"
                  ></CountBox>
                </div>
              </div>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
    <div class="empty-cart" v-else>
      <van-image src="src/assets/empty.png" alt=""></van-image>
      <div class="tips">
        您的购物车是空的，快去逛逛吧
      </div>
      <van-button type="danger">去逛逛</van-button>
    </div>

    <van-row class="footer-fixed" v-if="carList.length > 0">
      <div>
        <van-checkbox v-model="checkedAll" @click="toggleAllCheck(checkedAll)">
          全选
        </van-checkbox>

      </div>
      <van-col span="18">
        <van-row gutter="10" justify="end">
          <van-col>
            <span>合计:￥</span>
            <span class="totalProPrice">{{ totalProPrice }}</span>
          </van-col>
          <van-col span="10">
            <div class="button">
              <van-button color="#fa2f21" round
                          v-if="deleteOption === false"
                          @click="settlement">结算({{
                  totalProNum
                }})
              </van-button>
              <van-button color="#fa2f21" round
                          v-else @click="deletePro">删除({{
                  totalProNum
                }})
              </van-button>
            </div>

          </van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<style scoped>
.cart {

  background-color: #f5f5f5;
  height: 100vh;
}

.van-nav-bar .van-icon {
  color: #3c3c3c;
}

.non-empty-cart {
  padding: 10px 10px 0;

  .cart-title {
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;

    i {
      color: #fa2c09
    }
  }

  .van-list {

    .van-row {
      align-items: center;
      background-color: #ffffff;
      padding: 10px 10px;
      border-radius: 5px;
      margin-bottom: 10px;

      .info {

        .van-text-ellipsis {
          line-height: 1.2em;
        }

        .bottom {

          display: flex;
          justify-content: space-between;
          margin-top: 10px;

          .price {
            color: #fa2c09;
          }
        }
      }
    }
  }
}

.empty-cart {
  padding: 80px 30px;

  .van-image {
    width: 140px;
    height: 92px;
    display: block;
    margin: 0 auto;
  }

  .tips {
    text-align: center;
    color: #666;
    margin: 20px;
  }

  .van-button {
    width: 110px;
    height: 32px;
    line-height: 32px;
    border-radius: 16px;
    display: block;
    margin: 0 auto;
  }
}

.footer-fixed {
  padding: 0 20px;
  background-color: #ffffff;
  width: 100%;
  position: fixed;
  bottom: 50px;
  justify-content: space-between;
  align-items: center;

  .van-row {
    align-items: center;

    .totalProPrice {
      color: #fa2c09;
      font-weight: bold;
    }

    .button {
      padding: 10px 0;

      .van-button {
        width: 100px;

        .van-button__content {
          text-align: center;

        }
      }
    }


  }
}
</style>
