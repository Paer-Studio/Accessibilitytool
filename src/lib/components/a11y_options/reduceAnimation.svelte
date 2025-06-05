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
		updateClass();
	});

	// Toggle de waarde en sla op
	function toggle() {
		enabled = !enabled;
		localStorage.setItem(storageKey, String(enabled));
		updateClass();
	}

	// Zet de juiste klasse op <body>
	function updateClass() {
		if (typeof document !== 'undefined') {
			document.body.classList.toggle('reduced-motion', enabled);
		}
	}
</script>

<div class="reduced-motion-toggle" role="group" aria-labelledby="reduced-motion-label">
	<div>
		<label id="reduced-motion-label" for="reduced-motion-control"><strong>Reduced Motion</strong></label>
		<p id="reduced-motion-description">Minimizes animations and transitions</p>
	</div>

	<div class="switch">
		<input
			id="reduced-motion-control"
			type="checkbox"
			class="sr-only"
			checked={enabled}
			on:change={toggle}
			aria-checked={enabled}
			aria-describedby="reduced-motion-description"
		/>

		<span class="slider" on:click={toggle}>
			<span class="knob" aria-hidden="true"></span>
		</span>
	</div>

	<div class="sr-only" aria-live="polite">
		Reduced motion is {enabled ? 'enabled' : 'disabled'}
	</div>
</div>

<style>
	.reduced-motion-toggle {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 1rem 0;
	}

	.switch {
		position: relative;
		width: 40px;
		height: 20px;
	}

	.slider {
		background: #ccc;
		border-radius: 20px;
		width: 100%;
		height: 100%;
		cursor: pointer;
		transition: background 0.3s;
		display: block;
		position: relative;
	}

	.knob {
		position: absolute;
		left: 2px;
		bottom: 2px;
		width: 16px;
		height: 16px;
		background: white;
		border-radius: 50%;
		transition: transform 0.3s;
	}

	input:checked + .slider {
		background: #333;
	}

	input:checked + .slider .knob {
		transform: translateX(20px);
	}

	.sr-only {
		position: absolute;
		left: -9999px;
	}

	:global(body.reduced-motion) * {
		animation-duration: 0s !important;
		transition-duration: 0s !important;
		animation-iteration-count: 1 !important;
	}
</style>