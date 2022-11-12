import {login as loginApi} from '@/api/user'
import { StoreOptions, Store } from "vuex";
const createModule = <S>(store: StoreOptions<S>) => store as Store<S>;
export const user = createModule({
  /**
  namespaced: true,

      // 模块内容（module assets）
      state: () => ({ ... }), // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响
      getters: {
        isAdmin () { ... } // -> getters['account/isAdmin']
      },
      actions: {
        login () { ... } // -> dispatch('account/login')
      },
      mutations: {
        login () { ... } // -> commit('account/login')
  */
        //  namespaced: true,

        // 模块内容（module assets）
        state: () => ({ token:'' }), // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响
        getters: {
          // isAdmin () { ... } // -> getters['user/isAdmin']
        },
        actions: { // 可以异步，提交mutitation
         async  login (contex:any,formdata:any) {
            let res = await loginApi(formdata)
            console.log(res)
              // 判断是否登录成功
              if(res.data.msg=="登录成功"){
                localStorage.setItem("token",res.data.token) // 将token本地存储
                // headers: { Authorization: `Bearer ${token}` } // 在获取信息时添加
                 contex.commit('login',res.data.token) // 改变token状态
                return true// 成功
              }else return false
           } // -> dispatch('user/login')
        },
        mutations: { // 直接更改状态
          login (state: { token: string },token:string) {
            // 更改token
            state.token=token ;
           } // -> commit('user/login')
        },
        namespaced: true
})
