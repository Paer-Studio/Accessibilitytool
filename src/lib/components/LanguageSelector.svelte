<script>
    import { language } from '$lib/stores/accessibility';
    let lang = $state('en')
    function setLang(lang) {
      language.set(lang);
    }
  </script>
  
  <div class="section">
    <p class="section_label">Language</p>
    <button onclick={() => setLang('nl')}>Nederlands</button>
    <button onclick={() => setLang('en')}>English</button>
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
  