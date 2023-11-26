<script lang="ts">
	import Icon from '@iconify/svelte';
	import IconButton from './IconButton.svelte';
</script>

<div
	id="search"
	class="pl-2 pr-6 flex gap-1 flex-row-reverse items-center border-1 border-solid border-[color:#E8E8E8] bg-white rounded-xl"
>
	<input
		class="border-0 outline-0 text-sm font-semibold"
		type="text"
		name="q"
		placeholder="Search For Test"
	/>
	<div class="grid place-items-center mt-1">
		<IconButton>
			<Icon icon="material-symbols:search" width="20" height="20" />
		</IconButton>
	</div>
</div>
