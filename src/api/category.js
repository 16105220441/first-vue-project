import requestUtil from "@/utils/requestUtil.js";


export const parent_category = ()=>{
    return requestUtil("/ParentCategory")
}

export const category = (parent_category_id)=>{
    return requestUtil("/Category",{
        params:{
            parent_category_id
        }

    })
}
