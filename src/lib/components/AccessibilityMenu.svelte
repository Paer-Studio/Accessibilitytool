<script lang="ts">
	import {
		LanguageSelector,
		ProfileSelector,
		TextSize,
		CursorHighlight,
		LineHeight,
		ReduceAnimation
		// DarkMode
	} from '$lib';
	import { fade } from 'svelte/transition';
	import LinkHighlight from './a11y_options/linkHighlight.svelte';
	import DarkMode from './a11y_options/darkMode.svelte';
=======
  import {LanguageSelector, ProfileSelector, DarkMode} from '$lib';
</script>

<div class="buttonBox override">
	<button popovertarget="a11yMenu" aria-label="Open Accessibility Menu">♿︎</button>
</div>

<!-- In principle, there should be a form that reactively updates every time something changes within it.  -->
<div id="a11yMenu" class="menu override" popover>
	<div class="menuHeader">
		<h2 class="menuTitle">Accessibility Menu</h2>
		<button
			class="closeButton"
			popovertarget="a11yMenu"
			popovertargetaction="hide"
			aria-label="Close Accessibility Menu">×</button
		>
	</div>

	<div class="menuContent">
		<LanguageSelector />
		<ProfileSelector />
		<TextSize />
		<LineHeight />
		<ReduceAnimation />
		<LinkHighlight />
		<DarkMode />
	</div>
=======
  <h2 class="menuTitle">Accessibility Menu</h2>
  <LanguageSelector />
  <ProfileSelector />

  <DarkMode />

  <button popovertarget="a11y-menu" popovertargetaction="hide">x</button>
  <button>reset</button>
  <button>close</button>

  
  <button popovertarget="a11yMenu" popovertargetaction="hide">x</button>

</div>

<style>
	:root {
		--btn-top: 4dvh;
		--btn-right: 5dvw;
		--menu-spacing: 1rem;
	}

	:global(.override) {
		--font-size: initial;
		--line-height: initial;
	}

	.buttonBox {
		display: inline-flex;
		place-content: end;
		position: fixed;
		top: var(--btn-top);
		right: var(--btn-right);
		left: auto;
		z-index: 500;
	}

	button {
		anchor-name: --myAnchor;
		z-index: 1000;
		font-size: 1.5rem;
		cursor: pointer;
		aspect-ratio: 1/1;
		width: 3rem;
		border-radius: 50%;
		border: none;
		background: #333;
		color: white;
	}

	.menu {
		display: none;
		max-width: min(90dvw, 50rem);
		max-height: 50dvh;
		position: fixed;
		top: calc(3.5rem + var(--btn-top));
		right: var(--btn-right);
		left: auto;
		z-index: 10;
		border: 0.1rem solid #ccc;
		border-radius: 0.5rem;
		background-color: #ffffffe1;
		backdrop-filter: blur(10px);
		margin: 0;
		margin-left: 3rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		overflow: auto;
		transition-behavior: allow-discrete;
		transition:
			opacity 0.2s ease-out,
			transform 0.1s ease-in-out,
			display 0.2s allow-discrete;
	}

	.menuHeader {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--menu-spacing);
		border-bottom: 1px solid #eee;
	}

	.menuTitle {
		font-size: 1.2rem;
		margin: 0;
	}

	.closeButton {
		width: 2rem;
		height: 2rem;
		font-size: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		color: #666;
		border: none;
		cursor: pointer;
		padding: 0;
	}

	.closeButton:hover {
		color: #333;
	}

	.menuContent {
		padding: var(--menu-spacing);
	}

	.menuContent > :global(*) {
		margin-bottom: var(--menu-spacing);
	}

	.menuContent > :global(*:last-child) {
		margin-bottom: 0;
	}

	.menu:popover-open {
		display: block;
		opacity: 1;
		transform: translateY(0);

		@starting-style {
			opacity: 0;
			transform: translateY(5px);
		}
	}

	@supports (anchor-name: --myAnchor) {
		[popovertarget] {
			display: inline;
			position: relative;
		}

		.menu[popover] {
			border: 0;
			margin: 0;
			position-anchor: --myAnchor;
			top: calc(anchor(bottom) + 1rem);
			right: anchor(right);
			left: auto;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.menu {
			transition: none;
		}
	}

	@media screen and (width < 600px) {
		.menu {
			position: fixed;
			right: 0;
			left: var(--btn-right);
			width: 100%;
			height: fit-content;
			margin: 0;
		}
	}

	@media (pointer: coarse) and (hover: none) and (min-resolution: 400dpi),
		screen and (device-width <= 900px) and (width <= 900px) and (orientation: portrait),
		screen and (device-height <= 900px) and (height <= 900px) and (orientation: landscape) {
		.buttonBox {
			position: fixed;
			top: auto;
			bottom: calc(env(safe-area-inset-bottom) + var(--btn-top));
			right: var(--btn-right);
			left: auto;
			width: 100%;
			height: fit-content;
			margin: 0;
		}

		.menu {
			top: auto;
			bottom: 0;
			inset-inline: 2rem;
			width: auto;
			margin: 0;
		}

		@supports (anchor-name: --myAnchor) {
			[popovertarget] {
				display: inline;
				position: relative;
			}

			.menu[popover] {
				position-anchor: --myAnchor;
				inset: unset;
				margin-inline: var(--btn-right) max(auto, var(--btn-right));
				width: auto;
				right: anchor(right) !important;
				bottom: calc(anchor(top) + 1rem);
			}
		}
	}

	/* .after-element {
    position: fixed;
    pointer-events: none;
    width: 40px;
    height: 40px;
    background: rgba(0,0,0,0.15);
    border-radius: 50%;
    z-index: 2000;
    transform: translate(-50%, -50%);
    transition: background 0.2s;
    border: 2px solid #333;

  }

  } */
</style>
