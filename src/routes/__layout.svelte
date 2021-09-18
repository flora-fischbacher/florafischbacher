<script lang="ts">
  import Nav from '$lib/Nav.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<Nav />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    min-height: calc(100vh - 570px);
  }
</style>
