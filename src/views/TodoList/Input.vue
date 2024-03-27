<script setup lang="ts">
import { ref } from 'vue'
import dayjs from 'dayjs'
import { ElMessage } from 'element-plus'
import { Task } from './utils'

const props = defineProps({
  onAddTask: Function
})
const task = ref('')
const time = ref('')

const handleAddTask = () => {
  if (!task.value) {
    ElMessage.error('请填写日程')
    return
  }
  const newTask: Task = {
    task: task.value,
    time: dayjs(time.value[0]).format('HH:mm') + '~' + dayjs(time.value[1]).format('HH:mm'),
    id: new Date().toString(),
    isCompleted: false
  }
  props.onAddTask?.(newTask)
}

const handleClearInput = () => {
  task.value = ''
  time.value = ''
}
</script>

<template>
  <el-row :gutter="20">
    <el-space>
      <el-time-picker
        style="width: 160px"
        v-model="time"
        is-range
        format="HH:mm"
        range-separator="To"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
      />
      <el-input v-model="task" style="width: 240px" placeholder="请输入"></el-input>
      <el-button @click="handleAddTask(), handleClearInput()">添加</el-button>
    </el-space>
  </el-row>
</template>
