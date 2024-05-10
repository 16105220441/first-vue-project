import axios from "axios";
import {closeToast, showFailToast, showLoadingToast, Toast} from "vant";
import {userStore} from "@/store/user.js"
const request = axios.create({
    baseURL:'https://smart-shop.itheima.net/index.php?s=/api',
    timeout:5000
})

request.interceptors.request.use(function (config){
   showLoadingToast(
        {
            message:'加载中...',
            forbidClick:true,
            loadingType:'spinner',
            duration:0,
        }
    )
    const token = userStore().userInfo.token
    if(token){
        config.headers["Access-Token"] = token
        config.headers['platform'] = 'H5'
    }
    return config
},function(error){
    return Promise.reject(error)
})
request.interceptors.response.use(function(response){
    const res = response.data
    if(res.status !== 200){
        showFailToast(res.message)
        return Promise.reject(res.message)
    }
    else{
        closeToast(true)
    }
    return res
},function(error){
    return Promise.reject(error)
})

export default request;
