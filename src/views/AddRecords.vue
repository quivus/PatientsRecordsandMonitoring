<template>
	<div>
		<form @submit.prevent="addRecordsHandler">

			<label for="symptom">Symptom: </label>
			<textarea name="symptom" id="symptom" v-model="symptom"></textarea>

			<label for="diagnosis">Diagnosis: </label>
			<textarea name="diagnosis" id="diaganosis" v-model="diagnosis"></textarea>

			<label for="notes">Notes: </label>
			<textarea name="notes" id="notes" v-model="notes"></textarea>

			<!-- <div class="labcheck">

				<input type="checkbox" id="nonefornow" name="nonefornow" value="none for now">
				<label for="nonefornow">None for now</label>

				<input type="checkbox" id="cbc" name="cbc" value="cbc">
				<label for="cbc">cbc</label>

				<input type="checkbox" id="x-ray" name="x-ray" value="x-ray">
				<label for="x-ray">x-ray</label>
			</div> -->

			<label for="treatment">Possible Treatment: </label>
			<textarea name="treatment" id="treatment" v-model="treatment"></textarea>

			<button type="submit">Record</button>

		</form>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePatientRecord } from '@/stores/patientRecord';

const patientRecordStore = usePatientRecord()
const route = useRoute();
const patientId = ref(null);

onMounted(() => {
	patientId.value = route.params.id;
});

const symptom = ref('')
const diagnosis = ref('')
const notes = ref('')
const treatment = ref('')


const addRecordsHandler = () => {
	const newRecord = {
		recordId: 'r' + (patientRecordStore.patientRecords.length + 1).toString().padStart(3, '0'),
		patientId: String(patientId),
		date: new Date().toISOString().split('T')[0],
		symptom: symptom.value,
		diagnosis: diagnosis.value,
		notes: notes.value,
		treatment: treatment.value
	}
	patientRecordStore.addRecords(newRecord)

	symptom.value = ''
	diagnosis.value = ''
	notes.value = ''
	treatment.value = ''
}
</script>

<style lang="scss" scoped></style>