<svelte:head>
  <title>Flora Fischbacher - UX Designer</title>
</svelte:head>
<div class="homepage-hero">
  <div class="hero-container flex">
    <div class="text-box w-1/2 md:w-full">
      <h1 class="px-3 fancy-font">Hi I’m Flora.</h1>
      <h4 class="h4-uppercase">Website | Design | Marketing</h4>
      <p class="hero-text">
        A product designer located in Vienna Austria with a focus on user
        experience and design.
      </p>
    </div>
    <div class="img-box w-1/2 md:w-full">
      <img
        src="/homepage/flora-profile.png"
        alt="Flora Fischbacher"
        class="profile-img"
      />
    </div>
  </div>
</div>

<style>
  .homepage-hero {
    background-image: url("/homepage/homepage-bg.png");
    background-position: center;
    height: 900px;
    /*background-repeat: no-repeat;*/
    width: 100%;
  }
  .hero-container {
    background-color: var(--dust-rose);
    width: 50%;

    padding: 90px;
    box-shadow: 0 2px 22px 4px rgba(0, 0, 0, 0.2);
  }

  h1 {
    color: var(--off-white);
    font-size: 3em;
    text-align: center;
  }
  .hero-text {
    color: var(--off-white);
    font-size: 23px;
    text-align: center;
  }
  .h4-uppercase {
    text-align: center;
  }
</style>
