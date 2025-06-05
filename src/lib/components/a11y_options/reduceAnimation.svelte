<script lang="ts">
	import { onMount } from 'svelte';

	let enabled = false;
	const storageKey = 'reduced-motion';

	// Zet of haal de waarde uit localStorage bij laden
	onMount(() => {
		const stored = localStorage.getItem(storageKey);
		if (stored === 'true') {
			enabled = true;
		} else if (stored === 'false') {
			enabled = false;
		} else {
			// Gebruik systeemvoorkeur als er niks is opgeslagen
			enabled = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		}
		updateBodyClass();
	});

	// Toggle de waarde en sla op
	function toggle() {
		enabled = !enabled;
		localStorage.setItem(storageKey, String(enabled));
		updateBodyClass();
	}

	// Zet de juiste klasse op <body>
	function updateBodyClass() {
		if (typeof document !== 'undefined') {
			document.body.classList.toggle('reduced-motion', enabled);
		}
	}
</script>

<div class="flex items-center justify-between" role="group" aria-labelledby="reduced-motion-label">
	<div>
		<label id="reduced-motion-label" for="reduced-motion-control" class="font-medium">
			Reduced Motion
		</label>
		<p id="reduced-motion-description" class="text-sm text-gray-500 font-normal">
			Minimizes animations and transitions
		</p>
	</div>

	<!-- Verborgen checkbox -->
	<div class="relative inline-block w-12 h-6">
		<input
			id="reduced-motion-control"
			type="checkbox"
			class="sr-only"
			checked={enabled}
			on:change={toggle}
			aria-describedby="reduced-motion-description"
			aria-checked={enabled}
		/>

		<!-- Custom switch -->
		<span
			class={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-colors duration-200 ${
				enabled ? 'bg-blue-600' : 'bg-gray-300'
			}`}
			on:click={toggle}
			role="presentation"
		>
			<span
				class={`absolute h-4 w-4 left-1 bottom-1 bg-white rounded-full transition-transform duration-200 ${
					enabled ? 'transform translate-x-6' : ''
				}`}
				aria-hidden="true"
			></span>
		</span>
	</div>

	<div class="sr-only" aria-live="polite">
		Reduced motion is {enabled ? 'enabled' : 'disabled'}
	</div>
</div>

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