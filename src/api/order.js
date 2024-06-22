import request from '@/utils/request.js'

export const checkOrder = (mode,obj)=>{
    return request.get('checkout/order',{
        params:{
            mode,
            delivery:0,
            couponId:0,
            isUsePoints:0,
            ...obj
        }
    })
}
