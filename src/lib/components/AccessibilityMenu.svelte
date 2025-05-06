<script lang="ts">
  import LanguageSelector from './LanguageSelector.svelte';
  import ProfileSelector from './ProfileSelector.svelte';
  interface Props {
    children?: import('svelte').Snippet<[]>;
  }
  
  let { children }: Props = $props();
  
  const comment = `it's missing the other a11y components and the styling for the menu and inputs`;
</script>

<div class="buttonBox">
  <button popovertarget="a11y-menu">♿︎</button>
</div>

<div id="a11y-menu" class="menu" popover>
  <h2 class="menu_title">Accessibility Menu</h2>
  <LanguageSelector />
  <ProfileSelector />
  {#if children}
    {@render children()}
  {/if}
  <button popovertarget="a11y-menu" popovertargetaction="hide">x</button>
</div>

<style>
  :root {
    --btn-top: 4dvh;
    --btn-right: 5dvw;
  }

  .buttonBox {
    display: inline-flex;
    place-content: end;
    width: 100%;
    position: fixed;
    top: var(--btn-top);
    right: var(--btn-right);
    z-index: 1000;
  }

  button {
    anchor-name: --myAnchor;
    z-index: 1000;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .menu {
    position: fixed;
    border: 1px solid #ccc;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    margin: 0;
    top: calc(5dvh + var(--btn-top));
    right: 5dvw;
    outline: olive solid;
    left: auto;
    margin-left: 5dvw;
    z-index: 10;
    max-width: 90dvw;
    max-height: 50dvh;
    overflow: auto;
  }

  .menu_title {
    font-size: 1.2rem;
  }

  button[popovertargetaction="hide"] {
    display: none;
  }

  /* for the browsers that support anchor() */
  @supports (anchor-name: --myAnchor) {
    [popovertarget] {
      display: inline;
      position: relative;
    }

    .menu[popover] {
      border: 0;
      margin: 0;
      position-anchor: --myAnchor;
      top: calc(anchor(bottom) + 1rem);
      right: anchor(right);
      outline: orange solid;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .menu {
      transition: none;
    }
  }

  /* smaller desktop screen */
  @media screen and (width < 600px) {
    .menu {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      width: 100%;
      height: fit-content;
      margin: 0;
    }

    button[popovertargetaction="hide"] {
      display: inline-flex;
      position: absolute;
      top: var(--btn-top);
      right: 12dvw;
      width: fit-content;
    }
  }

  /* detection for mobile */
  @media (pointer: coarse) and (hover: none) and (min-resolution: 400dpi),
    screen and (device-width <= 900px) and (width <= 900px) and (orientation: portrait),
    screen and (device-height <= 900px) and (height <= 900px) and (orientation: landscape) {
    .buttonBox {
      position: fixed;
      top: auto;
      bottom: calc(env(safe-area-inset-bottom) + var(--btn-top));
      right: var(--btn-right);
      left: auto;
      width: 100%;
      height: fit-content;
      margin: 0;
    }

    .menu {
      top: auto;
      bottom: 0;
      inset-inline: 4%;
      width: auto;
      margin: 0;
    }

    @supports (anchor-name: --myAnchor) {
      [popovertarget] {
        display: inline;
        position: relative;
      }

      button[popovertargetaction="hide"] {
        display: none;
      }

      .menu[popover] {
        position-anchor: --myAnchor;
        inset: unset;
        inset-inline: 4%;
        width: auto;
        bottom: calc(anchor(top) + 1rem);
      }
    }
  }
</style>
