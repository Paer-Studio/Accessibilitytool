<script>
	import { onMount } from 'svelte';
	import { Slider, Select } from '$lib';
	
	let settings = {
		textSizeLevel: 5
	};

	onMount(() => {
		document.documentElement.style.setProperty('--font-size', `${settings.textSizeLevel}rem`);
	});

	function handleFontSizeChange() {
		document.documentElement.style.setProperty('--font-size', `${settings.textSizeLevel}rem`);
	}
</script>

<button onclick={() => handleFontSizeChange()}>
	Increase Font Size
</button>