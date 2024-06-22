<script setup>
import {defineProps,ref} from 'vue'
const props = defineProps({
  value: {
    type:Number,
    default: 1
  },
  index:{
    type:Number,
  },
  updateCount:{
    type:Function
  }
})
let countValue = ref(props.value)

const clickMinus = () => {
  if (countValue.value === 1) {
  } else {
    countValue.value--
  }
  props.updateCount(countValue.value,props.index)
}
const handleInput = (e) => {
  console.log(e)
  const positiveIntegerPattern = /^(0*[1-9][0-9]*)$/;
  if (!positiveIntegerPattern.test(e)) {
    /*console.log('正则')*/
    // debugger
    e = e.replace(/\D/g, '')
  }
  countValue.value = Number(e)
  props.updateCount(countValue.value,props.index)
  console.log('props.value',countValue.value)
  console.log('type props.value', typeof (countValue.value))
}
const clickAdd = () => {
  countValue.value++
  props.updateCount(countValue.value,props.index)
  console.log(countValue.value)
}
</script>

<template>
  <div class="count-box">
    <van-button type="default" class="minus" @click="clickMinus">-</van-button>
    <input :value="countValue" class="inp" type="number"
           @input="handleInput($event.target.value)">
    <van-button type="default" class="add" @click="clickAdd">+</van-button>
  </div>
</template>

<style lang="less" scoped>
.count-box{
  //width:100%
  display:flex;
  align-content:center;
  .add, .minus {
    width: 30px;
    height: 30px;
    outline: none;
    border: none;
    background-color: #efefef;
  }
  .inp {
    width: 40px;
    height: 30px;
    outline: none;
    border: none;
    margin: 0 5px;
    background-color: #efefef;
    text-align: center;
  }
}
</style>
