<script setup lang="ts">
import { ref } from 'vue'
import { Task } from './utils.ts'
import Input from './Input.vue'
import List from './List.vue'

const tasks = ref<Task[]>([])
const handleAddTask = (task: Task) => {
  tasks.value.push(task)
}

const handleRemoveTask = (taskId: string) => {
  tasks.value.forEach((task) => {
    if (task.id === taskId) {
      task.isCompleted = true
    }
  })
}
</script>

<template>
  <h1>TodoList</h1>
  <Input :onAddTask="handleAddTask" />
  <List :tasks :onRemoveTask="handleRemoveTask" />
</template>
