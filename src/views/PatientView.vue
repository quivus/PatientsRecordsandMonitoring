<template>
  <div class="min-h-screen flex font-poppins bg-gray-50 text-gray-900">
    <div class="sidebar w-96 p-8 bg-white shadow-lg flex flex-col overflow-auto">
      <div class="flex flex-col items-center mb-10 pb-6 border-b border-gray-200">
        <div class="gradient-logo w-28 h-28 mb-4"></div>
        <h1 class="text-4xl font-extrabold bg-gradient-to-r from-[#2933FF] to-[#FF5451] bg-clip-text text-transparent text-center">
          ACLC CLINIC
        </h1>
        <p class="text-sm text-gray-500 mt-1">Patient Management</p>
      </div>
      <PatientHandler />
    </div>

    <div class="main flex-1 p-8 overflow-auto">
      <div class="search mb-6 relative ">
        <div class="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <i class="fa-solid fa-magnifying-glass text-gray-400 bg-gradient-to-r from-[#2933FF] to-[#FF5451] bg-clip-text text-transparent"></i>
        </div>
        <input
          type="text"
          v-model="store.searchterm"
          placeholder="Search patient by name..."
          class="w-full pl-12 pr-4 py-3 rounded-lg border-2 rounded-full text-gray-900 transition outline-none"
          style="border-image: linear-gradient(135deg, #2933FF, #FF5451) 1; border-style: solid;"
        />

      </div>

      <div class="content grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="patient in store.filteredpatients"
          :key="patient.id"
          @click="patientsrecord(patient.id)"
          class="cursor-pointer bg-white rounded-xl p-6 shadow hover:shadow-lg transition relative overflow-hidden border border-gray-100"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-[#2933FF]/10 to-[#FF5451]/10 opacity-0 hover:opacity-100 transition-opacity rounded-xl"></div>
          
          <div class="relative z-10">
            <p class="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#2933FF] to-[#FF5451] bg-clip-text text-transparent mb-3">
              {{ patient.firstname }} {{ patient.middlename }} {{ patient.lastname }}
            </p>
            <div class="space-y-1 text-gray-600 text-sm mb-4">
              <p class="flex items-center gap-2">
                <span class="w-5 h-5 flex items-center justify-center">
                  <i class="fa-solid fa-phone bg-gradient-to-r from-[#2933FF] to-[#FF5451] bg-clip-text text-transparent"></i>
                </span>
                {{ patient.emergencyContact }}
              </p>
              <p class="flex items-center gap-2">
                <span class="w-5 h-5 flex items-center justify-center">
                  <i class="fa-solid fa-envelope bg-gradient-to-r from-[#2933FF] to-[#FF5451] bg-clip-text text-transparent"></i>
                </span>
                {{ patient.email }}
              </p>
            </div>
            <div class="flex justify-end gap-3">
              <button
                @click.stop="handleEdit(patient)"
                class="px-5 py-2 text-blue-600 border border-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:text-white transition"
              >
                <i class="fa-solid fa-pen mr-1"></i>Edit
              </button>
              <button
                @click.stop="handleDelete(patient.id)"
                class="px-5 py-2 text-red-600 border border-red-600 rounded-lg text-sm font-semibold hover:bg-red-600 hover:text-white transition"
              >
                <i class="fa-solid fa-trash mr-1"></i>Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { usePatientStore } from '@/stores/patientsStore'
import PatientHandler from '@/modals/PatientHandler.vue'

const store = usePatientStore()
const router = useRouter()

const patientsrecord = (id) => {
  router.push({ name: 'patientrecords', params: { id } })
}

const handleEdit = (patient) => {
  store.setFormforEdit(patient)
}

const handleDelete = (id) => {
  store.deletePatient(id)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.gradient-logo {
  mask: url("../../images/ACLC.svg") center / contain no-repeat;
  -webkit-mask: url("../../images/ACLC.svg") center / contain no-repeat;
  background: linear-gradient(135deg, #2933FF, #FF5451);
  background-size: 200% 200%;
  width: 7rem;
  height: 7rem;
  display: inline-block;
}

.focus\:ring-gradient:focus {
  box-shadow: 0 0 0 2px transparent, 0 0 0 3px rgba(41, 51, 255, 0.4);
  border-color: transparent;
}
</style>
