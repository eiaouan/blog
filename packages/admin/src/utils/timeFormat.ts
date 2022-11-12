// 时间格式化
interface Option {
    'y+': string;
    'M+': string;
    'd+': string;
    'h+': string;
    'm+': string;
    's+': string;
    'W+': number;
    'Q+': number;
}
export const  dateFormat=(f?:string, d?:string) =>{
    let fmt = f || 'yyyy-MM-dd hh:mm:ss'
    let date = d ? new Date(d) : new Date()
    let ret
    let weekArr = ['日', '一', '二', '三', '四', '五', '六']
    const opt:Option= {
      'y+': date.getFullYear().toString(), // 年
      'M+': (date.getMonth() + 1).toString(), // 月
      'd+': date.getDate().toString(), // 日
      'h+': date.getHours().toString(), // 时
      'm+': date.getMinutes().toString(), // 分
      's+': date.getSeconds().toString(), // 秒
      'W+': date.getDay(), // 星期 
      'Q+': Math.ceil((date.getMonth() + 1) / 3) // 季度   // 有其他格式化字符需求可以继续添加，必须转化成字符串
    }
    for (let k in opt) {
      ret = new RegExp('(' + k + ')').exec(fmt)
      if (ret) {
        fmt = fmt.replace(
          ret[1],
          ret[1].length == 1
            ? k === 'W+' || k === 'Q+'
              ? weekArr[opt[k]]
              : opt[k]
            : opt[k].padStart(ret[1].length, '0')
        )
      }
    }
    return fmt
}