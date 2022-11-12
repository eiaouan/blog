
/**
 * 创建并返回类型化的store
 */
// store.ts
// import { InjectionKey } from 'vue'
import { createStore, useStore, Store } from 'vuex'
import {user} from './user'


// export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore({
  state: {
    count: 0
  },
  modules: {
    user
  },
  mutations:{
    test(){
      store.state.count ++
      console.log(store.state.count ++);

    }
  },
  actions:{
    test(){
      setTimeout(()=>{
        store.commit('test');
      },100)
    }
  }
})


// 覆盖原有 useStore 函数中, 泛型默认值类型
declare module "vuex" {
  type StoreStateType = typeof store.state;
  type ModulesType = {
    user: typeof user.state;
  }
  export function useStore<S = StoreStateType & ModulesType>(): Store<S>;
}

export default store

