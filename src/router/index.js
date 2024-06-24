import Layout from '@/views/layout/index.vue'
import Search from '@/views/search/index.vue'
import SearchList from '@/views/search/list.vue'
import ProDetail from '@/views/prodetail/index.vue'
import Login from '@/views/login/index.vue'
import Pay from '@/views/pay/index.vue'
import MyOrder from '@/views/myorder/index.vue'
import Category from '@/views/layout/category.vue'
import Cart from '@/views/layout/cart.vue'
import User from '@/views/layout/user.vue'
import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/layout/home.vue";
import AddressEdit from "@/views/shoppingAddress/addressEdit.vue"
import AddressList from "@/views/shoppingAddress/addressList.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/',
            component: Layout,
            redirect: '/home',
            children: [
                {
                    path: 'home',
                    component: Home,
                    name: 'home'
                },
                {
                    path: 'category',
                    component: Category,
                    name: 'category'
                },
                {
                    path: 'cart',
                    component: Cart,
                    name: 'cart'
                },
                {
                    path: 'user',
                    component: User,
                    name: 'user'
                }
            ]
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path: '/searchList',
            name: 'SearchList',
            component: SearchList
        },
        {
            path: '/proDetail/:id',
            name: 'ProDetail',
            component: ProDetail,
        },
        {
            path: '/pay',
            name: 'pay',
            component: Pay
        },
        {
            path: '/myOrder',
            name: 'myOrder',
            component: MyOrder
        },
        {
            path: '/shoppingAddress/edit',
            name: 'addressEdit',
            component: AddressEdit
        },
        {
            path: '/shoppingAddress/list',
            name: 'addressList',
            component: AddressList
        }
    ],

})
export let backUrl = '/'

export function setBckUrl(url) {
    backUrl = url
}

router.beforeResolve((to, from) => {
    if (from.name === 'ProDetail' && to.name === 'login') {
        backUrl = from.path
    }
    if (from.name === 'ProDetail' && to.name === 'cart') {
        backUrl = from.path
    }
    console.log(backUrl)
    if (to.name === 'ProDetail') {
        backUrl = '/'
    }
})
export default router
