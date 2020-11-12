<template>
  <a-layout>
    <a-layout-sider class="h-screen" width="240">
      <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item>
          MANAGE
        </a-menu-item>
        <a-sub-menu>
          <template #title>
            <span>ACCOUNT</span>
          </template>
          <a-menu-item>
            Billing
          </a-menu-item>
          <a-menu-item>
            Settings
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout class="bg-gray-200">
      <a-layout-header class="bg-white shadow z-50">
        <div class="flex justify-between">
          <div>
            <a-input-search></a-input-search>
          </div>
          <a-dropdown placement="bottomRight">
            <div class="flex items-center cursor-pointer px-3">
              <a-avatar src="" size="large"></a-avatar>
            </div>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <router-link to="/user/profile">Your profile</router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/settings">Settings</router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/">Sign out</router-link>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </a-layout-header>
      <a-layout-content>

      </a-layout-content>
      <a-layout-footer>

      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import { DownOutlined } from '@ant-design/icons-vue'

export default {
  data() {
    return {
      openKeys: [],
      selectedKeys: []
    }
  },
  components: {
    DownOutlined
  }
}
</script>
