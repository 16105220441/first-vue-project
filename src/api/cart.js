import request from "@/utils/request.js";
import requestUtil from "@/utils/requestUtil.js";

export const addCart = (productId, quantity, customerId) => {
    return requestUtil({url:'/cartDetail/add/product',method:'post',params:{
        productId,quantity,customerId
        }})
}

export const getTotalNum = (customerId) => {
    return requestUtil({url:'/cart/total',params:{
        customerId
        }})
}


export const getCartList = (customerId) => {
    return requestUtil({url:'/cart/list',params:{
        customerId
        }})
}

export const updateCart = (productId,customerId,quantity,itemTotalPrice) => {
    return requestUtil({url:'/cartDetail/update/product',method:'put', data:{
            productId,
            customerId,
            quantity,
            itemTotalPrice,
        }

    })
}

export const deleteSelectedPro = (shoppingCartDetails) => {
    return requestUtil.post('/cartDetail/delete',{
        shoppingCartDetails
    })
}
