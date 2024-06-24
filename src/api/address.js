import requestUtil from "@/utils/requestUtil.js";


export const getAddressList = (customerId) => {
    return requestUtil("/address//get/list", {
        params: {
            customerId
        }
    })
}

export const add_addressDetail = (shoppingAddressDetail) => {
    return requestUtil.post("/address/detail/add", shoppingAddressDetail
    )
    /*return requestUtil({url:"/address/detail/add",method:"post", data:shoppingAddressDetail})*/
}

export const get_addressDetail = (addressDetailId) => {
    return requestUtil("/address/detail/getInfo", {
        params: {
            addressDetailId
        }
    })
}

export const get_defaultAddress = (isDefault, customerId) => {
    return requestUtil("/address/detail/default", {
        params: {
            isDefault,
            customerId
        }
    })
}

export const update_defaultAddress = (addressDetailId, customerId) => {
    return requestUtil.put("/address/detail/update/default", {
        addressDetailId,
        customerId
    })
}

export const update_addressDetail = (shoppingAddressDetail) => {
    return requestUtil.put("/address/detail/update", shoppingAddressDetail)

}

export const delete_address = (address_detail_id) =>{
    return requestUtil.delete("/address/detail/delete",{
        params:{
            address_detail_id
        }
    })
}
