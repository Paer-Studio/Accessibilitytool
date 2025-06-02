<script lang="ts">
	interface Props {
		value: number;
		min?: number;
		max?: number;
		step?: number;
		label: string;
		onChange: (newValue: number) => void;
	}

	let { value, min = 1, max = 5, step = 1, label ='', onChange} : Props = $props()

	function handleChange(event: Event) {
		const newValue = +(event.target as HTMLInputElement).value;
		onChange(newValue);
	}
</script>


<div class="override">
	<label class="override">
	{label}
	<input type="range" oninput={handleChange}
		{min} 
		{max} 
		{step} 
		{value} 
		aria-valuemin={min}
		aria-valuemax={max}
		aria-valuenow={value}
	>
	</label>
	<span>{value}</span>
</div>