<script>
    import LanguageSelector from './LanguageSelector.svelte';
    import ProfileSelector from './ProfileSelector.svelte';
  </script>
  
  <div class="menu">
    <h2 class="menu_title">Accessibility Menu</h2>
    <LanguageSelector />
    <ProfileSelector />
  </div>
  
  <style>
    .menu {
      position: fixed;
      right: 5rem;
      border: 1px solid #ccc;
      padding: 1rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      border-radius: 0.5rem;
    }
    .menu_title {
      font-size: 1.2rem;
    }
  </style>
  