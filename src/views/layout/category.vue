<script setup>
import {ref,reactive, watch} from 'vue'

import router from "@/router/index.js";
import {category, parent_category} from "@/api/category.js";




let active = ref(0);


let parent_category_data = reactive([])
const get_parent_category = async ()=>{
  let {data:{parentCategory}} = await parent_category()
  parent_category_data.push(...parentCategory)
  await get_category(parent_category_data[0].id)
}
get_parent_category()

let category_data = ref([])
let get_category = async (parent_category_id)=>{
  let {data:{categoryList}} = await category(parent_category_id)
  category_data.value = categoryList;
}




</script>

<template>
  <div class="category">
    <van-nav-bar #title title="全部分类" >
    </van-nav-bar>
    <van-search  placeholder="请输入搜索关键词" background="#f1f1f2"
                shape="round" @focus="router.push({name:'search'})"/>
    <main>
      <div class="left">
        <van-sidebar v-model="active" >
          <van-sidebar-item :title="item.name" v-for="(item,index) in
         parent_category_data"
                            :key="index" @click="get_category(item.id)"/>
        </van-sidebar>
      </div>
      <div class="right">

          <van-row

                 align="center">
            <van-col span="8" v-for="(item,index) in
           category_data" :key="index"
                     @click="router.push({name:'SearchList',query:{categoryId:item.id}})" align="center" >
              <van-image
                  :src="item.previewImageUrl"   width="90"></van-image>
              <div style="text-align: center" >{{item.name}}</div>
            </van-col>
          </van-row>

      </div>

    </main>
  </div>

</template>

<style scoped>
.category{

}
main{
  display: flex;
  height: 100%;
  .right{
   margin-bottom: 50px;
    width: 100%;
    .van-row{
      width: 100%;
      margin: 0;
    }

  }
  .van-sidebar {
    overflow-y:auto;
    height: 100vh;
    ::v-deep(.van-sidebar-item--select:active) {

        color: #c21401;

    }
    .van-sidebar-item--select:before{
      background-color: #c21401;
    }

  }


}

</style>
