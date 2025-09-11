<template>
	<form @submit.prevent="addPatientHandler">

		<label for="patientFirstname">Firstname: </label>
		<input type="name" v-model="patientFirstname" id="patientFirstname" required>

		<label for="patientLastname">Lastname: </label>
		<input type="name" v-model="patientLastname" id="patientLastname" required>

		<label for="patientMiddlename">Middlename: </label>
		<input type="name" v-model="patientMiddlename" id="patientMiddlename" required>

		<label for="patientPassword">Password: </label>
		<input type="password" v-model="patientPassword" id="patientPassword" v-bind="patientLastname">

		<label for="patientFacebook">Facebook: </label>
		<input type="facebook" v-model="patientFacebook" id="patientFacebook">

		<label for="patientEmail">Email: </label>
		<input type="email" v-model="patientEmail" id="patientEmail">

		<label for="patientEmergencycontact">Emergencycontact: </label>
		<input type="number" v-model="patientEmergencycontact" id="patientEmergencycontact">

		<button type="submit">Add Patient</button>
	</form>
</template>

<script setup>
import { ref } from 'vue';
import { usePatientStore } from '@/stores/patientsStore';

const store = usePatientStore()

const patientFirstname = ref('')
const patientLastname = ref('')
const patientMiddlename = ref('')
const patientPassword = ref('')
const patientFacebook = ref('')
const patientEmail = ref('')
const patientEmergencycontact = ref(0);

const addPatientHandler = () => {
	store.addPatient({
		firstname: patientFirstname.value,
		lastname: patientLastname.value,
		middlename: patientMiddlename.value,
		password: patientPassword.value,
		facebook: patientFacebook.value,
		email: patientEmail.value,
		emergencyContact: patientEmergencycontact.value
	})
	patientFirstname.value = ''
	patientLastname.value = ''
	patientMiddlename.value = ''
	patientPassword.value = ''
	patientFacebook.value = ''
	patientEmail.value = ''
	patientEmergencycontact.value = ''
}

</script>