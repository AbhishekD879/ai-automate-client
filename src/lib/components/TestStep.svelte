<script lang="ts">
	import Icon from '@iconify/svelte';
	import IconButton from './IconButton.svelte';
	import { isTestStarted } from './../store/testStartedStore';
	import { onMount, onDestroy } from 'svelte';
	import type { Unsubscriber } from 'svelte/store';
	import TextArea from '$lib/utils/componets/TextArea.svelte';
	export let step: number;
	let disabled = false;
	let unsubscribeIstestDStarted: Unsubscriber | null = null;

	onMount(() => {
		unsubscribeIstestDStarted = isTestStarted.subscribe(($state) => (disabled = $state));
	});
	onDestroy(() => {
		if (unsubscribeIstestDStarted != null) unsubscribeIstestDStarted();
	});

	const runTestStep = () => {
		isTestStarted.update(() => true);
		setTimeout(() => {
			isTestStarted.update(() => false);
		}, 5000);
	};
</script>

<div class="flex items-start justify-evenly shadow-2xl">
	<div class="flex flex-col justify-start items-center h-full p-2">
		<h3 class="font-semibold">Step:{step + 1}</h3>
		<IconButton bind:disabled onclick={runTestStep}>
			<Icon icon="carbon:play-filled" height="20" width="20" color="black" />
		</IconButton>
	</div>
	<div class="flex w-full gap-x-4">
		<TextArea />
		<TextArea />
	</div>
</div>
