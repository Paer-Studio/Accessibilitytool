<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  
    function toggleMenu() {
      dispatch('toggle');
    }
  </script>
  
  <button class="btn_toggle" on:click={toggleMenu} aria-label="Toggle Accessibility Menu">
    ♿︎
  </button>
  
  <style>
    .btn_toggle {
      position: fixed;
      right: 1rem;
      background: #000;
      color: #fff;
      border: none;
    }
  </style>
  