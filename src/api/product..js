import request from "@/utils/request.js";


export const goodList = (params)=>{
    const {categoryId,goodsName,page} = params
    return request.get('/goods/list',{
        params:{
            categoryId,
            goodsName,
            page
        }
    })
}
