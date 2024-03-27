<script setup lang="ts">
import { shallowRef, toValue } from 'vue'
interface Obj {
  count: number
}
const obj = shallowRef<Obj>({ count: 1 })

const changeCount = () => {
  let count = toValue(obj.value.count) + 1
  console.log(count)
  obj.value = { count }
}
</script>

<template>
  <h1>{{ obj.count }}</h1>
  <button @click="changeCount">count++</button>
</template>
