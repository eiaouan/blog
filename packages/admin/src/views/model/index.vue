<script setup lang="ts">
import modifier from './modifier.vue'
import {ref} from 'vue'
let inputValue = ref('')
</script>

<template>

<modifier v-model.toInt="inputValue"></modifier>

</template>