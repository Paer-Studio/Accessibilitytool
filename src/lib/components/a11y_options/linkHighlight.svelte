<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let enabled = writable(true);
	const storageKey = 'highlight-links';

	onMount(() => {
		const selectedElement =
			'h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i';

		// Check localStorage for saved preference
		const stored = localStorage.getItem(storageKey);
		if (stored === 'true') enabled.set(true);
		else if (stored === 'false') enabled.set(false);

		function addListeners() {
			let links = document.querySelectorAll('a');

			links.forEach((el) => {
				el.addEventListener('mouseover', mouseOverHandler);
				el.addEventListener('mouseout', mouseOutHandler);
			});
		}

		function removeListeners() {
			let links = document.querySelectorAll('a');

			links.forEach((el) => {
				el.removeEventListener('mouseover', mouseOverHandler);
				el.removeEventListener('mouseout', mouseOutHandler);
				el.classList.remove('hoverLink');
				el.style.border = 'none';
			});
			document.body.querySelectorAll(selectedElement).forEach((e) => {
				e.classList.remove('dim', 'undim');
			});
			document.documentElement.style.setProperty('--opacity-cursor', '1');
		}

		function mouseOverHandler(event) {
			let el = event.currentTarget;
			document.body.querySelectorAll(selectedElement).forEach((e) => {
				e.classList.add('dim');
			});

			el.classList.remove('dim');
			el.classList.add('undim', 'hoverLink');
			el.style.border = 'solid 2px red';
			document.documentElement.style.setProperty('--opacity-cursor', '0');
		}

		function mouseOutHandler(event) {
			let el = event.currentTarget;
			document.body.querySelectorAll(selectedElement).forEach((e) => {
				e.classList.remove('dim', 'undim');
			});
			el.classList.remove('hoverLink');
			el.style.border = 'none';
			document.documentElement.style.setProperty('--opacity-cursor', '1');
		}

		// Setup reactive effect op toggle
		let unsubscribe = enabled.subscribe((value) => {
			if (value) {
				addListeners();
			} else {
				removeListeners();
			}
			localStorage.setItem(storageKey, String(value));
		});

		// Cleanup als component unmount
		return () => {
			unsubscribe();
			removeListeners();
		};
	});

	function toggle() {
		enabled.update((value) => !value);
	}
</script>

<div class="link-highlight-toggle" role="group" aria-labelledby="link-highlight-label">
	<div>
		<label id="link-highlight-label" for="link-highlight-control"
			><strong>Link Highlight</strong></label
		>
		<p id="link-highlight-description">Highlights links on hover and dims other content</p>
	</div>

	<div class="switch">
		<input
			id="link-highlight-control"
			type="checkbox"
			class="sr-only"
			checked={$enabled}
			on:change={toggle}
			aria-checked={$enabled}
			aria-describedby="link-highlight-description"
		/>

		<span class="slider" on:click={toggle}>
			<span class="knob" aria-hidden="true"></span>
		</span>
	</div>

	<div class="sr-only" aria-live="polite">
		Link highlight is {$enabled ? 'enabled' : 'disabled'}
	</div>
</div>

<style>
	.link-highlight-toggle {
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

	/* Dim alles */
	:global(.dim) {
		color: rgba(0, 0, 0, 0.15);
		transition: color 0.3s ease;
	}

	/* Uitgezonderd de geselecteerde link */
	:global(.undim) {
		color: black;
		transition: color 0.3s ease;
	}

	/* Hover effect op de link */
	:global(a.hoverLink) {
		opacity: 1 !important;
		border: solid 2px red;
		z-index: 10;
		position: relative;
		transition: border 0.3s ease;
	}
</style>
