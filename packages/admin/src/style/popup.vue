<!-- popup 弹窗 -->

<script lang="ts" >
  import { defineComponent,defineProps } from 'vue';
 export interface Prop {
    content: string, // 弹窗内容
    type?: string // 弹窗类型
  }

  export default defineComponent({
    props: {
    content: String, // 弹窗内容
    type:{// 弹窗类型
      type: String ,
      default: 'success'
    }
  },
    setup(props) {
      console.log(props);

      return {
        content : props.content || ''
      }
    }
  })

</script>

<template>
  <div class="y-popup" :class="`y-${type}`">
    {{content}}
    <i>
      <svg t="1668088223988" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3582" width="15" height="15"><path d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z" p-id="3583" fill="#ffffff"></path></svg>
    </i>
  </div>
</template>

<style scoped lang="scss">
.y-popup{
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  i{
    vertical-align: middle;
  }
}
.y-success {
  background-color: rgb(66, 194, 59);
}
.y-error {
  background-color: rgb(210, 42, 42);
}

.y-primary{
  background-color: rgb(91, 132, 220);
}
</style>
