<script lang="ts">
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment: string;
</script>

<Nav segment="{segment}" />

<main>
  <slot />
</main>

<Footer segment="{segment}" />

<style>
  main {
    min-height: calc(100vh - 570px);
  }
</style>
