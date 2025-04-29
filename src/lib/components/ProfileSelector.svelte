<script>
  import { profile } from '$lib/stores/accessibility';

  function setProfile(p) {
    profile.set(p);
  }
</script>

<div class="section">
  <p class="section_label">Accessibility Profiles</p>
  <button on:click={() => setProfile('blind')}>Blind</button>
  <button on:click={() => setProfile('colorblind')}>Colorblind</button>
  <button on:click={() => setProfile('lowvision')}>Low Vision</button>
  <button>Lees pagina</button>
  <button>Zichtbare links</button>
</div>

<style>
  .section {
    margin-bottom: 1rem;
  }
  .section_label {
    font-weight: bold;
  }
  button {
    margin-right: 0.5rem;
    background: none;
    border: 1px solid #aaa;
    padding: 0.3rem 0.6rem;
    cursor: pointer;
  }
</style>
