import request from "@/utils/request.js"
import requestUtil from "@/utils/requestUtil.js";

export const getHomeData = ()=>{
    return request.get('/page/detail',{
        params:{
            pageId:0
        }
    })
}

export const getCarouselImg = ()=>{
    return requestUtil("/carousel/get/img")
}

export const getTopCategorise = ()=>{
    return  requestUtil("/topCategorise")
}

export const getRecommendedProducts = ( page,travelPageSize)=>{
    return requestUtil("/products/recommend",{
        params:{
            page,
            travelPageSize
        }
    })
}

/*
export const getProductData = ()=>{
    return requestUtil("")
}
*/
