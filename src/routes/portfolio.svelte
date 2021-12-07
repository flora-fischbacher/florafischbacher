<script lang="ts">
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
      <h1
        class="fancy-font-inverted text-center
      "
      >
        Portfolio
      </h1>
      <h4 class="text-center h4-uppercase">Website | Design | Marketing</h4>
      <p class="hero-text">
        Take a look at my portfolio to see some of the projects I have recently
        worked on.
      </p>
    </div>
  </div>
</section>

<section class="my-24 lg:my-48">
  <h2 class="text-center company-name">gastro & du</h2>
  <h3 class="text-center section-text">Entrie UX design process</h3>
  <a href="case-studies/volunteerApp" sveltekit:prefetch class="no-underline">
    <div class="flex md:items-center">
      <div class="relative w-full md:px-6">
        <img
          src="/case-studies/volunteer-app/gastro-und-du-overview.jpeg"
          alt="gastro & du"
          class="will-change p-3 mx-auto w-2/3 md:w-1/3"
          use:threeDimensionalEffect
        />
        <div class="w-full bg-brand-off-white background-rectangle"></div>
      </div>
    </div>
  </a>
</section>
<section class="my-24 lg:my-48">
  <h2 class="text-center imageText-heading">ecosio</h2>
  <h3 class="text-center section-text">Blog re-design</h3>
  <a href="case-studies/ecosio" sveltekit:prefetch class="no-underline">
    <div class="flex md:items-center">
      <div class="relative w-full md:px-6">
        <img
          src="/homepage/ecosio-monitor.png"
          alt="ecosio"
          class="will-change w-full p-3 mx-auto md:w-3/4 lg:w-3/5 2xl:w-2/5 sm:w-4/5"
          use:threeDimensionalEffect
        />
        <div class="w-full bg-brand-gold background-rectangle"></div>
      </div>
    </div>
  </a>
</section>
<section class="my-24 lg:my-48">
  <h3 class="text-center tagline mb-5">Coming soon...</h3>
  <h2 class="text-center company-name">Home for rent</h2>
  <h3 class="text-center section-text">App design for a home rental project</h3>

  <div class="flex md:items-center">
    <div class="relative w-full md:px-6">
      <img
        src="/homepage/home-for-rent.png"
        alt="gastro & du"
        class="will-change p-3 mx-auto w-2/3 md:w-1/3 "
        use:threeDimensionalEffect
      />
      <div class="w-full bg-brand-off-white background-rectangle"></div>
    </div>
  </div>
</section>
<section class="my-24 lg:my-48">
  <h3 class="text-center tagline mb-5">Coming soon...</h3>
  <h2 class="text-center company-name">Alterra Aspen</h2>
  <h3 class="text-center section-text">Social media & website design</h3>

  <div class="flex md:items-center">
    <div class="relative w-full md:px-6">
      <img
        src="/case-studies/alterra/alterra-preview-img.png"
        alt="Alterra Aspen"
        class="will-change w-full p-3 mx-auto md:w-3/4 lg:w-3/5 2xl:w-2/5 sm:w-4/5"
        use:threeDimensionalEffect
      />
      <div class="bg-brand-gold background-rectangle"></div>
    </div>
  </div>
</section>

<section class="my-24 lg:my-48">
  <h2 class="text-center company-name">Markus Hatvan</h2>
  <h3 class="text-center section-text">Complete website design</h3>
  <a href="case-studies/markus-hatvan" sveltekit:prefetch class="no-underline">
    <div class="flex md:items-center">
      <div class="relative w-full md:px-6">
        <img
          src="/case-studies/markus-hatvan/markus-hatvan-blog-laptop.png"
          alt="Markus Hatvan"
          class="will-change w-full p-3 mx-auto md:w-3/4 lg:w-3/5 2xl:w-2/5 sm:w-4/5"
          use:threeDimensionalEffect
        />
        <div class="w-full bg-brand-off-white background-rectangle"></div>
      </div>
    </div>
  </a>
</section>

<section class="my-24 lg:my-48">
  <h2 class="text-center company-name">Allegria Restaurant</h2>
  <h3 class="text-center section-text">Social media & website design</h3>
  <a href="case-studies/allegria" sveltekit:prefetch class="no-underline">
    <div class="flex md:items-center">
      <div class="relative w-full md:px-6">
        <img
          src="/case-studies/allegria/allegria-preview-img.png"
          alt="ecosio"
          class="will-change w-full p-3 mx-auto md:w-3/4 lg:w-3/5 2xl:w-2/5 sm:w-4/5"
          use:threeDimensionalEffect
        />
        <div class="bg-brand-gold background-rectangle"></div>
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
    @apply text-brand-brown text-3xl;
  }
  .company-name {
    @apply text-brand-brown text-3xl mb-5;
  }

  .animated-img {
    @apply w-full p-3 mx-auto md:w-3/4 lg:w-3/5 2xl:w-2/5 sm:w-4/5;
  }
</style>
