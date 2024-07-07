<script setup>
import {defineProps} from 'vue'

defineProps(['content'])
</script>

<template>
  <main>
    <van-row :gutter="[15,15]">
      <van-col span="6">
        <van-image :src="content.products.productImage"/>
      </van-col>
      <van-col span="14">
        <van-text-ellipsis rows="3"
                           :content="content.products.name"></van-text-ellipsis>

      </van-col>
      <van-col span="4">
        <van-grid :border=false>
          <van-grid-item class="price">
           <span style="font-weight: bolder;font-size: 15px;color:#252527 "> ￥{{
               content.products
                   .discountPrice
             }}</span></van-grid-item>
          <van-grid-item>x{{ content.num }}</van-grid-item>
        </van-grid>

      </van-col>
    </van-row>
    <van-row class="pay">
      <span style="font-weight: bolder;font-size: 15px;color: #252527">
        实付款￥{{ content.itemTotalPrice }}
      </span></van-row>
  </main>

</template>

<style scoped lang="less">
main {
  .van-grid {
    flex-direction: column;
    align-content: flex-end;
    align-items: flex-end;

  }

  .pay {
    justify-content: flex-end;
  }
}

</style>
