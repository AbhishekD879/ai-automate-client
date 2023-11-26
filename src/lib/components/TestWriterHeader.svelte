<script lang="ts">
	import { Tag } from './../data/tag';
	import type { selectorType as TagSelectorType } from './../data/tag.ts';
	import Icon from '@iconify/svelte';
	import IconButton from './IconButton.svelte';
	import Input from '$lib/utils/componets/Input.svelte';
	import Select from '$lib/utils/componets/Select.svelte';
	import Button from '$lib/utils/componets/Button.svelte';
	import Chip from '$lib/utils/componets/Chip.svelte';
	import { tags as tagStore } from './../store/tagsStore';
	export let totalSteps: number = 0;
	const selector = ['XPATH', 'ID', 'CSS', 'NAME', 'PARTIAL TEXT', 'LINK'];
	$: showAddTag = false;
	let tags: Tag[] = [];
	tagStore.subscribe(($state) => (tags = $state));
	let tagName = '';
	let selectorType: TagSelectorType | '' = '';
	let selectorValue = '';
	const addTag = () => {
		console.log('Added tag called', tagName, selectorType, selectorValue);
		if (!tagName || !selectorType || !selectorValue) return;
		const tag = new Tag(tagName, selectorType, selectorValue);
		tagStore.update((pre: Tag[]) => {
			const newTags = [...pre, tag]; // Create a new array with the new tag
			return newTags; // Return the new state
		});
		tags = tags;
		showAddTag = false;
		tagName = '';
		selectorValue = '';
		console.log('Added tag');
	};
</script>

<div
	id="testWriterHeader"
	class="flex items-center justify-between border-b border-solid border-b-[color:#E8E8E8] py-2"
>
	<div class="flex items-center flex-1 gap-x-4">
		<IconButton onclick={() => (totalSteps += 1)}>
			<div class="flex items-center">
				<Icon class="mt-0.5" icon="material-symbols:add" height="20" width="20" color="black" />
				<h3 class="font-semibold">Step</h3>
			</div>
		</IconButton>
		<IconButton onclick={() => (showAddTag = !showAddTag)}>
			<div class="flex items-center">
				<Icon class="mt-0.5" icon="mdi:tag" height="20" width="20" color="black" />
				<h3 class="font-semibold">Add Tag</h3>
			</div>
		</IconButton>
	</div>
	<h3 class="font-semibold">Total Steps :{totalSteps}</h3>
</div>
{#if showAddTag}
	<div class="flex gap-4">
		<Input bind:value={tagName} name="TagName" />
		<Select bind:value={selectorType} name="Selector" options={selector} />
		<Input bind:value={selectorValue} name="SelectorValue" />
		<Button name="Add" onclick={addTag} />
	</div>
{/if}
<div>
	{#if tags.length > 0}
		<div>Tags</div>
		<div class="flex flex-wrap gap-y-2 gap-x-1 py-2">
			{#each tags as tag, index}
				<Chip chipText={tag.tag_name} />
			{/each}
		</div>
	{/if}
</div>
