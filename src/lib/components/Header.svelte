<script lang="ts">
	import IconButton from './IconButton.svelte';
	import Icon from '@iconify/svelte';
	import type { IconProps } from '@iconify/svelte';
	import Search from './Search.svelte';
	import { onMount, onDestroy } from 'svelte';
	// Define the navItems array with the SVG content as a string
	export let navItems: { name: string; iconProps: IconProps }[] = [
		{
			name: 'setting',
			iconProps: {
				width: 20,
				height: 20,
				icon: 'uil:setting'
			}
		},
		{
			name: 'test_files',
			iconProps: {
				width: 20,
				height: 20,
				icon: 'clarity:directory-solid'
			}
		},
		{
			name: 'Notification',
			iconProps: {
				width: 20,
				height: 20,
				icon: 'mdi:bell'
			}
		},
		{
			name: 'Account',
			iconProps: {
				width: 20,
				height: 20,
				icon: 'mdi:account'
			}
		}
	];
	let isMobile = false; // Initialize based on current width

	// Function to update isMobile based on window.innerWidth
	function updateIsMobile() {
		isMobile = window.innerWidth <= 768; // Adjust the threshold as needed
	}
	onMount(() => {
		// Initial setup
		updateIsMobile();

		// Add a resize event listener to watch for changes
		window.addEventListener('resize', updateIsMobile);

		// Cleanup the event listener when the component is destroyed
		onDestroy(() => {
			window.removeEventListener('resize', updateIsMobile);
		});
	});
</script>

<header
	class={`flex items-center ${
		isMobile && 'justify-between'
	} gap-4 px-6 py-4 border-b shadow border-solid border-b-[color:#E8E8E8]`}
>
	<h1 id="logo" class="flex-1 text-xl font-extrabold tracking-[1px]">Header Logo</h1>
	{#if !isMobile}
		<Search />
	{/if}
	<nav class="flex gap-2">
		{#if isMobile}
			<IconButton>
				<Icon icon="iconamoon:menu-burger-horizontal-bold" height="20" width="20" />
			</IconButton>
		{:else}
			{#each navItems as { name, iconProps }}
				<IconButton>
					<Icon {...iconProps} />
				</IconButton>
			{/each}
		{/if}
	</nav>
</header>
