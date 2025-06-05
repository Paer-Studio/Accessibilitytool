<script lang="ts">
import { onMount } from 'svelte';
import {Slider} from '$lib';

let settings = {
  textSizeLevel: 1,
};

onMount(() => {
	// Set initial font size based on settings
	document.documentElement.style.setProperty('--font-size', `${settings.textSizeLevel}rem`);
});

function handleFontSizeChange(newSize: number) {
	let fontSize = newSize;
  // document.body.style.fontSize = `${fontSize}px`;
	const currentFontSize = parseFloat(
		getComputedStyle(document.body).fontSize
	);

  document.documentElement.style.setProperty('--font-size', `${currentFontSize * (0.099 * fontSize)}rem`);
  settings = {
   ...settings,
   textSizeLevel: newSize
  };
}

</script>


<Slider
  label="Font Size"
  min={0}
  max={4}
  step={.2}
  value={settings.textSizeLevel}
  onChange={(newValue) => {
    handleFontSizeChange(newValue);
  }}
/>