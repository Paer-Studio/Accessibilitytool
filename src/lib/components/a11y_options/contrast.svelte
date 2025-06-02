<script lang="ts">
	import { onMount } from 'svelte';
	import {Select} from '$lib';
	let v = $state('');

	function handleChange(newValue: string) {
		v = newValue;
		const root = document.documentElement;
		root.setAttribute('data-contrast', newValue);

		// Contrast variables
		if (newValue === 'high-contrast') {
			root.style.setProperty('--text-color', '#000000');
			root.style.setProperty('--background-color', '#ffffff');
			root.style.setProperty('--accent-color', '#0000ff');			
		} else if (newValue === 'low-contrast') {
			root.style.setProperty('--text-color', '#333333');
			root.style.setProperty('--background-color', '#f2f2f2');
			root.style.setProperty('--accent-color', '#6666ff');
		} else if (newValue === 'dark-mode') {
			root.style.setProperty('--text-color', '#ffffff');
			root.style.setProperty('--background-color', '#121212');
			root.style.setProperty('--accent-color', '#4d94ff');
		} else if (newValue === 'light-mode') {
			root.style.setProperty('--text-color', '#000000');
			root.style.setProperty('--background-color', '#f8f9fa');
			root.style.setProperty('--accent-color', '#0066cc');
		} else {
			// default
			root.style.removeProperty('--text-color');
			root.style.removeProperty('--background-color');
			root.style.removeProperty('--accent-color');
		}

		const elements = document.querySelectorAll('body:not(.override), section:not(.override), header:not(.override), footer:not(.override), nav:not(.override), main:not(.override), aside:not(.override), button:not(.override), input:not(.override), select:not(.override), textarea:not(.override), div:not(.override),label:not(.override)');
			elements.forEach((element) => {
			// Ensure element is an HTMLElement to access the style property.
			// The query 'body, section, header, footer, nav, main, aside'
			if (element instanceof HTMLElement) {
				element.style.backgroundColor = 'var(--background-color)';
				// element.style.backgroundColor = 'var(--accent-color) !important';
				element.style.color = 'var(--text-color)';
				element.style.borderColor = 'var(--accent-color)';
			}
		});
	}
</script>

<Select
	label="Contrast"
	value ={v}
	defaultValue="default"
	onChange={handleChange}>
	<option value="high-contrast">High Contrast</option>
	<option value="low-contrast">Low Contrast</option>
	<option value="dark-mode">Dark Mode</option>
	<option value="light-mode">Light Mode</option>
</Select>

<div class="contrast-example">
	{#if v === 'high-contrast'}
		<!-- <p>High Contrast Mode is enabled</p> -->
		<span class="high bg-gray-200"></span>
		<span class="high bg-gray-400"></span>
		<span class="high bg-gray-600"></span>
		<span class="high bg-gray-800"></span>
	{:else if v === 'low-contrast'}
		<!-- <p>Low Contrast Mode is enabled</p> -->
		<span class="low bg-white border border-black"></span>
        <span class="low bg-black"></span>
	{:else if v === 'dark-mode'}
		<!-- <p>Dark Mode is enabled</p> -->
		<span class="dark bg-gray-900"></span>
		<span class="dark bg-gray-800"></span>
		<span class="dark bg-gray-700"></span>
	{:else if v === 'light-mode'}
		<!-- <p>Light Mode is enabled</p> -->
		<span class="light bg-gray-100"></span>
		<span class="light bg-gray-200"></span>
		<span class="light bg-gray-300"></span>
	{/if}
</div>

<style>
.contrast-example {
	display: flex;
	width: 100%;
	height: 4cqh;
	margin-block: 1rem;
	box-shadow: -8px 15px 0 -8px var(--accent-color);
}

span{
	flex: 1 1 auto;
}
.bg-gray-200 {
	background-color: #e2e8f0;
}
.bg-gray-400 {
	background-color: #cbd5e1;
}
.bg-gray-600 {
	background-color: #4b5563;
}
.bg-gray-800 {
	background-color: #1f2937;
}
.bg-gray-900 {
	background-color: #111827;
}
.bg-white {
	background-color: #ffffff;
}
.bg-black {
	background-color: #000000;
}
.bg-gray-100 {
	background-color: #f3f4f6;
}
.bg-gray-300 {
	background-color: #d1d5db;
}
.bg-gray-700 {
	background-color: #374151;
}
.bg-gray-500 {
	background-color: #6b7280;
}


</style>