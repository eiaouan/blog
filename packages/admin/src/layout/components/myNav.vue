<template>
    <div class="nav">
      <ul>
        <li class="blue">首页</li>
        <li >
          <div class="serch">
            <input type="text" placeholder="输搜索内容">
            <i ><svg t="1668267858413" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2560" width="15" height="15"><path d="M960 876.8l-134.4-140.8c44.8-64 70.4-140.8 70.4-224 0-211.2-172.8-384-384-384S128 300.8 128 512s172.8 384 384 384c83.2 0 160-25.6 217.6-70.4l134.4 140.8c25.6 25.6 64 25.6 89.6 0C985.6 940.8 985.6 902.4 960 876.8zM512 768c-140.8 0-256-115.2-256-256 0-140.8 115.2-256 256-256s256 115.2 256 256C768 652.8 652.8 768 512 768z" p-id="2561" fill="#ffffff"></path></svg></i>
          </div>
        </li>
        <li class="blue">写文章</li>
        <li class="blue">统计</li>
        <li class="avatar">
          <svg t="1668268475418" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3866" width="30" height="30"><path d="M512 85.333333c235.52 0 426.666667 191.146667 426.666667 426.666667s-191.146667 426.666667-426.666667 426.666667S85.333333 747.52 85.333333 512 276.48 85.333333 512 85.333333z m0 85.333334c-188.373333 0-341.333333 152.96-341.333333 341.333333s152.96 341.333333 341.333333 341.333333 341.333333-152.96 341.333333-341.333333-152.96-341.333333-341.333333-341.333333z m0 597.333333c-84.010667 0-161.450667-34.858667-213.333333-93.098667 26.154667-39.68 121.941333-77.568 213.333333-77.568s187.178667 37.888 213.333333 77.568C673.450667 733.141333 596.010667 768 512 768z m0-469.333333c70.826667 0 128 57.173333 128 128s-57.173333 128-128 128-128-57.173333-128-128 57.173333-128 128-128z" p-id="3867" fill="#1296db"></path></svg>
        </li>
      </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({

})
</script>

<style scoped lang="scss">
// @include '../../style/_global.scss'
@import '../../style/_global.scss';
.nav {
  display: flex;
    flex-direction: row-reverse;
  width: 100%;
  padding-right: 30px;
  background: #fff;
  box-shadow: 2px 2px #ccc;
  border: 1px solid #ccc ;
  box-sizing: border-box;
}
.nav ul {
  display: flex;
  flex-direction: row;
    height: 50px;
    line-height: 50px;
    align-items: center;
    .blue{
    list-style: none;
    height: 30px;
    line-height: 30px;
    margin-right: 20px;
    padding: 0 5px;
    // border-radius: 5px;
    background-color: $primary-color;
    color: #fff;
    }
}
.serch {
  height: 30px;
  line-height: 30px;
  margin-right:30px ;
  input{
    height: 100%;
    // 取消原有样式
    outline: none;
    border: none;
    border: 1px solid #ccc;
    border-right: none;
    // border-radius: 5px 0 0 5px ;
    box-sizing: border-box;
  }
  i{
    text-align: center;
    display: inline-block;
    width: 30px;
    height: 100%;
    background-color: $primary-color;
  }

}
.avatar{
  height: 30px;
  line-height: 30px;
  cursor: pointer;
}

</style>
