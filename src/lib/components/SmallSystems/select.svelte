<script lang="ts">
	interface Props {
		value: string;
		label: string;
		defaultValue: string;
		onChange: (newValue: string) => void;
		children: import('svelte').Snippet<[]>; 
	}

	let { label, onChange, children, value ,defaultValue} : Props = $props();

	// Set default value if not provided
	function handleChange(event: Event) {
		const newValue = (event.target as HTMLSelectElement).value;
		onChange(newValue);
	}
</script>


<select name={label} id={label} onchange={handleChange} bind:value={value} class="override">
	<option value="" class="overide" selected>{label}</option>
	{@render children()}
</select>