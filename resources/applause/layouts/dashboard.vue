<template>
  <a-layout>
    <a-layout-sider class="h-screen" :width="256">
      <div class="h-16"></div>
      <a-menu v-model:openKeys="openKeys"
              v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" :inlineIndent="0">
        <a-menu-item>
          <span class="px-6">Dashboard</span>
        </a-menu-item>
        <a-sub-menu>
          <template #title>
            <span class="font-bold text-sm text-gray-600 tracking-widest uppercase px-6">RESOURCES</span>
          </template>
          <a-menu-item>
            <span class="px-6">Networks</span>
          </a-menu-item>
          <a-menu-item>
            <span class="px-6">Databases</span>
          </a-menu-item>
          <a-menu-item>
            <span class="px-6">Caches</span>
          </a-menu-item>
          <a-menu-item>
            <span class="px-6">Domains</span>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout class="bg-gray-200">
      <a-layout-header class="bg-white shadow px-12 z-50">
        <div class="flex justify-between">
          <div class="search">
            <a-input-search></a-input-search>
          </div>
          <a-dropdown placement="bottomRight">
            <a-space class="cursor-pointer">
              <a-avatar src="https://i2.wp.com/ui-avatars.com/api/applause"></a-avatar>
              <span class="select-none">applause</span>
            </a-space>
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
        <slot></slot>
      </a-layout-content>
      <a-layout-footer class="bg-gray-200">
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import axios from 'axios'
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
  },
  async created() {
    const { data } = await axios.get('/api/user')
  }
}
</script>
