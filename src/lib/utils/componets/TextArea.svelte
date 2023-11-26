<script lang="ts">
	import { getCaretPosition } from './../functions/getCaretPosition';
	import { setCaretPosition } from './../functions/setCaretPosition';
	import { updateSuggestions } from '../functions/updateSuggestions';
	import { tags as tagStore } from './../../store/tagsStore';
	import type { Tag } from './../../data/tag';
	let caretPosition = 0;
	let suggestionBoxRef: HTMLDivElement | null = null;
	let tags: Tag[] | null = null;
	tagStore.subscribe(($state) => (tags = $state));
	function updateTextareaHeight(event: Event) {
		if (!event.target) return;
		const textarea = event.target as HTMLTextAreaElement;
		textarea.style.height = 'auto'; // Reset height to auto
		textarea.style.height = `${textarea.scrollHeight}px`; // Set height to match the content
	}
	// Click handle
	const handelClick = (event: Event) => {
		const textArea = event.target as HTMLTextAreaElement;
		if (textArea.value === '') {
			// If the textarea is empty, start at the beginning.
			caretPosition = 0;
		} else {
			// Restore the caret position.
			setCaretPosition(textArea, caretPosition);
		}
	};

	// Change Handler
	const handleInputChange = (event: Event) => {
		const textArea = event.target as HTMLTextAreaElement;
		caretPosition = getCaretPosition(textArea);
		console.log(caretPosition);
		updateTextareaHeight(event);
		if (event.target && tags && suggestionBoxRef) {
			updateSuggestions(textArea, tags, suggestionBoxRef);
		}
	};
</script>

<div class="relative w-full">
	<textarea
		on:input={handleInputChange}
		on:click={handelClick}
		spellcheck="true"
		autocomplete="on"
		class="w-full resize-none shadow rounded p-1 border-0 outline-none bg-[#f7f7f7] font-semibold"
	>
	</textarea>
	<div
		bind:this={suggestionBoxRef}
		class="hidden absolute w-full resize-none shadow rounded p-1 border-0 outline-none bg-[#f7f7f7] font-semibold"
	></div>
</div>
