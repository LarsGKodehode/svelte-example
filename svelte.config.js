import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		// Using the static adaptor here
		// see https://kit.svelte.dev/docs/adapter-static
		adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    })
	}
};

export default config;
