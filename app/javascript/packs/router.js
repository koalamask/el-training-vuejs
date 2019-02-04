import Vue from 'vue'
import Router from 'vue-router'
import Main from './pages/Main.vue'
import Login from './pages/Login.vue'
import Admin from './pages/Admin.vue'

// import store from './store' // (1)

Vue.use(Router)

const router = new Router({
	routes: [
      {
      path: '/',
      component: Main
		},
		{
      path: '/login',
      component: Login
		},
		{
      path: '/admin',
      component: Admin
		},
   ]
})

export default router