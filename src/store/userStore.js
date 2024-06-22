import {reactive} from "vue";
import {defineStore} from "pinia";

export const userStore = defineStore('userStore',() => {
        let userInfo = reactive({
            token: '',
            userId: ''
        })

        function setToken(token) {
            userInfo.token = token
        }
        function setUserId(userId){
            userInfo.userId = userId
        }
        return{
            userInfo,
            setToken,
            setUserId
        }
    },
    {
        persist: true
    }
)
