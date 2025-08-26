<template>
  <div class="Personalinfo">
      <h2>{{ patient.firstname }}  {{ patient.lastname }}</h2>
  </div>
  <div class="PersonalRecords">
    <div class="search"></div>
    <div class="records">
      <div v-for="record in records">
        <h2>{{ record.diagnosis }}</h2>
        <h3>{{ record.treatment }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { usePatientRecord } from '@/stores/patientRecord'
import { usePatientStore } from '@/stores/patientsStore'
import { computed } from 'vue'

const route = useRoute()
const patientsStore = usePatientStore()
const patientRecord = usePatientRecord()

const patientId = Number(route.params.id)

const patient = computed(() => {
 return patientsStore.patients.find(p => p.id === patientId)
})

const records = computed(() => {
 return patientRecord.getpatient(patientId)
})
</script>

<style lang="scss" scoped></style>
