<script>
	import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  import '../../app.css';
</script>

<div class="h-screen w-screen flex flex-col">
  <Navbar />
  <main class="flex-grow">
    <slot />
  </main>
  <Footer />
</div>