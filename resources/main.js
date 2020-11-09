import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import antd from 'ant-design-vue'
import App from './applause/app.vue'
import routes from './applause/routes/all'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(antd)
app.use(router)
app.mount('#app')
