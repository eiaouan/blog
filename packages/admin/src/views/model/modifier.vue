<!-- 自定义修饰符组件，使用父子组件实现 -->
<!-- 实现一个从字符串中提取数字的修饰符 -->
<script setup lang="ts">
import {onMounted} from 'vue'
interface Props {
    modelModifiers:{toInt: Boolean},
    modelValue:String
}
const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
let changeValue = ()=>{
    if(props.modelModifiers.toInt){
        let num = props.modelValue.replace(/[^0-9]/ig,"");
        emit("update:modelValue",num)
    }
}

onMounted(()=>{
    console.log(props.modelModifiers.toInt);
    
})
</script>

<template>
<div>
    <input type="text" @click="changeValue" :value="modelValue">
</div>
</template>