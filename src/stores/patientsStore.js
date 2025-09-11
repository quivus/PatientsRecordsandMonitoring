import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const usePatientStore = defineStore('patientStore', () => {
  const searchterm = ref('')

  const storedPatients = localStorage.getItem('patients')
  const patients = ref(
    storedPatients
      ? JSON.parse(storedPatients)
      : [
          {
            id: 1,
            firstname: 'Arcgel',
            middlename: 'Bataluna',
            lastname: 'Chavez',
            contactnumber: '09165995755',
            address: 'Tugas Gun-ob Lapu Lapu City',
            password: 'chavezpassword',
            facebook: 'facebook.com/arcgel',
            email: 'arcgel@email.com',
            emergencyContact: '09112233445',
          },
          {
            id: 2,
            firstname: 'Rajie Mae',
            middlename: '',
            lastname: ' Villa',
            contactnumber: '09165995755',
            address: 'Ibabao Lapu Lapu City',
            password: 'villapassword',
            facebook: '',
            email: 'rajie@email.com',
            emergencyContact: '09223344556',
          },
          {
            id: 3,
            firstname: 'Raizza Mae',
            middlename: '',
            lastname: 'Empeno',
            contactnumber: '09165995755',
            address: 'Kagudoy Lapu Lapu City',
            password: 'empenopassword',
            facebook: '',
            email: '',
            emergencyContact: '09334455667',
          },
        ],
  )

  watch(
    patients,
    (newPatients) => {
      localStorage.setItem('patients', JSON.stringify(newPatients))
    },
    { deep: true },
  )

  const filteredpatients = computed(() => {
    const term = searchterm.value.toLowerCase()
    return patients.value.filter((patient) =>
      Object.values(patient).some((val) => String(val).toLowerCase().includes(term)),
    )
  })

  const addPatient = (patient) => {
    if (!patient.id) {
      patient.id = Date.now()
    }
    patients.value.push(patient)
  }

  return { searchterm, patients, filteredpatients, addPatient }
})
