<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<Nav />

<main>
  <slot />
</main>

<Footer segment="{segment}" />

<style>
  main {
    min-height: calc(100vh - 570px);
  }
</style>
