import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(ElementPlus)

app.directive('my-onclick', {
  mounted(el, binding) {
    console.log(binding)
    if (typeof binding.value === 'function') {
      el.addEventListener('click', binding.value, false)
    } else {
      throw new Error(`type of ${binding.value} is not a function`)
    }
  },
  unmounted(el, binding) {
    el.removeEventListener('click', binding.value)
  }
})

app.provide('message', 'provide message')

app.config.globalProperties.globalMessage = 'globalMessage'

app.mount('#app')
