import type { Tag } from '$lib/data/tag';

export function updateSuggestions(
	textarea: HTMLTextAreaElement,
	suggestions: Tag[],
	suggestionBox: HTMLDivElement
) {
	console.log('updateTagCalled');
	const userInput = textarea.value;
	const caretPos = textarea.selectionStart;
	const textToCaret = userInput.slice(0, caretPos);

	const match = textToCaret.match(/@(\w*)$/);
	if (match) {
		const searchWord = match[1];
		const allSuggestionsNames: string[] = suggestions.map((suggestion: Tag) => suggestion.tag_name);
		const filteredSuggestions = allSuggestionsNames.filter((s) => s.startsWith(searchWord));
		displaySuggestions(filteredSuggestions, suggestionBox, textarea);
	} else {
		suggestionBox.style.display = 'none';
	}
}

function displaySuggestions(
	filteredSuggestions: string[],
	suggestionBox: HTMLDivElement,
	textArea: HTMLTextAreaElement
) {
	if (filteredSuggestions.length === 0) {
		suggestionBox.style.display = 'none';
		return;
	}

	suggestionBox.innerHTML = '';
	filteredSuggestions.forEach((suggestion) => {
		const div = document.createElement('div');
		div.textContent = suggestion;
		div.addEventListener('click', () => {
			insertSuggestion(suggestion, textArea, suggestionBox);
		});
		suggestionBox.appendChild(div);
	});
	positionSuggestionBox(textArea, suggestionBox);
	suggestionBox.style.display = 'block';
}

function positionSuggestionBox(textArea: HTMLTextAreaElement, suggestionBox: HTMLDivElement) {
	suggestionBox.style.left = textArea.offsetLeft + 'px';
	suggestionBox.style.top = textArea.offsetTop + textArea.offsetHeight + 'px';
}

function insertSuggestion(
	suggestion: string,
	textarea: HTMLTextAreaElement,
	suggestionBox: HTMLDivElement
) {
	const userInput = textarea.value;
	const caretPos = textarea.selectionStart;
	const textToCaret = userInput.slice(0, caretPos);

	const updatedText = textToCaret.replace(/@\w*$/, '@' + suggestion) + userInput.slice(caretPos);
	textarea.value = updatedText;
	suggestionBox.style.display = 'none';
	// Move the caret to the end of the inserted suggestion
	textarea.focus();
	const endPos = textToCaret.length + suggestion.length + 1;
	textarea.setSelectionRange(endPos, endPos);
}
