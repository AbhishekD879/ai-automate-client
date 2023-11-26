<script lang="ts">
	import TestStep from './TestStep.svelte';
	import TestWriterHeader from './TestWriterHeader.svelte';

	let stepCount = 0;
</script>

<section class="flex flex-col gap-4 flex-1 mt-4">
	<TestWriterHeader bind:totalSteps={stepCount} />
	<div class="flex items-center justify-around">
		<h3 class="font-semibold">Test-Step</h3>
		<h3 class="font-semibold">Expected-Behaviour</h3>
	</div>
	{#each Array(stepCount) as _, index}
		<TestStep step={index} />
	{/each}
</section>
