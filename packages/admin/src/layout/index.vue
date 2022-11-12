<script  lang="ts">
import { defineComponent } from 'vue';
import myNav from './components/myNav.vue'

export default defineComponent({
  components: {
    myNav
  }
})
</script>

<template>
    <!-- 导航 -->
    <myNav/>
    <!-- 主体 -->
    <router-view />
    <!-- 底部 -->
</template>
