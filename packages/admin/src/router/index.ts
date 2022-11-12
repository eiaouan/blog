import {createRouter,createWebHistory} from 'vue-router'
import login from '../views/login/index.vue'
const routes = [
    {
        path:'/login',
        component: login
    },
    {
        path: '/layout',
        component: ()=>import('@/layout/index.vue'),
       children:[{
        // 子路由不要加上/ 源码会自动拼接
            path: 'essays',
            component: ()=>import('@/views/essays/index.vue')
          },{
            path: 'index',
            component: ()=>import('@/views/index/index.vue')
          }]
    },
    {
        path: '/model',
        component: ()=>import('../views/model/index.vue')
    },
    {
      path:'/editor',
      component:()=>import('@/views/editor/index.vue')
     }

]

let router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
