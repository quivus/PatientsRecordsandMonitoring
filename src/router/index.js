import { createRouter, createWebHistory } from 'vue-router'
import Patientview from '../views/PatientView.vue'
import PatientRecords from '@/views/PatientRecords.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Patientview,
    },
    {
      path: '/patientrecords/:id',
      name: 'patientrecords',
      component: PatientRecords,
    },
  ],
})

export default router
