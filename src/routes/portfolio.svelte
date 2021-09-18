<script>
  import { threeDimensionalEffect } from '../threeDimensionalEffect';
</script>

<svelte:head>
  <title>Flora Fischbacher | Portfolio</title>
  <meta
    name="description"
    content="Here you can find my portfolio of projects I have recently been working on."
  />
</svelte:head>

<section class="homepage-hero">
  <div class="hero-container box-bg">
    <div class="flex-wrap items-stretch w-full">
      <h1 class="fancy-font-inverted">Portfolio</h1>
      <h4 class="text-center h4-uppercase">Website | Design | Marketing</h4>
      <p class="hero-text">
        Check out my portfolio to view all the projects I have recently worked
        on!
      </p>
    </div>
  </div>
</section>

<section class="my-24 lg:my-48">
  <h2 class="text-center h4-uppercase-inverted">ecosio</h2>
  <h3 class="text-center section-text">Blog re-design</h3>
  <a href="case-studies/ecosio" sveltekit:prefetch class="no-underline">
    <div class="flex md:items-center">
      <div class="relative w-full md:px-6">
        <img
          src="/homepage/ecosio-monitor.png"
          alt="ecosio"
          class="will-change animated-img"
          use:threeDimensionalEffect
        />
        <div class="w-full bg-brand-dust-rose background-rectangle"></div>
      </div>
    </div>
  </a>
</section>

<section class="my-24 lg:my-48">
  <h2 class="text-center h4-uppercase-inverted">Markus Hatvan</h2>
  <h3 class="text-center section-text">Complete website design</h3>
  <a href="case-studies/markus-hatvan" sveltekit:prefetch class="no-underline">
    <div class="flex md:items-center">
      <div class="relative w-full md:px-6">
        <img
          src="/case-studies/markus-hatvan/markus-hatvan-blog-laptop.png"
          alt="Markus Hatvan"
          class="will-change animated-img"
          use:threeDimensionalEffect
        />
        <div class="w-full bg-brand-gold background-rectangle"></div>
      </div>
    </div>
  </a>
</section>

<section class="my-24 lg:my-48">
  <h2 class="text-center h4-uppercase-inverted">Allegria Restaurant</h2>
  <h3 class="text-center section-text">Social media & website design</h3>
  <a href="case-studies/allegria" sveltekit:prefetch class="no-underline">
    <div class="flex md:items-center">
      <div class="relative w-full md:px-6">
        <img
          src="/case-studies/allegria/allegria-preview-img.png"
          alt="ecosio"
          class="will-change animated-img"
          use:threeDimensionalEffect
        />
        <div class="bg-brand-dust-rose background-rectangle"></div>
      </div>
    </div>
  </a>
</section>

<style lang="postcss">
  .homepage-hero {
    background-image: url('/portfolio-bg.png');
    @apply flex items-center h-full bg-center bg-cover md:py-11 lg:py-20 2xl:py-28;
  }
  .hero-container {
    @apply flex flex-wrap items-center w-full md:w-11/12 lg:w-4/5 2xl:w-1/2 p-16 mx-auto bg-brand-dust-rose;
    box-shadow: 0 2px 22px 4px rgba(0, 0, 0, 0.2);
  }
  .hero-text {
    @apply text-brand-off-white text-xl text-center;
  }
  .box-bg {
    background-image: url('/flower-bg.png');
    @apply bg-no-repeat bg-center py-32;
  }
  .section-text {
    font-family: 'Annie Use Your Telescope', cursive;
    @apply text-brand-brown text-4xl;
  }
  .animated-img {
    @apply w-full p-3 mx-auto md:w-3/4 lg:w-3/5 2xl:w-2/5 sm:w-4/5;
  }
</style>
