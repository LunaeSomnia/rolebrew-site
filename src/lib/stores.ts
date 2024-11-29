import {writable} from 'svelte/store';

import type {Summary} from './bindings';

export const ancestry_summaries = writable<Summary[]|undefined>(undefined);