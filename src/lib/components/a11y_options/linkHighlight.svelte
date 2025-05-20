<script>
	import { onMount } from 'svelte';

	// when the mouse is hovering over a link the cursor will lose it's outline and the link will get a red border 
	// and the cursor will be visible
	//werkt alleen in onMount
	onMount(() => {
		let links = document.querySelectorAll('a');
		// zoek alle links in de body
		// en voeg een event listener toe aan elk element
		links.forEach((el) => {
			let selectedElement = 'h1, h2, h3, h4, h5, h6, p, blockquote, pre,a, abbr, acronym, address, big, cite, code,del, dfn, em, img, ins, kbd, q, s, samp,small, strike, strong, sub, sup, tt, var,b, u, i';
			el.addEventListener('mouseover', () => {
				document.body.querySelectorAll(selectedElement).forEach(e => {
					//geef alles een dim class
					e.classList.add('dim')
				});
				
				// behalve de geselecteerde link
				el.classList.remove('dim');
				el.classList.add('undim')

				// en geef de geselecteerde link een hoverLink class
				el.classList.add('hoverLink');
				el.style.border = 'solid 2px red';
				document.documentElement.style.setProperty('--opacity-cursor', '0');

			});
			// remove alles wanneer de muis niet meer over de link is
			el.addEventListener('mouseout', () => {
				document.body.querySelectorAll('*').forEach(e => {
					e.classList.remove('dim')
				});
				el.classList.remove('hoverLink');
				el.style.border = 'none';
				document.documentElement.style.setProperty('--opacity-cursor', '1');
			});
		});

	});

</script>



<style>
/* Dim everything */
:global(.dim)  {
	color: #0003;	
}
/* besides the selected link */
:global(.undim) {
	color: black;	
}

/* Except the one we're hovering on */
:global(a.hoverLink) {
	opacity: 1 !important;
	border: solid 2px red; /* fallback in case JS fails */
	z-index: 10;
	position: relative;
}

</style>