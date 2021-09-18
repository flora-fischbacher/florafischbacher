import { writable } from 'svelte/store';

export const isDev = writable(import.meta.env.MODE === 'development');
