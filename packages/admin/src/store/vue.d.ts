import { Store } from 'vuex'

declare module '@vue/runrime-core'{
    // 声明自己的store state
    interface State {
        token: string
    }

    // 
}
