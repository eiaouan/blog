<script setup lang="ts">
import essayCard from '@/components/essayCard.vue';
import {getEssayList} from '@/api/essay'
// 显示 文章管理
const res = await getEssayList();
const essayList = res.data.data

</script>

<template>
    <div>
      <!-- 文章分类： 已发布，未法发布 -->
      <!-- 封面 -->
      <!-- 标题 -->
      <!-- 简介 -->
      <!-- 时间和标签 -->
      <div class="essay-list">
        <ul>
          <li v-for="(item,index) in essayList" :key="index">
              <!-- 文章列表 -->
              <essayCard :ec="item"/>
          </li>
        </ul>
      </div>
    </div>
</template>

<style scoped lang="scss">
.essay-list {
  margin-top: 20px;
}
</style>
