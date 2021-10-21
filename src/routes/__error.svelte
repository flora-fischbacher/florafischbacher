<script context="module" lang="ts">
  export function load({ error, status }: ErrorLoadInput) {
    return {
      props: { error, status },
    };
  }
</script>

<script lang="ts">
  import { isDev } from '../stores';
  import type { ErrorLoadInput } from '@sveltejs/kit';

  export let error: Error;
  export let status: number;
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<section class="section-container">
  <h1><b>{status}</b> Page not found</h1>
  <p class="text-center imageText-heading">
    The page you are looking for could not be found
  </p>

  <div class="text-center">
    <a href="/" class="btn purple-shadow">Back to homepage &gt;</a>
  </div>
</section>

{#if $isDev && error.stack}
  <pre>{error.stack}</pre>
{/if}

<style lang="postcss">
  h1 {
    font-family: 'Annie Use Your Telescope', cursive;
    @apply text-brand-brown text-center text-5xl mb-9;
  }
  .btn {
    font-family: 'Annie Use Your Telescope', cursive;
    @apply text-2xl bg-brand-purple text-brand-off-white p-4;
  }
  .btn:hover {
    @apply bg-brand-purple-btn-hover;
  }
  p {
    @apply mb-12;
  }
</style>
