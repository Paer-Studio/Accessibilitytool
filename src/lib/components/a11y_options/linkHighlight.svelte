<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let highlightLinks = writable(true);

	onMount(() => {
		const selectedElement = 'h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i';

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
				// Reset styles als ze zijn gezet
				el.classList.remove('hoverLink');
				el.style.border = 'none';
			});
			document.body.querySelectorAll(selectedElement).forEach(e => {
				e.classList.remove('dim', 'undim');
			});
			document.documentElement.style.setProperty('--opacity-cursor', '1');
		}

		function mouseOverHandler(event) {
			let el = event.currentTarget;
			document.body.querySelectorAll(selectedElement).forEach(e => {
				e.classList.add('dim');
			});

			el.classList.remove('dim');
			el.classList.add('undim', 'hoverLink');
			el.style.border = 'solid 2px red';
			document.documentElement.style.setProperty('--opacity-cursor', '0');
		}

		function mouseOutHandler(event) {
			let el = event.currentTarget;
			document.body.querySelectorAll(selectedElement).forEach(e => {
				e.classList.remove('dim', 'undim');
			});
			el.classList.remove('hoverLink');
			el.style.border = 'none';
			document.documentElement.style.setProperty('--opacity-cursor', '1');
		}

		// Setup reactive effect op toggle
		let unsubscribe = highlightLinks.subscribe(enabled => {
			if (enabled) {
				addListeners();
			} else {
				removeListeners();
			}
		});

		// Cleanup als component unmount
		return () => {
			unsubscribe();
			removeListeners();
		};
	});
</script>

<label>
	<input type="checkbox" bind:checked={$highlightLinks}>
	Highlight links
</label>

<style>
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
		border: solid 2px red; /* fallback */
		z-index: 10;
		position: relative;
		transition: border 0.3s ease;
	}

	label {
		display: inline-flex;
		align-items: center;
		margin-bottom: 1em;
		font-family: sans-serif;
		user-select: none;
	}

	input[type="checkbox"] {
		margin-right: 0.5em;
		width: 1.2em;
		height: 1.2em;
		cursor: pointer;
	}
</style>
