<template>
  <OutsideLayout>
    <div class="bg-white shadow rounded px-12 py-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl">Welcome Back</h1>
      </div>
      <a-form class="login" layout="vertical">
        <a-form-item>
          <a-input size="large">
            <template #prefix>
              <UserOutlined class="mr-1" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input size="large" type="password">
            <template #prefix>
              <LockOutlined class="mr-1" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button block size="large" type="primary">Log In</a-button>
        </a-form-item>
      </a-form>
    </div>
  </OutsideLayout>
</template>

<script>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import OutsideLayout from '../layouts/outside.vue'

export default {
  components: {
    UserOutlined,
    LockOutlined,
    OutsideLayout
  }
}
</script>

<style scoped>
form.login {
  width: 24rem;
}
</style>
