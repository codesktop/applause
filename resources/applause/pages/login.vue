<template>
  <OutsideLayout>
    <div class="bg-white p-5">
      <a-form class="">
        <a-form-item>
          <a-input class="w-64" size="large">
            <template #prefix>
              <UserOutlined />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input size="large">
            <template #prefix>
              <LockOutlined />
            </template>
          </a-input>
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
