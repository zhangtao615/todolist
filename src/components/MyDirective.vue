<script setup lang="ts">
import { ref, inject, version, getCurrentInstance, onMounted } from 'vue'
const message = inject('message')
const count = ref(0)
const add = () => {
  count.value++
}
console.log(version, 'version')

const _this = getCurrentInstance()
onMounted(() => {
  console.log(_this)
})
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <div>{{ count }}</div>
    <button v-my-onclick="add">点击</button>
  </div>
</template>
