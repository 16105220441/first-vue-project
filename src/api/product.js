import request from "@/utils/request.js";
import requestUtil from "@/utils/requestUtil.js";


export const goodList = (paramsData) => {
    const {categoryId, goodsName, page, travelPageSize} = paramsData
    return requestUtil('/products/by_Category/id&&name', {
        params: {
            categoryId, goodsName, page, travelPageSize
        }
    })
}

export const getProDetail = (productId) => {
    // console.log(`goodsId`,goodsId)
    return requestUtil(
        {
            method: "get",
            url: '/products/detail',
            params: {
                productId
            }
        }
    )
}

export const getPrReviews = (productId,page,pageSize) => {
    console.log(productId,page,pageSize)
    return requestUtil('/products/productDetail/reviewList', {
        params: {
            productId,
            page,
            pageSize
        }
    })
}
