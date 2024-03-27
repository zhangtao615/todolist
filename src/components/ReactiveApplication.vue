<script lang="ts" setup>
import { ref, watch, reactive } from 'vue'

const count = ref(0)
const num = ref(1)

const obj = reactive({
  name: 'lgd',
  age: 10,
  hobbies: ['movie', 'walk']
})

watch(
  obj,
  () => {
    console.log(obj)
  },
  {
    deep: true,
    flush: 'sync'
  }
)

const changeHobbies = () => {
  obj.hobbies.push(new Date().toLocaleDateString())
}
</script>

<template>
  <h3>{{ count }}</h3>
  <button @click="count++">count++</button>
  <h3>{{ num }}</h3>
  <button @click="num++">num++</button>
  <button @click="changeHobbies">obj change</button>
</template>
