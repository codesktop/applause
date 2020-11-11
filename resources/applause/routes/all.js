import loginPage from '../pages/login.vue'
import forgotPasswordPage from '../pages/forgot-password.vue'
import resetPasswordPage from '../pages/reset-password.vue'
import notFoundPage from '../pages/not-found.vue'

export default [
  {
    path: '/login',
    component: loginPage
  },
  {
    path: '/forgot-password',
    component: forgotPasswordPage
  },
  {
    path: '/reset-password/:token',
    component: resetPasswordPage
  },
  {
    path: '/:slug(.*)*',
    component: notFoundPage
  }
]
