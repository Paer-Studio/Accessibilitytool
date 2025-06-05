<script lang="ts">
	import { onMount } from "svelte";
	import {Slider} from '$lib'

	let settings = {
		TextHeightLevel: 100
	}

	onMount(()=>{
		document.documentElement.style.setProperty('--line-height', `${settings.TextHeightLevel}%`)
	})

	function handleLineHeightChange(NewHeight : number){
		let LineHeight = NewHeight
	
		document.documentElement.style.setProperty('--line-height', `${LineHeight * 1.8}%`);
		settings = {
			...settings,
			TextHeightLevel:NewHeight
		}
	}


</script>

<Slider
    label="Line Height"
    min={50}
    max={200}
    step={10}
    value={settings.TextHeightLevel}
    onChange={(newValue) => {
		handleLineHeightChange(newValue)
    }}
  />