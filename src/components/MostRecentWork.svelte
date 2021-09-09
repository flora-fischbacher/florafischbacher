<script lang="ts">
  export let segment: string;
</script>

<section class="section-container">
  <div class="flex flex-wrap">
    <h2 class="section-heading">Most Recent Work</h2>
    <div class="flex flex-wrap items-center mx-auto mt-8">
      <div class="flex-wrap w-full pr-0 md:w-1/2 md:pr-20 lg:pr-24 2xl:pr-40">
        <div class="flex max-w-4xl bg-brand-purple">
          <img
            src="/homepage/markus-hatvan-homepage.png"
            alt="Markus Hatvan Homepage"
            class="image-left-purple"
          />
        </div>
      </div>
      <div class="flex-wrap items-stretch w-full pl-0 mt-8 md:w-1/2 md:mt-0">
        <h3 class="tagline">Markus Hatvan</h3>
        <h4 class="imageText-heading">Freelancer Website & Logo</h4>
        <p>
          The goal of this project was to design the logo and initial mockups
          for Markus’ website. Markus’s vision of his website was to have a
          simple, clean design which visitors can easily navigate. The highlight
          of his website would be the blog, so this was the most important
          element of the design process.
        </p>
        <a
          aria-current="{segment === 'markus-hatvan' ? 'page' : undefined}"
          href="case-studies/markus-hatvan"
          class="imageText-button"
        >
          View Full Project >
        </a>
      </div>
    </div>
  </div>
</section>
<section class="py-9 2xl:py-12 section-container bg-brand-dust-rose">
  <div class="flex flex-wrap">
    <div class="flex flex-wrap-reverse items-center mx-auto">
      <div class="flex-wrap items-stretch w-full mt-8 md:w-1/2 md:mt-0">
        <h3 class="tagline-inverted">ecosio</h3>
        <h4 class="imageText-heading-inverted">Blog Re-Design</h4>
        <p class="p-inverted">
          A complete re-design of the existing blog. The objective of the
          project was to enhance the exisitng design and improve the user
          experience by adding improvements like filters, table of contents,
          featured articles & assets, and a sidebar.
        </p>
        <a
          aria-current="{segment === 'ecosio' ? 'page' : undefined}"
          href="case-studies/ecosio"
          class="imageText-button-inverted"
        >
          View Full Project >
        </a>
      </div>
      <div class="flex-wrap w-full md:w-1/2">
        <img
          src="/homepage/ecosio-monitor.png"
          alt="ecosio blog overview"
          class="float-left w-full md:w-11/12 md:float-right"
        />
      </div>
    </div>
  </div>
</section>

<section class="section-container">
  <div class="flex flex-wrap">
    <div class="flex flex-wrap items-center mx-auto mt-8">
      <div class="flex-wrap w-full pr-0 md:w-1/2 md:pr-20 lg:pr-24 2xl:pr-40">
        <div class="flex max-w-4xl bg-brand-purple">
          <img
            src="/homepage/allegria-preview.png"
            alt="Allegria Homepage"
            class="image-left-purple"
          />
        </div>
      </div>
      <div class="flex-wrap items-stretch w-full pl-0 mt-8 md:w-1/2 md:mt-0">
        <h3 class="tagline">Allegria Restaurant</h3>
        <h4 class="imageText-heading">
          Restaurant Website & Online Ordering System
        </h4>
        <p>
          The objective of this project was to create the design and develop the
          website of Allegria. Here the most important elements were the menu,
          photo gallery, and displaying customer reviews.
          <br /><br />
          Due to restaurant closures caused by the COVID-19 outbreak, we quickly
          implemented an online ordering service which became a highlight for the
          community.
        </p>
        <a
          aria-current="{segment === 'allegria' ? 'page' : undefined}"
          href="case-studies/allegria"
          class="imageText-button"
        >
          View Full Project >
        </a>
      </div>
    </div>
  </div>
</section>
