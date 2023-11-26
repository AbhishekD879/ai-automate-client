export function setCaretPosition(el: HTMLTextAreaElement, pos: number) {
	el.setSelectionRange(pos, pos);
}
