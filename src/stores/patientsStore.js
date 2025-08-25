import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePatientStore = defineStore('patientStore', () => {
  const searchterm = ref('')
  const patients = ref([
    {
      id: 1,
      firstname: 'Arcgel',
      middlename: 'Bataluna',
      lastname: 'Chavez',
      contactnumber: '09165995755',
      address: 'Tugas Gun-ob Lapu Lapu City',
    },
    {
      id: 2,
      firstname: 'Rajie Mae',
      middlename: '',
      lastname: ' Villa',
      contactnumber: '09165995755',
      address: 'Ibabao Lapu Lapu City',
    },
    {
      id: 3,
      firstname: 'Raizza Mae',
      middlename: '',
      lastname: 'Empeno',
      contactnumber: '09165995755',
      address: 'Kagudoy Lapu Lapu City',
    },
  ])

  const filteredpatients = computed(() => {
    const term = searchterm.value.toLowerCase()
    return patients.value.filter((patient) =>
      Object.values(patient).some((val) => String(val).toLowerCase().includes(term)),
    )
  })

  return { searchterm, patients, filteredpatients }
})
