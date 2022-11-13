<!-- 文章列表 的卡片 -->

<script lang="ts" setup>
import { defineProps } from 'vue';
export interface EssayCard { //
  essayId: number,
  title: string,
  update_time : string,
  // username: string , // 作者 后台管理系统不需要写作者
}
export interface Props{
  ec: EssayCard
}
const {ec} = defineProps<Props>() // 获取参数
console.log('props',ec);

</script>

<template>
 <div class="essay-card">
  <div class="title">
    {{ec.title}}
  </div>
  <div class="action">···</div>
  <div class="time">
    {{ec.update_time}}
  </div>
 </div>
</template>

<style scoped lang="scss">
.essay-card{
  position: relative;
  padding: 10px 8px;
  margin-bottom: 4px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  &:hover{
    transform: scaleX(1.01);
  }
  .title {
    font-size: 20px;
    margin: 4px 0;
  }
  .time{
    color: #bbb;
    font-size: 12px;
  }
  .action {
    position: absolute;
    top: 18px;
    right: 10px;
    color: #555;

  }
}
</style>
