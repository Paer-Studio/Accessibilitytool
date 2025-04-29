// src/lib/stores/accessibility.js
import { writable } from 'svelte/store';

export const language = writable('en');
export const profile = writable(null);
