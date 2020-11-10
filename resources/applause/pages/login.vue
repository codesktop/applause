<template>
  <OutsideLayout>
    <div class="bg-white shadow rounded px-12 py-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl">Welcome Back</h1>
      </div>
      <a-form class="login" :model="login" layout="vertical">
        <a-form-item>
          <a-input v-model:value="login.email" size="large">
            <template #prefix>
              <UserOutlined class="mr-1" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="login.password" size="large" type="password">
            <template #prefix>
              <LockOutlined class="mr-1" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button block size="large" type="primary" @click="onSubmit">Log In</a-button>
        </a-form-item>
      </a-form>
    </div>
  </OutsideLayout>
</template>

<script>
import axios from 'axios'
import { message } from 'ant-design-vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import OutsideLayout from '../layouts/outside.vue'

export default {
  components: {
    UserOutlined,
    LockOutlined,
    OutsideLayout
  },
  data() {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit() {
      try {
        const { email, password } = this.login
        await axios.post('/api/login', { email, password })
      } catch ({ response }) {
        message.error(response.data.message)
      }
    }
  }
}
</script>

<style scoped>
form.login {
  width: 24rem;
}
</style>
