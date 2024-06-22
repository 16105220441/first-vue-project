import requestUtil from "@/utils/requestUtil.js";

export const getCustomerBasicInfo = (userId)=>{
    return  requestUtil.get(`/customer/getBasicInfo?userId=${userId}`)
}
