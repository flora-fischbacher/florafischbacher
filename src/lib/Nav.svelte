<script lang="ts">
  import Icon from 'svelte-awesome';
  import { faBars } from '@fortawesome/free-solid-svg-icons';
  import { page } from '$app/stores';
  import { clickOutside } from '../clickOutside';

  let open = false;

  const toggleHamburgerMenu = () => {
    open = !open;
  };
</script>

<header class="fixed top-0 w-full bg-white header-box-shadow">
  <div
    class="container flex flex-wrap items-center justify-between p-3 mx-auto bg-white"
  >
    <div class="flex">
      <a
        sveltekit:prefetch
        href="/"
        class="block mt-0 text-xl font-semibold tracking-tight md:inline-block"
      >
        <img
          class="h-16 sm:h-20"
          src="/flora-logo.png"
          alt="Flora Fischbacher"
        />
      </a>
    </div>
    <div
      class="ml-auto md:hidden"
      use:clickOutside
      on:clickOutside="{() => (open = false)}"
    >
      <button
        class="flex items-center px-3 py-2 rounded-sm bg-brand-brand-green text-brand-off-white hover:bg-brand-green-hover"
        aria-label="Hamburger menu"
        on:click="{toggleHamburgerMenu}"
      >
        <Icon data="{faBars}" class="text-xl" />
      </button>
    </div>
    <nav
      aria-label="Header navigation"
      class="w-full ml-auto md:flex md:w-auto {!open ? 'hidden' : ''}"
    >
      <a
        sveltekit:prefetch
        href="/"
        class="nav-link md:inline-block md:mt-0"
        class:nav-link-active="{$page.path === '/'}"
      >
        Home
      </a>
      <a
        sveltekit:prefetch
        href="/portfolio"
        class="nav-link md:inline-block md:mt-0"
        class:nav-link-active="{$page.path === '/portfolio'}"
      >
        Portfolio
      </a>
      <a
        sveltekit:prefetch
        href="/resume"
        class="nav-link md:inline-block md:mt-0"
        class:nav-link-active="{$page.path === '/resume'}"
      >
        Resume
      </a>
    </nav>
  </div>
</header>

<style lang="postcss">
  .header-box-shadow {
    filter: drop-shadow(0px 2px 9px rgba(0, 0, 0, 0.18));
  }
  header {
    z-index: 1;
  }
  .nav-link {
    @apply block text-brand-brand-green mt-4 mr-4 text-2xl no-underline p-4;
    font-family: 'Annie Use Your Telescope', cursive;
  }
  .nav-link:hover {
    @apply text-brand-green-hover;
  }
  .nav-link-active {
    @apply text-brand-green-hover;
  }
</style>
