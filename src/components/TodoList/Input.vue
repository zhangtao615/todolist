<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  onAddTask: Function
})
const task = ref('')

const handleClearInput = () => {
  task.value = ''
}
</script>

<template>
  <el-row :gutter="20">
    <el-space>
      <el-input v-model="task" style="width: 240px" placeholder="Please input"></el-input>
      <el-button @click="onAddTask?.(task), handleClearInput()">添加</el-button>
    </el-space>
  </el-row>
</template>
