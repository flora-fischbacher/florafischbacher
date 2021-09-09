<script>
  import { onMount } from "svelte";

  let SvelteCompareImageSlider;

  onMount(async () => {
    const module = await import("svelte-compare-image-slider");
    SvelteCompareImageSlider = module.default;
  });
</script>

<svelte:head>
  <title>Flora Fischbacher - UX Designer</title>
</svelte:head>

<div class="w-24">
  <svelte:component
    this="{SvelteCompareImageSlider}"
    leftImage="/case-studies/markus-hatvan/markus-hatvan-about.png"
    rightImage="/homepage/ecosio-monitor.png"
  />
</div>

<section class="case-study-hero">
  <div class="hero-container">
    <div class="flex-wrap items-stretch w-full mt-16">
      <h4 class="text-lg fancy-font-inverted">Case Study</h4>
      <h1 class="text-3xl text-center p-inverted">
        Blog Re-design to Enhance User Experience
      </h1>
      <img
        src="/homepage/ecosio-monitor.png"
        alt="Markus Hatvan Homepage"
        class="w-2/3 mx-auto mt-16 -mb-20 md:w-1/2 lg:-mb-44"
      />
    </div>
  </div>
</section>
<div class="section-container">
  <div class="text-center">
    <a href="/" class="btn purple-shadow">Explore Live Prototype ></a>
  </div>
</div>
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
          <h3 class="tagline">Problem</h3>
          <p>
            A very basic blog with no filtering or search options which lead to
            a poor user experience and low converstion rate.
          </p>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-4">
        <div class="card">
          <img src="/icons/ballot.svg" alt="Ballot Icon" class="grid-icon" />
          <h3 class="tagline">Goal</h3>
          <p>
            The goal of this project was to create a design which would enhance
            the user experience and drive up the conversions. The new features
            would include:
          </p>
          <ul>
            <li>Blog filters</li>
            <li>Featured articles</li>
            <li>Blog sidebar</li>
            <li>Table of contents</li>
            <li>...and much more!</li>
          </ul>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-4">
        <div class="card">
          <img
            src="/icons/pencil-ruler.svg"
            alt="Envelope Icon"
            class="grid-icon"
          />
          <h3 class="tagline">My Role</h3>
          <p><b>Product Designer</b></p>
          <ul>
            <li>Design the new blog layout</li>
            <li>Test the user journey</li>
            <li>Incorporate feedback from the markeing team</li>
          </ul>
          <p class="mt-2"><b>Project Manager</b></p>
          <ul>
            <li>Communicate with the marketing team</li>
            <li>Daily meetings & write tickets for the developer</li>
            <li>Code reviews, merging pull requests & weekly deployments</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section-container">
  <div class="flex flex-wrap">
    <div class="flex flex-wrap items-center mx-auto mt-8">
      <div class="flex-wrap w-full pr-0 md:w-1/2 md:pr-8 2xl:pr-12">
        <div class="flex max-w-4xl bg-brand-purple">
          <img
            src="/homepage/ecosio-monitor.png"
            alt="ecosio Blog"
            class="px-5 py-11 2xl:py-20 2xl:px-12"
          />
        </div>
      </div>
      <div class="flex-wrap items-stretch w-full pl-0 mt-8 md:w-1/2 md:mt-0">
        <h3 class="tagline">Phase 1</h3>
        <h4 class="imageText-heading">Re-Design the Blog Overview</h4>
        <p>
          The blog overview page was very basic with no way to filter the
          aticles. Since the traffic on the blog was increasing each month, it
          was crucial to implement a filter functionality.
        </p>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="py-16 section-container">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 lg:col-span-4">
        <div class="text-grid">
          <h3 class="tagline">Step 1</h3>
          <p><b> Blog Search & Filter</b></p>
          <p>
            To improve the usability and user journey of the blog, it was
            crucial to implement a search filter functionality on the overview
            page.
            <br /><br />
            The new design introduced a section where users were able to filter by
            blog categories or searchfor certain keywords.
          </p>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-4">
        <div class="text-grid">
          <h3 class="tagline">Step 2</h3>
          <p><b> Featured Article Section </b></p>
          <p>
            To highlight some of the most important articles, a featured article
            section was introduced to the blog. The article would also change
            depending on which category was selected in the filter bar.
            <br /><br />
            This section was a great addition as it immediately catches the users
            eye and helps guide the user to a specific article.
          </p>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-4">
        <div class="text-grid">
          <h3 class="tagline">Step 3</h3>
          <p><b>Blog Post Grid Layout</b></p>
          <p>
            The actual grid layout of the blog posts was the final step to the
            re-design of the overview page. Teaser images were introduced to
            specific blog posts to help guide readers.
            <br /><br />
            To improve the conversion rates, relevant gated assets (white papers
            etc.) were added throughout the grid. These assets would also change
            depending on which filter was selected.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section-container">
  <div class="flex flex-wrap">
    <div class="flex flex-wrap-reverse items-center mx-auto mt-8">
      <div class="flex-wrap items-stretch w-full mt-8 md:w-1/2 md:mt-0">
        <h3 class="tagline">Phase 2</h3>
        <h4 class="imageText-heading">Basic Structure of the Website</h4>
        <p>
          Once the style guide was in place, the next step was to create a rough
          mockup of what the homepage and sub pages would look like. The The
          structure of the website included the following:
        </p>
        <ul>
          <li>Blog teaser</li>
          <li>Current projects</li>
          <li>Testimonials</li>
          <li>Open source contributions</li>
          <li>contact form</li>
        </ul>
      </div>
      <div class="flex-wrap w-full pl-0 md:w-1/2 md:pl-20 lg:pl-24 2xl:pl-40">
        <div
          class="flex flex-row-reverse max-w-4xl 2xl:max-w-3xl bg-brand-purple"
        >
          <img
            src="/case-studies/markus-hatvan/markus-hatvan-about.png"
            alt="Markus Hatvan About Page"
            class="image-right-purple"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<section class="pb-12 section-container bg-brand-purple">
  <div class="flex flex-wrap">
    <div class="flex flex-wrap items-center mx-auto mt-8">
      <div class="flex-wrap w-full md:w-1/2">
        <img
          src="/case-studies/markus-hatvan/markus-hatvan-blog-laptop.png"
          alt="Markus Hatvan Blog"
          class="w-full 2xl:w-4/5 md:pr-8"
        />
      </div>
      <div class="flex-wrap items-stretch w-full pl-0 mt-8 md:w-1/2 md:mt-0">
        <h3 class="tagline-inverted">Phase 3</h3>
        <h4 class="imageText-heading-inverted">Technical Blog</h4>
        <p class="text-brand-off-white">
          The last and most important part of the design process was the blog.
          It should be easy to navigate with the option to search for and filter
          the articles.
          <br /><br />
          The sidebar enhances user engagement by promoting popular articles, displaying
          blog categories, and a newsletter subscription form.
        </p>
      </div>
    </div>
    <div class="flex flex-wrap items-center mx-auto mt-8 md:mt-16">
      <div class="flex-wrap w-full md:w-1/2">
        <img
          src="/case-studies/markus-hatvan/markus-hatvan-blog-post.png"
          alt="Markus Hatvan Blog"
          class="w-full 2xl:w-4/5 md:pr-8"
        />
      </div>
      <div class="flex-wrap w-full mt-8 md:w-1/2 md:mt-0">
        <img
          src="/case-studies/markus-hatvan/markus-blog-overview.png"
          alt="Markus Hatvan Blog"
          class="w-full 2xl:w-4/5 purple-shadow"
        />
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  .case-study-hero {
    @apply flex bg-brand-purple mb-44 lg:mb-72 px-8;
  }
  .hero-container {
    @apply flex flex-wrap items-center mx-auto;
  }

  li {
    @apply text-left list-disc list-inside ml-8;
  }
  .btn {
    font-family: "Annie Use Your Telescope", cursive;
    @apply text-2xl bg-brand-purple text-brand-off-white p-4;
  }
</style>
