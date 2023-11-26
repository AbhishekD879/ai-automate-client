export type selectorType = 'XPATH' | 'CSS' | 'NAME' | 'ID' | 'PARTIAL TEXT';

export class Tag {
	constructor(
		private tagName: string,
		private selectorType: selectorType,
		private selectorValue: string
	) {}

	get tag_name() {
		return this.tagName;
	}

	get selector_type() {
		return this.selectorType;
	}

	get selector() {
		return this.selectorValue;
	}

	set selector(value: string) {
		this.selectorValue = value;
	}

	set selector_type(value: selectorType) {
		this.selectorType = value;
	}
	set tag_name(value: string) {
		this.tagName = value;
	}
}

export type TagType = typeof Tag;
