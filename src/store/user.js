import {reactive} from "vue";
import {defineStore} from "pinia";

export const userStore = defineStore('userStore',() => {
        const userInfo = reactive({
            token: '',
            userId: ''
        })

        function setToken(token) {

        }
        return{
            userInfo,
            setToken,
        }
    },
    {
        persist: true
    }
)
