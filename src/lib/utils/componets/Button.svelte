<script lang="ts">
	export let name: string;
	export let onclick: (() => void) | null = null;
	const handleClick = () => {
		if (typeof onclick === 'function') {
			onclick();
		}
	};
</script>

<button
	on:click={handleClick}
	class="middle none center rounded-lg bg-black py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-black-500/20 transition-all hover:shadow-lg hover:shadow-black-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
	data-ripple-light="true"
>
	{name}
</button>
