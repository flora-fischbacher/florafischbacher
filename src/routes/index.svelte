<script lang="ts">
  import MostRecentWork from '$lib/MostRecentWork.svelte';
</script>

<svelte:head>
  <title>Flora Fischbacher | UX Designer</title>
  <meta
    name="description"
    content="Personal website showcasing a portfolio of my work as a UX & web designer."
  />
</svelte:head>

<section class="homepage-hero">
  <div class="hero-container">
    <div class="flex-wrap items-stretch w-full md:w-1/2">
      <h1 class="fancy-font-inverted">Hi I’m Flora.</h1>
      <h4 class="h4-uppercase">
        Web design | UX Design | Marketing Automation
      </h4>
      <p class="hero-text">
        I’m a junior UX/Web designer located in Vienna, Austria. Check out my
        online portfolio where you can explore the projects I have recently been
        working on.
      </p>
    </div>
    <div class="flex items-stretch w-full md:w-1/2">
      <img
        src="/homepage/flora-profile.png"
        alt="Flora Fischbacher"
        class="w-full mt-12 md:-mt-0"
      />
    </div>
  </div>
</section>

<MostRecentWork />

<section>
  <div class="py-16 section-container bg-brand-gold">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 lg:col-span-4">
        <div class="card">
          <img
            src="/icons/pencil-ruler.svg"
            alt="Pencil Icon"
            class="grid-icon"
          />
          <h3 class="tagline text-center">Portfolio</h3>
          <p class="text-center">
            Are you interested in other projects I have designed? Check out my
            entire portfolio showcasing more of my work.
          </p>
          <a
            href="/portfolio"
            class="imageText-button text-center"
            sveltekit:prefetch
            >Visit Portfolio &gt;
          </a>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-4">
        <div class="card">
          <img src="/icons/ballot.svg" alt="Ballot Icon" class="grid-icon" />
          <h3 class="tagline text-center">My CV</h3>
          <p class="text-center">
            Check out my CV for a complete list of my skills, design tools I
            use, and great companies I have worked for!
          </p>
          <a
            href="/resume"
            class="imageText-button text-center"
            sveltekit:prefetch
            >View CV &gt;
          </a>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-4">
        <div class="card">
          <img
            src="/icons/envelope-open-text.svg"
            alt="Envelope Icon"
            class="grid-icon"
          />
          <h3 class="tagline text-center">Contact</h3>
          <p class="text-center">
            Interested in working together? Get in touch to discuss future
            projects or any open ended questions you may have.
          </p>
          <a
            href="mailto:florafischbacher1@gmail.com"
            class="imageText-button text-center"
            >Get in Touch >
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  .homepage-hero {
    background-image: url('/homepage/homepage-bg.png');
    @apply flex items-center h-full bg-center bg-cover md:py-11 lg:py-20 2xl:py-28;
  }
  .hero-container {
    @apply flex flex-wrap items-center w-full md:w-11/12 lg:w-4/5 2xl:w-1/2 p-16 mx-auto bg-brand-dust-rose;
    box-shadow: 0 2px 22px 4px rgba(0, 0, 0, 0.2);
  }
  .hero-text {
    @apply text-brand-off-white text-xl text-left;
  }
</style>
