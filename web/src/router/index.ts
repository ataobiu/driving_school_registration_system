import { createRouter, createWebHistory } from 'vue-router'
import { ElNotification } from 'element-plus'

const routes = [
  {
    path: "/",
    component: () => import('@/Layout/Layout.vue'),
    redirect: "home",
    children: [
      {
        // 首页
        path: "/home",
        component: () => import('@/views/HomeView.vue')
      },
      {
        // 模拟考试
        path: "practice",
        redirect: "/practice/select/小车",
        component: () => import('@/views/practice.vue'),
        children: [
          {
            // 子菜单
            path: "select/:name",
            component: () => import('@/views/select.vue')
          },
        ]
      },
      {
        // 学员报名
        path: "form",
        component: () => import('@/views/form.vue')
      },
      {
        // 驾校管理
        path: "manage",
        component: () => import('@/views/manage.vue')
      },
    ]
  },
  {
    // 登录页面
    path: "/login",
    component: () => import('@/views/login.vue')
  },
  {
    // 注册页面
    path: "/register",
    component: () => import('@/views/register.vue')
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.path == '/home' || to.path == '/login' || to.path == '/register') {
    next()
  } else if (token) {
    next()
  } else if (!token && to.path != '/') {
    ElNotification({
      title: '失败',
      message: '请先登录！',
      type: 'error',
    })
    next('/')
  }
})

export default router