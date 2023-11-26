import { writable } from 'svelte/store';
import type { Tag } from './../data/tag';
export const tags = writable<Tag[]>([]);
