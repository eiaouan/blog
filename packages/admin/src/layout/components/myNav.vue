<template>
    <div class="nav">
      <ul>
        <li>首页</li>
        <li>分类</li>
        <li>标签</li>
      </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({

})
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  background: #fff;
  box-shadow: 2px 2px #ccc;
}
.nav ul {
  display: flex;
  flex-direction: row-reverse;
    height: 50px;
    line-height: 50px;
    align-items: center;
    li{
    list-style: none;
    height: 30px;
    line-height: 30px;
    margin-right: 20px;
    padding: 0 5px;
    border-radius: 5px;
    background-color: #649f42;
    color: #fff;
    }
}
</style>
