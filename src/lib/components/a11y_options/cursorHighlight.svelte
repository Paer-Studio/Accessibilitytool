<script lang="ts">
	import { onMount } from "svelte";

	let followCursor = $state(false);
	let pageX = $state(0);
	let pageY = $state(0);

	let settings = $state({
		areaSizeLevel: 1,
		cursorSizeLevel: 4,
		cursorColor: 'blue',
	});

	function updateCursorStyles() {
		const size = settings.cursorSizeLevel * 10;
		document.documentElement.style.setProperty('--x-cursor', `${pageX}px`);
		document.documentElement.style.setProperty('--y-cursor', `${pageY}px`);
		document.documentElement.style.setProperty('--sizeX-cursor', `${size}px`);
		document.documentElement.style.setProperty('--sizeY-cursor', `${size}px`);
		document.documentElement.style.setProperty('--color-cursor', `hsl(${settings.cursorSizeLevel * settings.cursorSizeLevel} 60.7% 45.7%)`);
	}

	function resetCursorStyles() {
		const root = document.documentElement.style;
		root.removeProperty('--x-cursor');
		root.removeProperty('--y-cursor');
		root.removeProperty('--sizeX-cursor');
		root.removeProperty('--sizeY-cursor');
		root.removeProperty('--color-cursor');
		root.setProperty('--z-index', '0');
		root.setProperty('--opacity-cursor', '0');
	}

	function toggleAfter() {
		if (settings.cursorSizeLevel > 14) {
			// Turn off
			followCursor = false;
			settings.cursorSizeLevel = 0;
			window.removeEventListener('mousemove', moveAfterElement);
			resetCursorStyles();
			return;
		}

		if (!followCursor) {
			followCursor = true;
			window.addEventListener('mousemove', moveAfterElement);
			document.documentElement.style.setProperty('--opacity-cursor', '1');
			document.documentElement.style.setProperty('--z-index', '10000');
		}

		// Increase size
		settings.cursorSizeLevel += settings.cursorSizeLevel < 4 ? 4 : 2;
		updateCursorStyles();
	}

	function moveAfterElement(e: MouseEvent) {
		pageX = e.clientX;
		pageY = e.clientY;
		updateCursorStyles();
	}

</script>

<button onclick={toggleAfter}>
	{#if settings.cursorSizeLevel <= 4}
		followCursor
	{:else if settings.cursorSizeLevel > 4}
		cursor area  {settings.cursorSizeLevel}
	{/if}
</button>

<style>

:global(html:has(.buttonBox button[popovertarget="a11y-menu"]) .buttonBox::after) {
	content: '';
	position: fixed;
	top: var(--y-cursor, var(--btn-top));
	left: var(--x-cursor);
	width: var(--sizeX-cursor, 100%);
	height: var(--sizeY-cursor, 100%);
	outline: solid var(--color-cursor) 5px;
	z-index: var(--z-index, 10000);
	opacity: var(--opacity-cursor, 1);
	border-radius: 50%;
	mix-blend-mode: screen;
	transition: opacity 0.5s ease-out;
	pointer-events: none;
	transform-origin: center center;
	transform: translate(calc(-.5 * var(--sizeX-cursor)), calc(-.5 * var(--sizeX-cursor)) );
}

:global(html:has(*:hover) .buttonBox::after) {
	outline-offset: 2rem !important;
	outline-color: color-mix(in srgb, var(--color-cursor) , black) !important;
	transition: 1s ease-out;
}


div {
	position: fixed;
	top: var(--btn-top);
	right: var(--btn-right);
	width: var(--sizeX-cursor);
	height: var(--sizeY-cursor);
	background-color: var(--color-cursor);
	z-index: -1;
	border-radius: 50%;
}

button {
	color: white;
	padding: 2%;
	background-color: var(--color-cursor, #333);
}

</style>