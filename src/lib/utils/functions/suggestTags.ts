import type { Tag } from '$lib/data/tag';

function suggestTags(target: HTMLTextAreaElement, tags: Tag[]) {
	const inputValue = target.textContent; // Get the current content of the text area
	if (!inputValue) return;
	// Find the word that the user is currently typing (the last word)
	const words = inputValue.split(' ');
	const currentWord = words[words.length - 1];

	// Filter tag suggestions based on the current word
	const matchingTags = tags.filter((tag) =>
		tag.tag_name.toLowerCase().startsWith(currentWord.toLowerCase())
	);
	// Display the suggestions in a dropdown or any other way you prefer
	// For simplicity, let's display them in a console.log
	console.log('Suggestions:', matchingTags);
}
