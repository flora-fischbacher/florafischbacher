/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

// added stub declarations for these deps to silence svelte-check warnings
declare module 'svelte-awesome';

declare namespace svelte.JSX {
  interface HTMLProps<T> {
    onclickOutside?: () => void;
  }
}
