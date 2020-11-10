<template>
  <OutsideLayout>
    <div class="bg-white shadow rounded px-12 py-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl">Reset Password</h1>
      </div>
      <a-form class="resetPassword" :model="user" layout="vertical">
        <a-form-item>
          <a-input v-model:value="user.newPassword" size="large" type="password"></a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="user.newPassword" size="large" type="password"></a-input>
        </a-form-item>
        <a-form-item>
          <a-button block size="large" type="primary" @click="onSubmit">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </OutsideLayout>
</template>

<script>
import axios from 'axios'
import { message } from 'ant-design-vue'
import OutsideLayout from '../layouts/outside.vue'

export default {
  components: {
    OutsideLayout
  },
  data() {
    return {
      user: {
        password: '',
        passwordConfirmation: ''
      }
    }
  },
  methods: {
    async onSubmit() {
      try {
        const { password, passwordConfirmation } = this.user
        await axios.post('/api/reset-password', { password, password_confirmation: passwordConfirmation })
      } catch ({ response }) {
        message.error(response.data.message)
      }
    }
  }
}
</script>

<style scoped>
form.resetPassword {
  width: 24rem;
}
</style>
