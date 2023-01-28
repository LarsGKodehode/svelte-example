<script>
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../../app.css';
</script>

<div class="h-screen relative flex flex-col">
	<div class="h-screen w-full bg-no-repeat bg-center bg-cover fixed -z-10 bg-site-background" />

	<Navbar />
	<main class="flex-grow flex flex-col items-center mt-20">
		<slot />
	</main>
	<Footer />
</div>
