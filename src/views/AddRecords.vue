<template>
	<div>
		<form submit.prevent="addRecordHandler">

			<label for="symptom">Symptom: </label>
			<textarea name="symptom" id="symptom"></textarea>

			<label for="diagnosis">Diagnosis: </label>
			<textarea name="diagnosis" id="diaganosis"></textarea>

			<label for="desciption">Dscription: </label>
			<textarea name="desciption" id="desciption"></textarea>

			<div class="labcheck">

				<input type="checkbox" id="nonefornow" name="nonefornow" value="none for now">
				<label for="nonefornow">None for now</label>

				<input type="checkbox" id="cbc" name="cbc" value="cbc">
				<label for="cbc">cbc</label>

				<input type="checkbox" id="x-ray" name="x-ray" value="x-ray">
				<label for="x-ray">x-ray</label>
			</div>

			<label for="intervention">Possible Intervention: </label>
			<textarea name="intervention" id="intervention"></textarea>

			<button type="submit">Record</button>

		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import PatientRecords from '@/views/PatientRecords.vue';

const record = PatientRecords()

const symptom = ref('')
const diagnosis = ref('')
const desciption = ref('')
const intervention = ref('')

const addRecordsHandler = () => {
	record.addRecords({
		symptom: symptom.value,
		diagnosis: diagnosis.value,
		desciption: desciption.value,
		intervention: intervention.value
	})

	symptom.value = ''
	diagnosis.value = ''
	desciption.value = ''
	intervention.value = ''
}
</script>

<style lang="scss" scoped></style>