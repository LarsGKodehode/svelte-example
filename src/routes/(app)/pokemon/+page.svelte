<script lang="ts">
	import Section from '$lib/Section.svelte';

	import { onMount } from 'svelte';

	/**
	 * First query to API endpoint
	 */
	type PokemonData = {
		name: string;
		url: string;
	};

	type Types = {
		type: {
			name: string;
			url: string;
		};
	};

	/**
	 * pokeapi pokemon data structure
	 */
	type PokemonInfo = {
		name: string;
		sprites: {
			front_default: string;
		};
		types: Types[];
	};

	// List parameters
	const stride = 16;
	let currentOffset = 0;
	let selectedPokemon = 0;

	let pokemonList: PokemonInfo[];
	let query = `https://pokeapi.co/api/v2/pokemon/?offset=${currentOffset}&limit=${stride}`;
	let isLoading: Promise<boolean> = fetchData();

	function fetchData(): Promise<boolean> {
		return new Promise(async (resolve, rejected) => {
			console.log('running fetch');
			const response = await fetch(query);
			const data = await response.json();

			const responses: Promise<PokemonInfo>[] = data.results.map(
				async (pokemon: PokemonData): Promise<PokemonInfo> => {
					return fetch(pokemon.url).then((responseObject) => responseObject.json());
				}
			);
			Promise.all(responses)
				.then((results) => (pokemonList = results))
				.then(() => resolve(false));
		});
	}
</script>

<Section>
	<div class="flex">
		{#await isLoading}
			<!-- promise is pending -->
			<p>Loading data...</p>
		{:then value}
			<!-- promise was fulfilled -->
			<!-- Pokemon selector -->
			<div class="">
				<h2>Details</h2>
				<ul class="grid grid-cols-4">
					{#each pokemonList as pokemon, index}
						<li
							class="border border-white m-2 p-4 rounded-md list-none bg-slate-600/70"
							on:click={() => {
								selectedPokemon = index;
							}}
							on:keypress
						>
							<h3>{pokemon.name.toUpperCase()}</h3>
							<img class="w-16 h-16" src={pokemon.sprites.front_default} alt="" />
						</li>
					{/each}
				</ul>
			</div>
			<!-- Pokemon detail -->
			<div class="mx-4 p-4 border border-white/50 rounded-l-xl min-w-[10rem]">
				<h2>Details</h2>
				<h3>{pokemonList[selectedPokemon].name}</h3>
				<h4>types</h4>
				{#each pokemonList[selectedPokemon].types as type}
					<h5>{type.type.name}</h5>
					<img src={type.type.url} alt="" />
				{/each}
			</div>
		{:catch error}
			<!-- promise was rejected -->
			<p>Something went wrong: {error.message}</p>
		{/await}
	</div>
</Section>
