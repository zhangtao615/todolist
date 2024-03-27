<template>
  <div @click="add">count: {{ count }}</div>

  <div>
    <h1>{{ msg }}</h1>
    <h3>name: {{ name }}</h3>
    <h3>age: {{ age }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRef } from 'vue'

export default defineComponent({
  props: {
    msg: String
  },
  setup() {
    const count = ref(0)
    const obj = reactive({
      name: 'lgd',
      age: 18
    })
    const add = () => {
      count.value++
    }
    const name = toRef(obj, 'name')
    const age = toRef(obj, 'age')
    return {
      count,
      add,
      name,
      age
    }
  }
})
</script>
