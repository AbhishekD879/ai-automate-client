<script lang="ts">
	import { getCaretPosition } from './../functions/getCaretPosition';
	import { setCaretPosition } from './../functions/setCaretPosition';
	let caretPosition = 0;
	function updateTextareaHeight(event: Event) {
		if (!event.target) return;
		const textarea = event.target as HTMLTextAreaElement;
		textarea.style.height = 'auto'; // Reset height to auto
		textarea.style.height = `${textarea.scrollHeight}px`; // Set height to match the content
	}
	// Click handle
	const handelClick = (event: Event) => {
		const textArea = event.target as HTMLTextAreaElement;
		caretPosition = getCaretPosition(textArea);
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
		console.log(caretPosition);
		updateTextareaHeight(event);
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
	<div class="absolute w-full z-10 h-5 bg-red-400"></div>
</div>
