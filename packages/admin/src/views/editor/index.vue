<template>
    <div class="editor">
      <!-- 导航栏 -->
      <!-- 功能：改变主题，保存，发布， -->
      <div class="editor-nav">
        <div class="setTitle">
          <input type="text" v-model="essayTitle" placeholder="输入标题"/>
        </div>
        <!-- 导航右侧栏 -->

        <div class="saveMd blue" @click="saveMd">保存</div>
        <div class="saveHtml blue">发布</div>
        <div class="change-theme">
          <div class="change-theme-btn blue" @click="showTheme">修改主题</div>

        <div v-show="themeShowed" class="change-theme-select" >
          <!-- 气泡 -->
          <div class="triangle "></div>
          <ul>
            <li v-for="(i,index) in theme " :key="index" @click="changeTheme(index)">{{theme[index]}}</li>
          </ul>
        </div>
        </div>


      </div>
      <!-- 编辑器 -->
      <md-editor class="md-body" ref="mdEditor"  v-model="text" :preview-theme="priviewTheme"/>
    </div>
  </template>

  <script lang="ts">
  import MdEditor from 'md-editor-v3';
  import 'md-editor-v3/lib/style.css';
import { defineComponent, ref } from 'vue';
import { essayInsert } from '@/api/essay';
import {dateFormat} from '@/utils/timeFormat' // 时间格式化
  export default defineComponent({
    components:{
      MdEditor
    },
    setup(){
      let text = ref('')
      let saveMd = async  ()=>{
        // 调用接口，保存md格式的文本
        let formdata = {
          sort_id: 0,
          title: essayTitle.value,
          content: text.value,
          essay_status: '保存' // '保存' '发布'
        }
        let res = await essayInsert(formdata)
        console.log(res);
      }
      let essayTitle = ref('');
      // 'default' | 'github' | 'vuepress' | 'mk-cute' | 'smart-blue' | 'cyanosis'
      let theme = ['default' , 'github' , 'vuepress' , 'mk-cute' , 'smart-blue' , 'cyanosis']
      let priviewTheme = ref('github')
      let themeShowed = ref(false)
      let showTheme = ()=>{ // 展开 修改主题
        themeShowed.value = !themeShowed.value
      }
      // 修改主题
      let changeTheme = (i:number)=>{
        priviewTheme.value = theme[i]
        themeShowed.value = false
      }
      return {
        text,
        priviewTheme,
        saveMd,
        essayTitle,
        changeTheme,
        theme,
        showTheme,
        themeShowed
      }
    }
  })
  </script>

  <style scoped lang="scss">
  .editor {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .md-body {
    min-width: 800px;
    min-height: 500px;
    /* vw vh 以窗口试图为100vw */
    width: 80vw;
    height: 80vh;
  }
  .blue {
    display: inline-block;
    height: 24px;
    margin: 10px;
    padding: 5px 10px;
    background-color: #3654cd;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
  .editor-nav {
    display: flex;
    height: 50px;
    width: 80vw;

  }
  .setTitle {
    // display: inline-block;
    // 占剩余位置
    flex-grow: 1;
    min-width: 300px;
    padding-left: 20px;
    input {
      outline: none;
      border: none;
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      width: 100%;
    }
  }

  .change-theme{
    position: relative;

  }

  .change-theme-select {
      position: absolute;
      left: 10px;
      z-index: 3;
      border: 2px solid #3654cd;
      background-color: #fff;
      border-radius: 5px;
      .triangle {
        position: absolute;
        top: -10px;
        right: 5px;
        width: 0;
        border-bottom: 10px solid #3654cd;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;

      }
    }

  .change-theme-select  li{
    padding: 5px;
    cursor: pointer;
    &:hover{
      background-color: #eee;
    }

}
  </style>
