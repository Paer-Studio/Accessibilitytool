<script lang="ts">
	import { onMount } from 'svelte';

	let enabled = false;
	const storageKey = 'reduced-motion';

	onMount(() => {
		const stored = localStorage.getItem(storageKey);
		if (stored === 'true') {
			enabled = true;
		} else if (stored === 'false') {
			enabled = false;
		} else {
			enabled = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		}
		updateBodyClass();
	});

	function toggle() {
		enabled = !enabled;
		localStorage.setItem(storageKey, String(enabled));
		updateBodyClass();
	}

	function updateBodyClass() {
		if (typeof document !== 'undefined') {
			document.body.classList.toggle('reduced-motion', enabled);
		}
	}
</script>

<!-- Kan ook sections maken -->
<div class="flex items-center justify-between" role="group" aria-labelledby="reduced-motion-label">
	<div>
		<label id="reduced-motion-label" for="reduced-motion-control" class="font-medium">
			Reduced Motion
		</label>
		<p id="reduced-motion-description" class="text-sm text-gray-500 font-normal">
			Minimizes animations and transitions
		</p>
	</div>

	<!-- Schakelaar / sections maken -->
	<div class="relative inline-block w-12 h-6">
		<input
			id="reduced-motion-control"
			type="checkbox"
			class="sr-only peer"
			checked={enabled}
			on:change={toggle}
			aria-describedby="reduced-motion-description"
		/>

		<!-- Custom switch visuals, afhankelijk van input state -->
		<span
			class="absolute top-0 left-0 right-0 bottom-0 rounded-full transition-colors duration-200 
				bg-gray-300 peer-checked:bg-blue-600
			"
			aria-hidden="true"
		></span>
		<span
			class="absolute h-4 w-4 left-1 bottom-1 bg-white rounded-full transition-transform duration-200 
				transform peer-checked:translate-x-6
			"
			aria-hidden="true"
		></span>
	</div>

	<!-- Live status update -->
	<div class="sr-only" aria-live="polite">
		Reduced motion is {enabled ? 'enabled' : 'disabled'}
	</div>
</div>

<noscript>
	<div class="mt-4 p-2 border border-gray-300 text-sm text-gray-600">
		<label for="fallback-reduced-motion">Reduced Motion</label>
		<input id="fallback-reduced-motion" type="checkbox" disabled />
		<p>Deze functie werkt alleen met JavaScript ingeschakeld.</p>
	</div>
</noscript>

<style>
    :global(body.reduced-motion) * {
      animation-duration: 0s !important;
      transition-duration: 0s !important;
      animation-iteration-count: 1 !important;
    }

    label#reduced-motion-label {
		font-weight: bold;
	}
</style>
