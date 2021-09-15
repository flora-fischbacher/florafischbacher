<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
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
    <a href="/" class="btn purple-shadow">Back to homepage ></a>
  </div>
</section>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}

<style>
  h1 {
    font-family: "Annie Use Your Telescope", cursive;
    @apply text-brand-brown text-center text-5xl mb-9;
  }
  .btn {
    font-family: "Annie Use Your Telescope", cursive;
    @apply text-2xl bg-brand-purple text-brand-off-white p-4;
  }
  .btn:hover {
    @apply bg-brand-purple-btn-hover;
  }
  p {
    @apply mb-12;
  }
</style>
