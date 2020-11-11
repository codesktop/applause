<template>
  <div class="min-h-screen bg-900">
    <div class="flex items-center justify-center">
      <div class="py-16">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async created() {
    await axios.get('/api/sanctum/csrf-cookie')
  }
}
</script>

<style scoped>
.bg-900 {
  background-color: #061638;
}
</style>
