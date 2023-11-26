<script lang="ts">
	import './../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main class="w-screen h-screen flex flex-col">
	<!-- Header -->
	<Header />

	<!-- Contents of the main page -->
	<slot />

	<!-- Footer -->
	<Footer />
</main>
