<script setup lang="ts">
import router from '@/router';
import {ref,computed} from 'vue'
// import {login} from '@/api/user'
import {useStore} from 'vuex'

let username = ref('')
let password = ref('')
const store = useStore() // 注意 useStore 只能在setup函数中使用，不能在内部函数中使用
let loginFun = async function(){
    // 存储token
   let lres = await store.dispatch('user/login',{username: username.value,password: password.value})
   if(lres){ // 为true表示登录成功
     console.log(router.push('/index'));
   }
}
</script>

<template>
    <div class="login-page">
        <div class="login">
        <div class="login-title">登录</div>
        <div class="formdata">
            <input type="text" placeholder="用户名" v-model="username">
            <input type="password" placeholder="密码" v-model="password">
        </div>
        <div class="login-btn" @click="loginFun">登录</div>
    </div>
    </div>

</template>

<style scoped lang="scss">

.login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    border: 1px solid #5f3cc0;
    border-radius: 7px;
    text-align: center;
}

.login-title {
    margin: 20px 0;
    font-size: 20px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    color: #5f3cc0;
}

.formdata {
    input {
        display: block;
        border: none;
        height: 30px;
        margin : 10px 0;
        outline: 1px solid transparent;
        border-radius: 5px;
        padding-left: 10px;
        border-bottom: solid 1px #5f3cc0;
        &:hover, &:focus ,&:focus-visible{
        outline: 1px solid #5f3cc0;
    }
    }

}

.login-btn {
    width: 150px;
    height: 30px;
    line-height: 30px;
    background-color: #5f3cc0;
    color: #fff;
    margin: 10px 0;
    border-radius: 5px;
    cursor: pointer;
    &:hover,&:focus{
        background: #4c3098;
    }
}

</style>
