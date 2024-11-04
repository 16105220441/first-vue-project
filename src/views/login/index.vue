<script setup>

import {onUnmounted, ref} from "vue"
import router, {backUrl, setBckUrl} from "@/router/index.js"

import {showFailToast, showSuccessToast, showToast} from "vant";
import {
  codeLogin,
  getMsgCode,
  getPicCode,
  verifyMsgCode,
  verifyPicCode
} from "@/api/login.js";
import {userStore} from "@/store/userStore.js";
import {cartStore} from "@/store/cartStore.js";
import {getTotalNum} from "@/api/cart.js";


let mobile = ref()

let picUrl = ref('')// 存储请求渲染的图片地址
let uid = ref('')// 将来请求传递的图形验证码唯一标识
let picCode = ref()// 用户输入的图形验证码
let totalSecond = ref(60)
let second = ref(60)
let msgCodeId = ref('')//短信验证码的唯一标识
let msgCode = ref('')// 短信验证码
let timer = null


const getPicCodeInfo = async () => {
  const {data: {baseImageCode, uuid}} = await getPicCode()
  console.log('uuid',uuid)
  picUrl.value = baseImageCode
  uid.value = uuid
}
getPicCodeInfo()

const validFn = () => {

  if (!/^1[3-9]\d{9}$/.test(mobile.value)) {
    showToast('请输入正确的手机号格式')
    return false
  }
  if (!/^\w{4}$/.test(picCode.value)) {
    showToast('请输入正确的图形验证码格式')
    return false
  }
  return true
}

const getCode = async () => {
  if (!validFn()) {
    console.log(1)
    // 如果没通过校验，没必要往下走了
    return
  }
  console.log(2)
  // 当前目前没有定时器开着，且 totalSecond 和 second 一致 (秒数归位) 才可以倒计时
  if (!timer) {
    let res = await verifyPicCode(uid.value, picCode.value)
    if (res.code === 200) {
      if (second.value === totalSecond.value) {

        // 发送请求
        // 预期：希望如果响应的status非200，最好抛出一个promise错误，await只会等待成功的promise
        let {data} = await getMsgCode()
        msgCodeId.value = data.msgCodeId
        showSuccessToast({message: "短信验证码" + data.msgCode})
        /* console.log(res)
         showSuccessToast('短信发送成功，注意查收')*/

        // 开启倒计时
        timer = setInterval(() => {
          second.value--

          if (second.value <= 0) {
            clearInterval(timer)
            timer = null // 重置定时器 id
            second.value = totalSecond.value // 归位
          }
        }, 1000)
      }
    }

  }


}
const login = async () => {
  if (!validFn()) {

    return
  }
  if (!/^\d{6}$/.test(msgCode.value)) {

    showFailToast('请输入正确格式的手机验证码')
    return
  }
  let res = await verifyMsgCode(msgCodeId.value,msgCode.value)
  if (res.code === 200) {
    const {data: {token, customerId} }= await codeLogin(mobile.value)
    userStore().setToken(token)
    userStore().setUserId(customerId)

    showSuccessToast('登录成功')
    let {data: {total}} = await getTotalNum(userStore().userInfo.userId)
    if (total > 0){
      cartStore().getTotalNum(total)
    }
    if (backUrl === '/') {
      await router.replace('/home')
    } else {
      router.go(-1)
      setBckUrl('/')
    }
  }

}

onUnmounted(() => {
  clearInterval(timer)
})

</script>

<template>
  <van-nav-bar>
    <template #left>
      <van-icon name="arrow-left" color="#181818" @click="()=>{

        router.go(-1)
      }"/>
    </template>
    <template #title>
      <div>会员登录</div>
    </template>
  </van-nav-bar>
  <van-cell-group inset>
    <template #title>
      <h1 style="color: #181818;margin-bottom: 20px;margin-top:40px ">
        手机登录</h1>
      <div>未注册的手机好登录后将自动注册</div>
    </template>
    <van-field v-model="mobile" placeholder="请输入手机号码" maxlength="11"
               type="text"/>
    <van-field v-model="picCode" placeholder="请输入图形验证码" maxlength="5">
      <template #right-icon>
        <van-image :src="'data:image/jpg;base64,'+picUrl" width="75"
                   height="5vh"
                   @click="getPicCodeInfo"
        ></van-image>
      </template>
    </van-field>
    <van-field v-model="msgCode" placeholder="请输入短信验证码"
               required type="number">
      <template #button>
        <van-button plain color="#cea26a" size="small" type="primary"
                    @click="getCode">
          {{ second === totalSecond ? '获取验证码' : second + '秒后重新发送' }}
        </van-button>
      </template>
    </van-field>
  </van-cell-group >
  <van-row style="justify-content: space-around">
    <van-button type="primary" size="large"
                style="border-radius: 10vw;background-color:#f3a72b;
              border-color: #f3a72b; margin-top:30px;width: 80%"
                @click="login">
      登录
    </van-button>
  </van-row>

</template>

<style scoped>
/*.van-field{
  border-bottom: #f7f5f6 1px solid;
}*/
</style>
