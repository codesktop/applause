<template>
  <OutsideLayout>
    <div class="bg-white shadow rounded px-12 py-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl">Forgot Password</h1>
      </div>
      <a-form class="forgotPassword" :model="user" layout="vertical">
        <a-form-item>
          <a-input v-model:value="user.email" placeholder="Email Address" size="large" type="email">
            <template #prefix>
              <MailOutlined class="mr-1" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button block :loading="isLoading" size="large" type="primary" @click="onSubmit">Submit</a-button>
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
      },
      isLoading: false
    }
  },
  methods: {
    async onSubmit() {
      this.isLoading = true
      try {
        const { email } = this.user
        const { data } = await axios.post('/api/forgot-password', { email })
        message.info(data.message)
        this.user.email = ''
      } catch ({ response }) {
        message.error(response.data.message)
      } finally {
        this.isLoading = false
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
