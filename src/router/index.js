import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
    component: () => import('../layout/main.vue'),
    children: [{
      path: '/login',
      name: "Login",
      component: () => import('../views/Login.vue')
    },]
  },
  {
    path: '/admin',
    name: "Admin",
    redirect: '/todo',
    component: () => import('../layout/admin.vue'), children: [{
      path: '/todo',
      name: "Todo",
      component: () => import('../views/Todo.vue')
    },]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('auth') && to.name !== 'Login') {
    return { page: '/login' }
  } else next()

})

export default router
