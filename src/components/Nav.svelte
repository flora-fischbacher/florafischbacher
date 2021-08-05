<script>
  export let segment;
</script>

<nav>
  <ul>
    <div class="nav-logo">
      <li>
        <a aria-current="{segment === undefined ? 'page' : undefined}" href=".">
          <img src="/flora-logo.png" alt="Flora Fischbacher Logo" />
        </a>
      </li>
    </div>
    <div class="nav-items">
      <li class="fancy-font">
        <a aria-current="{segment === undefined ? 'page' : undefined}" href="."
          >Home</a
        >
      </li>
      <li class="fancy-font">
        <a
          aria-current="{segment === 'portfolio' ? 'page' : undefined}"
          href="portfolio">Portfolio</a
        >
      </li>
      <li class="fancy-font">
        <a
          aria-current="{segment === 'resume' ? 'page' : undefined}"
          href="resume">Resume</a
        >
      </li>
    </div>
  </ul>
</nav>

<style>
  nav {
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: var(--gold);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
  .nav-items {
    float: right;
  }
</style>
