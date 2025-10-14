<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-red-50/20 font-poppins p-10">
    <div class="max-w-7xl mx-auto">
      <div class="Personalinfo bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 rounded-full bg-gradient-to-r from-[#2933FF] to-[#FF5451] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            {{ patient?.firstname?.[0] }}{{ patient?.lastname?.[0] }}
          </div>
          <div>
            <h2 class="text-3xl font-bold bg-gradient-to-r from-[#2933FF] to-[#FF5451] bg-clip-text text-transparent">
              {{ patient?.firstname }} {{ patient?.lastname }}
            </h2>
            <p class="text-gray-500 text-sm mt-1">Patient Medical Records</p>
          </div>
        </div>
      </div>
      
      <div class="PersonalRecords">
        <div class="search mb-8 relative">
          <div class="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
            <i class="fa-solid fa-magnifying-glass text-xl bg-gradient-to-r from-[#2933FF] to-[#FF5451] bg-clip-text text-transparent"></i>
          </div>
          <input
            type="text"
            placeholder="Search records..."
            class="w-full pl-14 pr-6 py-4 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2933FF]/50 focus:shadow-xl bg-white text-gray-800 placeholder-gray-400 transition-all duration-300 border border-gray-100"
          />
        </div>
        
        <div class="records grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div 
            v-for="record in records" 
            :key="record.recordId"
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 border border-gray-100 group relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-[#2933FF]/5 to-[#FF5451]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div class="relative z-10">
              <div class="flex items-center gap-2 mb-4">
                <span class="w-10 h-10 rounded-full bg-gradient-to-r from-[#2933FF]/10 to-[#FF5451]/10 flex items-center justify-center">
                  <i class="fa-solid fa-stethoscope text-sm bg-gradient-to-r from-[#2933FF] to-[#FF5451] bg-clip-text text-transparent"></i>
                </span>
                <h2 class="text-xl font-bold bg-gradient-to-r from-[#2933FF] to-[#FF5451] bg-clip-text text-transparent">
                  {{ record.diagnosis }}
                </h2>
              </div>
              
              <div class="flex items-start gap-2 mt-3">
                <span class="w-8 h-8 rounded-full bg-gradient-to-r from-[#2933FF]/10 to-[#FF5451]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <i class="fa-solid fa-pills text-xs bg-gradient-to-r from-[#2933FF] to-[#FF5451] bg-clip-text text-transparent"></i>
                </span>
                <div>
                  <h3 class="text-sm font-semibold text-gray-700 mb-1">Treatment</h3>
                  <p class="text-sm text-gray-600">{{ record.treatment }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
</style>