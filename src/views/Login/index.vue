<template>
  <el-form
    ref="formRef"
    style="max-width: 600px"
    :model="dynamicValidateForm"
    label-width="auto"
    class="demo-dynamic"
  >
    <el-form-item
      prop="name"
      label="用户名"
      :rules="[
        {
          required: true,
          message: 'Please input name',
          trigger: 'blur'
        }
      ]"
    >
      <el-input v-model="dynamicValidateForm.name" />
    </el-form-item>
    <el-form-item
      prop="password"
      label="密码"
      :rules="[
        {
          required: true,
          message: 'Please input password',
          trigger: 'blur'
        }
      ]"
    >
      <el-input type="password" v-model="dynamicValidateForm.password" show-password />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance } from 'element-plus'

const router = useRouter()
const formRef = ref<FormInstance>()
const dynamicValidateForm = reactive<{
  name: string
  password: string
}>({
  name: '',
  password: ''
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      router.push('/')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>
