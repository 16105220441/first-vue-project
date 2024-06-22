import {computed, reactive} from 'vue';
import {defineStore} from 'pinia'

export const cartStore = defineStore(('cartStore'), () => {
        let cartInfo = reactive({
            cartList: [],
            totalPrice:  0,
            totalNum:  0
        })
        function setCartList(list){
            cartInfo.cartList = list
        }
        function getCartList(){
            return cartInfo.cartList
        }
        function setTotalPrice(totalPrice){
            cartInfo.totalPrice = totalPrice
        }
        function addTotalNum(num){
            cartInfo.totalNum += num
        }
        function getTotalNum(num){
            cartInfo.totalNum = num
        }
        return {
            cartInfo,
            setCartList,
            getCartList,
            setTotalPrice,
            addTotalNum,
            getTotalNum

        }
    },
    {
        persist: true
    }
)


