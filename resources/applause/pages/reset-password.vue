<template>
  <outside-layout>
    <div class="bg-white shadow rounded px-12 py-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl">Reset Password</h1>
      </div>
      <a-form class="resetPassword" :model="user" layout="vertical">
        <a-form-item>
          <a-input v-model:value="user.password" placeholder="Password" size="large" type="password"></a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="user.passwordConfirmation" placeholder="Password Confirmation" size="large" type="password"></a-input>
        </a-form-item>
        <a-form-item>
          <a-button block :loading="isLoading" size="large" type="primary" @click="onSubmit">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </outside-layout>
</template>

<script>
import axios from 'axios'
import { message } from 'ant-design-vue'
import OutsideLayout from '../layouts/outside.vue'
import head from '../plugins/head'

export default {
  components: {
    OutsideLayout
  },
  data() {
    return {
      user: {
        password: '',
        passwordConfirmation: ''
      },
      isLoading: false
    }
  },
  methods: {
    async onSubmit() {
      this.isLoading = true
      try {
        const { email } = this.$route.query
        const { token } = this.$route.params
        const { password, passwordConfirmation } = this.user
        await axios.post('/api/reset-password', { email, token, password, password_confirmation: passwordConfirmation })
        this.user = {
          password: '',
          passwordConfirmation: ''
        }
      } catch ({ response }) {
        message.error(response.data.message)
      } finally {
        this.isLoading = false
      }
    }
  },
  beforeCreate() {
    head.title('Reset Password')
  },
  created() {
    axios.get('/api/user')
      .then(() => this.$router.replace('/'))
      .catch(console.error)
  }
}
</script>

<style scoped>
form.resetPassword {
  width: 24rem;
}
</style>
