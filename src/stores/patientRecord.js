import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const usePatientRecord = defineStore('patientRecord', () => {
  const storedRecords = localStorage.getItem('patientRecords')
  const patientRecords = ref(
    storedRecords
      ? JSON.parse(storedRecords)
      : [
          {
            recordId: 'r001',
            patientId: '1',
            date: '2025-08-01',
            diagnosis: 'Hypertension',
            symptom: 'Headaches, dizziness', // Added symptom
            treatment: 'Medication prescribed',
            notes: 'Follow-up in 2 weeks',
          },
          {
            recordId: 'r002',
            patientId: '1',
            date: '2025-08-01',
            diagnosis: 'Diarhhea',
            symptom: 'Stomach cramps, dehydration', // Added symptom
            treatment: 'Medication prescribed',
            notes: 'Follow-up Tommorow',
          },
          {
            recordId: 'r003',
            patientId: '3',
            date: '2025-08-01',
            diagnosis: 'Common Cold',
            symptom: 'Cough, sneezing, sore throat', // Added symptom
            treatment: 'Medication prescribed, and lots of rest',
            notes: 'Follow-up in 2 days',
          },
        ],
  )

  watch(
    patientRecords,
    (newValue) => {
      localStorage.setItem('patientRecords', JSON.stringify(newValue))
    },
    { deep: true },
  )

  const getpatient = (id) => {
    return patientRecords.value.filter((r) => r.patientId === String(id))
  }

  const addRecords = (newRecord) => {
    patientRecords.value.push(newRecord)
  }

  return { patientRecords, getpatient, addRecords }
})
