import requestUtil from "@/utils/requestUtil.js";

export const add_oder = (orderDetails) => {
    return requestUtil.post('/orderDetail/add', orderDetails)
}

export const delete_oder = (orderDetailId) => {
    return requestUtil.delete('/orderDetail/delete', {
        params: {
            orderDetailId
        }
    })
}

export const get_orderList = (customerId, pageNum, pageSize) => {
    return requestUtil("/orderDetail/get/list", {
        params: {
            customerId,
            pageNum,
            pageSize
        }
    })
}
