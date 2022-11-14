import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
Vue.use(VueRouter)
const routes = [//将路由与组件进行映射

    {
        path:'/',
        component:Main,
        redirect:'/home',//重定向到主页
        children:[
            {
                //主页
                path:'home',
                component:Home
            },
            {
                // 用户管理
                path:'user',
                component:User
            },
            {
                // 商品管理
                path:'mall',
                component:Mall
            },
            {
                //页面1
                path:'page1',
                component:PageOne
            },
            {
                // 页面2
                path:'page2',
                component:PageTwo
            }
        ]
    }
    
]
//创建router实例
const router = new VueRouter({
    routes //同名可简写  routes:routes
}) 

export default router