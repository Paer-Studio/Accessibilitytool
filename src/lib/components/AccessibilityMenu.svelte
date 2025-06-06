<script lang="ts">
  import {LanguageSelector, ProfileSelector, DarkMode} from '$lib';
</script>

<div class="buttonBox override">
  <button popovertarget="a11yMenu">♿︎</button>
</div>

<!-- In principle, there should be a form that reactively updates every time something changes within it.  -->
<div id="a11yMenu" class="menu override" popover>
  <h2 class="menuTitle">Accessibility Menu</h2>
  <LanguageSelector />
  <ProfileSelector />

  <DarkMode />

  <button popovertarget="a11y-menu" popovertargetaction="hide">x</button>
  <button>reset</button>
  <button>close</button>

  
  <button popovertarget="a11yMenu" popovertargetaction="hide">x</button>

</div>

<style>
  :root {
    --btn-top: 4dvh;
    --btn-right: 5dvw;  
  }

  :global(.override) {
    --font-size: initial;
    --line-height: initial;
  }

  .buttonBox {
    display: inline-flex;
    place-content: end;
    position: fixed;
    top: var(--btn-top);
    right: var(--btn-right);
    left: auto;
    z-index: 500;
  }

  button {
    anchor-name: --myAnchor;
    z-index: 1000;
    font-size: 1.5rem;
    cursor: pointer;
    aspect-ratio: 1/1;
    width: 3rem;
    border-radius: 50%;
  }

  .menu {
    display: none;
    max-width: min(90dvw, 50rem); 
    max-height: 50dvh; 
    position: fixed;
    top: calc(3.5rem + var(--btn-top)); 
    right: var(--btn-right);
    left: auto;
    z-index: 10;
    border: .1rem solid #ccc;
    border-radius: 0.5rem;
    background-color: #ffffffe1;
    backdrop-filter: blur(10px);
    padding: 1rem;
    margin: 0;
    margin-left: 3rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    overflow: auto;

    transition-behavior: allow-discrete;
    transition: opacity 0.2s ease-out, transform 0.1s ease-in-out, display 0.2s allow-discrete;
    outline: olive solid;
  }

  .menu:popover-open {
    display: block;
    opacity: 1;
    transform: translateY(0);

    @starting-style {
      opacity: 0;
      transform: translateY(5px);
    }
  }

  .menuTitle {
    font-size: 1.2rem;
  }

  button[popovertargetaction="hide"] {
    display: none;
  }

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
      left: auto;
      outline: orange solid;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .menu {
      transition: none;
    }
  }

  @media screen and (width < 600px) {
    .menu {
      position: fixed;
      right: 0;
      left: var(--btn-right);
      width: 100%;
      height: fit-content;
      margin: 0;
    }
  }

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
      inset-inline: 2rem;
      width: auto;
      margin: 0;
    }

    button[popovertargetaction="hide"] {
      display: inline-flex;
      position: absolute;
      top: var(--btn-top);
      right: 8rem;
      width: fit-content;
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
        margin-inline: var(--btn-right) max(auto, var(--btn-right));
        width: auto;
        right: anchor(right) !important;
        bottom: calc(anchor(top) + 1rem);
      }
    }
  }

  /* .after-element {
    position: fixed;
    pointer-events: none;
    width: 40px;
    height: 40px;
    background: rgba(0,0,0,0.15);
    border-radius: 50%;
    z-index: 2000;
    transform: translate(-50%, -50%);
    transition: background 0.2s;
    border: 2px solid #333;

  }

  } */
</style>


