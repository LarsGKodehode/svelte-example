<script>
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../../app.css';

	const backgroundImageURL = "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80";
</script>

<div class="h-screen relative flex flex-col">
	<div class="h-screen w-full bg-no-repeat bg-center bg-cover fixed -z-10" style="background-image: url({backgroundImageURL})"></div>
	
	<Navbar />
	<main class="flex-grow flex flex-col items-center mt-20">
		<slot />
	</main>
	<Footer />
</div>
