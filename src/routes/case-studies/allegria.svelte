<svelte:head>
  <title>Flora Fischbacher | Allegria Case Study</title>
  <meta
    name="description"
    content="This is the case study of Allegria Restaurant, a project I have recently worked on."
  />
</svelte:head>

<section class="case-study-hero">
  <div class="hero-container">
    <div class="flex-wrap items-stretch w-full mt-16">
      <h4 class="text-lg fancy-font-inverted text-center">Case Study</h4>
      <h1 class="text-3xl text-center p-inverted">
        Website for Allegria Restaurant
      </h1>
      <img
        src="/case-studies/allegria/allegria-preview-img.png"
        alt="Allegria Restaurant Homepage"
        class="w-2/3 mx-auto mt-16 -mb-20 md:w-1/2 lg:-mb-44"
      />
    </div>
  </div>
</section>
<div class="section-container">
  <div class="text-center">
    <a
      href="https://allegriacarbondale.com/"
      class="btn purple-shadow"
      target="_blank">Visit Website ></a
    >
  </div>
</div>
<section>
  <div class="py-16 section-container bg-brand-gold">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 lg:col-span-4">
        <div class="card">
          <img
            src="/icons/questionmark.svg"
            alt="Question Icon"
            class="grid-icon"
          />
          <h3 class="tagline">Allegria Restaurant</h3>
          <p>
            Allegria is a European bistro located in the artistic town of
            Carbondale, Colorado.
            <br /><br />
            The owner, Andreas, was in need of a website where guests could view
            the menu and daily specials, and make an online reservation.
            <br /><br />
            Due to the Covid-19 pandemic, an online ordering system was also implemented
            later on.
          </p>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-4">
        <div class="card">
          <img src="/icons/ballot.svg" alt="Ballot Icon" class="grid-icon" />
          <h3 class="tagline">Goal</h3>
          <p>
            The aim of this project was to design and build an easy-to-use
            website using WordPress.
            <br /><br />
            To gain a larger social media presence, the goal was to also set up a
            professional Facebook and Instagram business page.
          </p>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-4">
        <div class="card">
          <img
            src="/icons/pencil-ruler.svg"
            alt="Pencil Icon"
            class="grid-icon"
          />
          <h3 class="tagline">My Role</h3>
          <p><b>Designer & Website Admin</b></p>
          <ul>
            <li>Design & create new pages</li>
            <li>Regular menu updates</li>
            <li>Ensure high quality SEO and page performance</li>
            <li>Implement online ordering system</li>
            <li>Regular website maintenance</li>
          </ul>
          <p class="mt-4"><b>Social Media Manager</b></p>
          <ul>
            <li>Regular social media postings</li>
            <li>Set up Facebook campaings</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="flex flex-wrap items-center mx-auto mt-8 md:mt-16">
        <div class="flex-wrap w-full md:w-1/2">
          <h2 class="special-heading">Catering Landing Page</h2>
          <img
            src="/case-studies/allegria/allegria-catering.png"
            alt="Allegria Catering Page"
            class="w-full 2xl:w-4/5 purple-shadow md:w-11/12"
          />
        </div>
        <div class="flex-wrap w-full mt-10 md:w-1/2 md:mt-0">
          <h2 class="float-none md:float-right special-heading">
            Holiday Events Landing Page
          </h2>
          <img
            src="/case-studies/allegria/allegria-holiday-events.png"
            alt="Allegria Holiday Events Page"
            class="float-none w-full 2xl:w-4/5 purple-shadow md:float-right md:w-11/12"
          />
        </div>
      </div>

      <div class="flex flex-wrap items-center mx-auto mt-8 md:mt-16">
        <div class="flex-wrap w-full md:w-1/2">
          <h2 class="special-heading">Homepage</h2>
          <img
            src="/case-studies/allegria/allegria-homepage.png"
            alt="Allegria Homepage"
            class="w-full 2xl:w-4/5 purple-shadow md:w-11/12"
          />
        </div>
        <div class="flex-wrap w-full mt-10 md:w-1/2 md:mt-0">
          <h2 class="float-none md:float-right special-heading">
            Allegria Blog
          </h2>
          <img
            src="/case-studies/allegria/allegria-blog.png"
            alt="Allegria Blog"
            class="float-none w-full 2xl:w-4/5 purple-shadow md:float-right md:w-11/12"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  .case-study-hero {
    @apply flex bg-brand-brand-green mb-44 lg:mb-72 px-8;
  }
  .hero-container {
    @apply flex flex-wrap items-center mx-auto;
  }

  li {
    @apply text-left list-disc list-inside ml-8;
  }

  .special-heading {
    font-family: 'Shadows Into Light Two', cursive;
    @apply text-brand-brand-green text-4xl text-center my-6 md:w-11/12 2xl:w-4/5 tracking-wider;
  }
</style>
