<script lang="ts">
	import { onDestroy } from 'svelte';
	import { isTestStarted } from './../store/testStartedStore';
	$: testStarted = false;
	const unsubscribe = isTestStarted.subscribe(($state) => {
		testStarted = $state;
	});

	// Function to update the state

	// Clean up the subscription when the component is destroyed
	onDestroy(() => {
		unsubscribe();
	});
</script>

<div
	class="w-1/4 flex justify-center items-center border border-r-0 border-solid border-[color:#E8E8E8]"
>
	{#if testStarted}
		<div class="video-container">
			<video controls class="video">
				<source src="/media/cc0-videos/flower.webm" type="video/webm" />
				<source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
				Download the
				<a href="/media/cc0-videos/flower.webm">WEBM</a>
				or
				<a href="/media/cc0-videos/flower.mp4">MP4</a>
				video.
			</video>
		</div>
	{:else}
		<h1>Test Not Yet Started</h1>
	{/if}
</div>

<style>
	/* Style the parent container with the aspect ratio */
	.video-container {
		position: relative;
		width: 100%;
		padding-bottom: 75%; /* 4:3 aspect ratio (3 / 4 * 100%) */
		overflow: hidden;
	}

	/* Style the video to fit within the parent container */
	.video {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
</style>
