import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import { join } from 'path';
import { cwd } from 'process';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [mdsvex(), preprocess()],
	extensions: ['.svelte', '.svx'],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;