<script>
  import { page } from '$app/stores';
</script>

<footer class="pb-24">
  <div class="w-2/3 mx-auto md:w-1/2">
    <a aria-current="{$page.path === '/' ? 'page' : undefined}" href="/">
      <img
        src="/flora-logo.png"
        alt="Flora Fischbacher Logo"
        class="pt-0 mx-auto 2xl:pt-24"
      />
    </a>
    <h5 class="text-center imageText-heading">Let's Connect</h5>
    <p class="text-center">
      Get in touch for opportunities or just to say hello!
    </p>

    <div
      class="flex flex-wrap items-center w-full mx-auto mt-12 md:w-1/2 lg:w-1/3"
    >
      <div class="flex-wrap w-1/3">
        <a href="mailto:florafischbacher1@gmail.com" target="_blank">
          <img src="/icons/envelope.svg" alt="Email Icon" class="footer-icon" />
        </a>
      </div>
      <div class="flex-wrap w-1/3">
        <a
          href="https://www.linkedin.com/in/flora-fischbacher-4a7a93a7/"
          target="_blank"
        >
          <img
            src="/icons/linkedin.svg"
            alt="Linkedin Icon"
            class="footer-icon"
          />
        </a>
      </div>
      <div class="flex-wrap w-1/3">
        <a
          href="https://github.com/flora-fischbacher/florafischbacher"
          target="_blank"
        >
          <img src="/icons/github.svg" alt="Github Icon" class="footer-icon" />
        </a>
      </div>
    </div>
  </div>
</footer>
