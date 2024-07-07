import axios from "axios";
import {closeToast, showFailToast, showLoadingToast, Toast} from "vant";
import {userStore} from "@/store/userStore.js"
const requestUtil = axios.create({
    baseURL:'/another-api',
    timeout:5000
})

requestUtil.interceptors.request.use(function (config){
    showLoadingToast({
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner',
    })

    const token = userStore().userInfo.token
    if(token){
        config.headers["token"] = token
    }
    return config
},function(error){
    return Promise.reject(error)
})
requestUtil.interceptors.response.use(function(response){
    const res = response.data
    if(res.code !== 200){
        showFailToast({message:res.message})
        return Promise.reject(res.message)
    }
    else{
        closeToast(true)
    }
    return res
},function(error){
    showFailToast(error)
    return Promise.reject(error)
})

export default requestUtil;
