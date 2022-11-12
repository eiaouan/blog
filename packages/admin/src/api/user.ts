import http from '@/utils/http'

export const login = (data:any)=>{
    return http({
        url:'/user/login',
        method: "post",
        data
    })
}
