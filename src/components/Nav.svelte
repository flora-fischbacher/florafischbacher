<script lang="ts">
  import Icon from "svelte-awesome";
  import { faBars } from "@fortawesome/free-solid-svg-icons";
  import ClickOutside from "svelte-click-outside";

  export let segment: string;

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
        <img class="w-3/4" src="/flora-logo.png" alt="Flora Fischbacher" />
      </a>
    </div>
    <div class="ml-auto md:hidden">
      <ClickOutside on:clickoutside="{() => (open = false)}">
        <button
          class="flex items-center px-3 py-2 rounded-sm bg-brand-dust-rose text-brand-off-white hover:bg-brand-brown"
          aria-label="Hamburger menu"
          on:click="{toggleHamburgerMenu}"
        >
          <Icon data="{faBars}" class="text-xl" />
        </button>
      </ClickOutside>
    </div>
    <nav
      aria-label="Header navigation"
      class:hidden="{!open}"
      class="w-full ml-auto md:flex md:w-auto"
    >
      <a
        sveltekit:prefetch
        href="/"
        class="nav-link md:inline-block md:mt-0"
        class:nav-link-active="{segment === undefined}"
      >
        Home
      </a>
      <a
        sveltekit:prefetch
        href="/portfolio"
        class="nav-link md:inline-block md:mt-0"
        class:nav-link-active="{segment === 'portfolio'}"
      >
        Portfolio
      </a>
      <a
        sveltekit:prefetch
        href="/resume"
        class="nav-link md:inline-block md:mt-0"
        class:nav-link-active="{segment === 'resume'}"
      >
        Resume
      </a>
    </nav>
  </div>
</header>

<style lang="postcss">
  .header-box-shadow {
    box-shadow: 0 2px 22px 0 #bdbcbca6;
  }

  header {
    z-index: 1;
  }
  .nav-link {
    @apply block text-brand-brown mt-4 mr-4 text-2xl no-underline p-4;
    font-family: "Annie Use Your Telescope", cursive;
  }

  .nav-link:hover {
    @apply text-brand-dust-rose;
  }
  .nav-link-active {
    @apply text-brand-dust-rose;
  }
</style>
