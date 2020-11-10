<template>
  <OutsideLayout>
    <div class="bg-white shadow rounded px-12 py-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl">Forgot Password</h1>
      </div>
      <a-form class="forgotPassword" :model="user" layout="vertical">
        <a-form-item>
          <a-input v-model:value="user.email" size="large">
            <template #prefix>
              <MailOutlined class="mr-1" />
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
import { MailOutlined } from '@ant-design/icons-vue'
import OutsideLayout from '../layouts/outside.vue'

export default {
  components: {
    MailOutlined,
    OutsideLayout
  },
  data() {
    return {
      user: {
        email: ''
      }
    }
  },
  methods: {
    async onSubmit() {
      try {
        const { email } = this.user
        const { data } = await axios.post('/api/forgot-password', { email })
        message.info(data.message)
      } catch ({ response }) {
        message.error(response.data.message)
      }
    }
  }
}
</script>

<style scoped>
form.forgotPassword {
  width: 24rem;
}
</style>
