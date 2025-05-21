<script>
  import { profile } from '$lib/stores/accessibility';
  import { 
    CursorHighlight,
    TextSize,
    Contrast,
    LineHeight,
    ReduceAnimation
  } from '$lib'

  let profiles = $state(['blind','colorblind', 'lowvision','Dislexia']); 
  let selectedProfile = $derived(''); 

  function setProfile(p) {
    profile.set(p);
  }

  $effect(() => {
    // This will run whenever the profile store changes
    setProfile(selectedProfile);
    console.log(`Profile set to: ${$profile}`);
  });
</script>

<section class="override">
  <p class="section_label">Accessibility Profiles</p>
  {#each profiles as profile}
    <label class:active={ selectedProfile === profile}>
      <input type="radio" name='profiles'  value={profile} bind:group={selectedProfile} >
      {profile}
    </label>  
  {/each}
</section>

<section class="override">
  <p class="section_label">Accessibility Profiles</p>
  <button>Lees pagina</button>
  <button>Zichtbare links</button>
  <CursorHighlight />
  <TextSize/>
  <LineHeight/>
  <ReduceAnimation/>
  <Contrast/>
</section>

<style>
  section {
    margin-bottom: 1rem;
  }

  .section_label {
    margin-bottom: 1rem;
    font-weight: bold;
  }
  
  label,button {
    position: relative;
    margin-right: 0.5rem;
    background: none;
    border: 1px solid #aaa;
    padding: 0.3rem 0.6rem;
    cursor: pointer;
  }

  input[type="radio"] {
    visibility: hidden;
    position: absolute;
  }

  .active {
    background-color: #007bffd3;
    color: white;
  }
</style>
