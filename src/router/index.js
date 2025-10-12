import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import Patientview from '../views/PatientView.vue'
import PatientRecords from '@/views/PatientRecords.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Patientview,
      meta: { requiresAuth: true } // Requires authentication
    },
    {
      path: '/patientrecords/:id',
      name: 'patientrecords',
      component: PatientRecords,
      meta: { requiresAuth: true } // Requires authentication
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ],
})

// Global Navigation Guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const isAuthenticated = authStore.isAutheticated
  
  // 1. If the route requires authentication AND the user is NOT authenticated, redirect to login.
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirect to login page
    next({ name: 'login' })
    return
  }
  
  // 2. If the user is authenticated AND they are trying to go to the login page, redirect to home ('/').
  if (to.name === 'login' && isAuthenticated) {
    // Redirect to the home page (Patientview)
    next({ name: 'home' })
    return
  }

  // 3. Otherwise, proceed to the route
  next()
})

export default router
