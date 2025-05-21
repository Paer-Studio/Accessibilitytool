  <script>
    import { onMount } from 'svelte';
    import AccessibilityMenu from '$lib/components/AccessibilityMenu.svelte';
    import { profile, language } from '$lib/stores/accessibility';
    import { page } from '$app/stores';
    let popoverOpen = false;
  
    let spoken = false;
  
    function speak(text, lang) {
      if (typeof window === 'undefined') return;
      const synth = window.speechSynthesis;
      if (synth.speaking) synth.cancel();
  
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = lang === 'nl' ? 'nl-NL' : 'en-US';
      synth.speak(utter);
    }
  
    // Voorleesfunctie activeren bij blind profiel
    $: if ($profile === 'blind' && !spoken) {
      onMount(() => {
        const content = document.body.innerText;
        speak(content, $language);
        spoken = true;
      });
    }
  
    // Reset bij route wissel of profiel wijziging
    $: if ($page.url && $profile !== 'blind') {
      spoken = false;
    }

    import "../app.css";
    
  </script>
  
 
    
  <h1 class="fade-in">Welcome to your library project Test AccessibilityTool</h1>
<p class="fade-in delay">Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p class="fade-in delay2">
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
</p>
  <AccessibilityMenu ></AccessibilityMenu>

  <style>
    :root {
      --font-size: 1rem;
    }
  
    h1 {
      font-size: max(3rem, var(--font-size));
      line-height: var(--line-height, 100%);
    }
  
    p {
      font-size: max(1.5rem, var(--font-size));
      line-height: var(--line-height, 100%);
    }
  
    /* Animatie keyframes */
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  
    /* Fade-in class */
    .fade-in {
      animation: fadeIn 1s ease forwards;
    }
  
    /* Delays voor mooie stagger */
    .delay {
      animation-delay: 0.3s;
    }
  
    .delay2 {
      animation-delay: 0.6s;
    }
  
    /* body.reduced-motion .fade-in {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
    } */
  </style>
