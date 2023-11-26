import type { Tag } from '$lib/data/tag';

function updateSuggestions(textarea: HTMLTextAreaElement, suggestions: Tag[]) {
	const userInput = textarea.value;
	const caretPos = textarea.selectionStart;
	const textToCaret = userInput.slice(0, caretPos);

	const match = textToCaret.match(/@(\w*)$/);
	if (match) {
		const searchWord = match[1];
		const allSuggestionsNames: string[] = suggestions.map((suggestion: Tag) => suggestion.tag_name);
		const filteredSuggestions = allSuggestionsNames.filter((s) => s.startsWith(searchWord));
		// displaySuggestions(filteredSuggestions);
	} else {
		// suggestionBox.style.display = 'none';
	}
}
