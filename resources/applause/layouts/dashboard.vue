<template>
  <a-layout>
    <a-layout-sider class="h-screen" :width="256">
      <div class="h-16"></div>
      <sider-menu></sider-menu>
    </a-layout-sider>
    <a-layout class="bg-gray-200">
      <a-layout-header class="bg-white shadow px-12 z-50">
        <div class="flex items-center h-full">
          <div class="flex flex-auto flex-row-reverse items-center">
            <header-dropdown></header-dropdown>
          </div>
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
import SiderMenu from '../components/sider-menu.vue'
import HeaderDropdown from '../components/header-dropdown.vue'

export default {
  components: {
    SiderMenu,
    HeaderDropdown
  },
  async created() {
    const { data } = await axios.get('/api/user')
  }
}
</script>
