import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePatientRecord = defineStore('patientRecord', () => {
  const patientRecords = ref([
    {
      recordId: 'r001',
      patientId: '1',
      date: '2025-08-01',
      diagnosis: 'Hypertension',
      treatment: 'Medication prescribed',
      notes: 'Follow-up in 2 weeks',
    },
    {
      recordId: 'r002',
      patientId: '1',
      date: '2025-08-01',
      diagnosis: 'Diarhhea',
      treatment: 'Medication prescribed',
      notes: 'Follow-up Tommorow',
    },
    {
      recordId: 'r003',
      patientId: '3',
      date: '2025-08-01',
      diagnosis: 'Common Cold',
      treatment: 'Medication prescribed, and lots of rest',
      notes: 'Follow-up in 2 days',
    },
  ])

  const getpatient = (id) => {
    return patientRecords.value.filter(r => r.patientId === String(id))
  }

  return { patientRecords, getpatient }
})
