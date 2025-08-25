<template>
	<div>

	</div>
</template>

<script setup>
const patient = computed(() => {
	storeToRefs.patient.find(p => p.id === patientID)
})
</script>

<style lang="scss" scoped></style>