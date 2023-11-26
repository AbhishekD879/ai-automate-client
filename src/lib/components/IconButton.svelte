<script lang="ts">
	export let disabled = false;
	export let roundedRipple = false;
	export let onclick: (() => void) | null = null;
	const handleClick = () => {
		if (typeof onclick === 'function') {
			onclick();
		}
	};
</script>

<button
	style={!roundedRipple ? 'border-radius: 10%' : 'border-radius: 50%;'}
	class="ripple"
	{disabled}
	tabindex="0"
	on:click={handleClick}
>
	<slot />
</button>

<style>
	.ripple {
		background-position: center;
		transition: background 0.8s;
		border-radius: 50%;
		padding: 0.1rem;
	}
	.ripple:hover {
		background: white radial-gradient(circle, transparent 1%, lightgray 1%) center/15000%;
	}
	.ripple:active {
		background-color: lightgray;
		background-size: 100%;
		transition: background 0s;
	}
</style>
