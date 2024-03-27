<script setup lang="ts">
import { ref } from 'vue'
import Child from './Child.vue'

const count = ref(0)
const add = () => {
  count.value++
}
</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="add">parent count++</button>
  <Child :count :add="add" />
</template>
