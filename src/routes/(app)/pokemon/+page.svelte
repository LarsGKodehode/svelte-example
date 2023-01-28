<script lang="ts">
	import Section from '$lib/Section.svelte';
	import PromiseWrapper from '$lib/PromiseWrapper.svelte';

	/**
	 * First query to API endpoint
	 */
	type PokemonData = {
		name: string;
		url: string;
		info: PokemonInfo | Promise<PokemonInfo> | undefined;
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

	let query = `https://pokeapi.co/api/v2/pokemon/?offset=${currentOffset}&limit=${stride}`;

	let pokemonList: PokemonData[] = [];
	let selectedPokemon = 0;

	let isLoading: Promise<boolean> = fetchData();

	function fetchData(): Promise<boolean> {
		return new Promise(async (resolve, rejected) => {
			// get primary list of pokemons
			const primaryResponsee = await fetch(query);
			const primaryData = (await primaryResponsee.json()) as { results: PokemonData[] };

			pokemonList.push(...primaryData.results);

			resolve(false);
			// fill out info with recieved URLS
		});
	}

	function requestData(url: string, callback: () => void): Promise<false> {
		return new Promise(async (resolve, reject) => {
			const response = await fetch(url);
			const data = (await response.json()) as { results: any };

			store.push(...data.results);

			resolve(false);
		});
	}
</script>

<Section>
	<div class="grid grid-cols-4">
		<PromiseWrapper
			promise={requestData(query, (data) => {
				pokemonList.push(...data);
			})}
		>
			{#each pokemonList as pokemon}
				<div class="p-2 m-4 border-2 border-white rounded-md">
					<h2>{pokemon.name}</h2>
					<PromiseWrapper let:optional promise={requestData(pokemon.url, pokemon.info)}>
						{console.log(pokemon)}
						<img src={optional} alt="" />
					</PromiseWrapper>
				</div>
			{/each}
		</PromiseWrapper>
	</div>
</Section>
