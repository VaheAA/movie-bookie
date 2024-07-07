<template>
	<div class="fixed top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center h-full z-10">
		<ProgressSpinner
			style="width: 50px; height: 50px"
			strokeWidth="8"
			fill="transparent"
			animationDuration=".5s"
			aria-label="Custom ProgressSpinner"
		/>
	</div>
</template>

<script setup lang="ts">
import ProgressSpinner from 'primevue/progressspinner'
</script>
