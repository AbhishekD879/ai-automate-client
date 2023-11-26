<script lang="ts">
	import TestStream from '$lib/components/TestStream.svelte';
	import TestWriter from '$lib/components/TestWriter.svelte';
</script>

<main id="workPad" class="px-6 flex-1 flex gap-4">
	<TestWriter />
	<TestStream />
</main>
