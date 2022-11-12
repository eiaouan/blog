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
  <div class="layout">
    <!-- 导航 -->
    <myNav/>
    <!-- 主体 -->
    <router-view />
    <!-- 底部 -->
  </div>

</template>

<style lang="scss" scoped>
.layout {
  width: 80vw;
  min-width: 980px;

}
</style>

