<script lang="ts">
	import { onMount } from 'svelte';
	let enabled = false;
	const storageKey = 'dark-mode';

	onMount(() => {
		const stored = localStorage.getItem(storageKey);
		if (stored === 'true') enabled = true;
		else if (stored === 'false') enabled = false;
		else enabled = window.matchMedia('(prefers-color-scheme: dark)').matches;

		updateClass();
	});

	function toggle() {
	enabled = !enabled;
	localStorage.setItem(storageKey, String(enabled));
	updateClass();
}

	function updateClass() {
		document.documentElement.classList.toggle('dark-mode', enabled);
	}
</script>

<div class="darkmode-toggle" role="group" aria-labelledby="dark-mode-label">
	<div>
		<label id="dark-mode-label" for="dark-mode-control"><strong>Dark Mode</strong></label>
		<p id="dark-mode-description">Switch to Dark Mode</p>
	</div>

	<div class="switch">
		<input
			id="dark-mode-control"
			type="checkbox"
			class="sr-only"
			checked={enabled}
			on:change={toggle}
			aria-checked={enabled}
			aria-describedby="dark-mode-description"
		/>

		<span class="slider" on:click={toggle}>
			<span class="knob" aria-hidden="true"></span>
		</span>
	</div>

	<div class="sr-only" aria-live="polite">
		Dark mode is {enabled ? 'enabled' : 'disabled'}
	</div>
</div>

<style>
.darkmode-toggle {
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
</style>