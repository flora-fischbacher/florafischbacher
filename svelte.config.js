import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const preprocess = [
  sveltePreprocess({
    defaults: {
      script: 'typescript',
      style: 'postcss',
    },
    postcss: true,
    preserve: ['ld+json'],
  }),
];

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
  preprocess: preprocess,
  kit: {
    adapter: adapter(),
    target: '#svelte',
    trailingSlash: 'ignore',
  },
};

export default config;
