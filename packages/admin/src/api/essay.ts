import http from '@/utils/http'
export const essayInsert = (data:any)=>{
    return http({
        url:"/essay/insert",
        method:"post",
        data,
    })
}

export const test= ()=>{
    return  http({
         url: "/user",
         method: "get"
     })
 } 

     