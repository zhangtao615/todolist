<script setup lang="ts">
import { Task } from './utils.ts'
defineProps({
  tasks: Array<Task>,
  onRemoveTask: Function
})
</script>

<template>
  <h3>待办事项</h3>
  <div v-for="item in tasks?.filter((item) => !item.isCompleted)" :key="item.id" class="item">
    <span>{{ item.time }}</span>
    <span>{{ item.task }}</span>
    <el-button @click="onRemoveTask?.(item.id)">完成</el-button>
  </div>

  <div v-if="!tasks?.length">暂无待办事项</div>

  <h3>已完成事项</h3>
  <div v-for="item in tasks?.filter((item) => item.isCompleted)" :key="item.id" class="item">
    <el-text tag="del">{{ item.time }}</el-text>
    <el-text tag="del">{{ item.task }}</el-text>
  </div>
</template>

<style scoped>
.item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
</style>
