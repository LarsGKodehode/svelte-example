<script>
	import { each } from 'svelte/internal';

	const pages = [
		{ titel: 'Home', to: '/' },
		{ titel: 'About', to: 'about' },
		{ titel: 'Pokemon', to: 'pokemon' }
	];
</script>

<header
	class="w-full flex justify-between bg-purple-300/20 backdrop-blur-md border-b-2 border-white/20 px-6 pt-4 pb-2 text-xl font-bold fixed z-10"
>
	<a href="/"><img class="max-h-8" src="./favicon.png" alt="Logo" /></a>
	<nav class="justify-self-end w-1/3">
		<ul class="flex justify-around">
			{#each pages as page}
				<a href={page.to} class="hover:bg-purple-200/20 p-2 pb-3 rounded-xl"
					><li>{page.titel}</li></a
				>
			{/each}
		</ul>
	</nav>
</header>
