<template>
  <div class="sidebar">
    <!-- <SidebarComponent /> -->
  </div>
  <div class="main">
    <div class="search">
      <input type="text" v-model="store.searchterm" placeholder="Patient Name..." />
    </div>
    <div class="content">
      <div
        class="patients"
        v-for="patient in store.filteredpatients"
        :key="patient.id"
        @click="patientsrecord(patient.id)"
      >
        <p class="firstname">{{ patient.firstname }}</p>
        <p class="middlename">{{ patient.middlename }}</p>
        <p class="lastname">{{ patient.lastname }}</p>
        <p class="contactnumber">{{ patient.contactnumber }}</p>
        <p class="adress">{{ patient.address }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { usePatientStore } from '@/stores/patientsStore'
import SidebarComponent from '@/components/SidebarComponent.vue'

const store = usePatientStore()
const router = useRouter()

const patientsrecord = (id) => {
  router.push({ name: 'patientrecords', params: { id } })
}
</script>

<style lang="scss" scoped></style>
