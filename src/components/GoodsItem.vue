<script setup>
import {defineProps} from 'vue'
import router from "@/router/index.js";



const navigateToProDetail = (id)=>{
  console.log('id',id)
  router.push({name:'ProDetail',params:{
    id:id
    }})
  console.log(`router`,router)

}

defineProps(['dataItem'])

</script>

<template>
  <van-row justify="end" class="main" gutter="20" @click="
  navigateToProDetail(dataItem.productId
)">
    <van-col span="8" >
      <van-image :src="dataItem.productImage

"></van-image>
    </van-col>
    <van-col span="16">
      <p>
        <van-text-ellipsis
            rows="2"
            :content="dataItem.name"

        />
      </p>
      <div class="sold">已售{{ dataItem.productSales}}件</div>
      <van-row>
        <van-col span="8" class="value new-value">￥{{ dataItem.originalPrice}}
        </van-col>
        <van-col span="8" class="value old-value">
          ￥{{ dataItem.
            discountPrice}}
        </van-col>
      </van-row>

    </van-col>
  </van-row>
</template>

<style lang="less" scoped>
.main {
  height: 148px;
  align-items: center;
}

.van-row {
  .van-col {
    padding: 10px;

    .van-text-ellipsis {
      text-align: left;
      text-indent: 0;
      color: #000000;
    }

    .value {
      font-size:16px;
      line-height: 16px;
      padding: 0;
      display: inline-block;
      text-align: left;
      vertical-align: bottom;
    }

    .new-value {
      color: #c21401;

    }

    .old-value {
      text-decoration: line-through;
      font-size: 10px;
    }
  }

  .sold {
    padding: 10px 0;
    text-align: left;
  }
}
</style>
