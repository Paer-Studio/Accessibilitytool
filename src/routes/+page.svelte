  <script>
    import { onMount } from 'svelte';
    import ToggleButton from '$lib/components/ToggleButton.svelte';
    import AccessibilityMenu from '$lib/components/AccessibilityMenu.svelte';
    import { profile, language } from '$lib/stores/accessibility';
    import { page } from '$app/stores';
  
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
  
  <slot />
    
  
  <h1>Welcome to your library project Test AccessibilityTool</h1>
  <p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
  <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
  
  <AccessibilityMenu >
    <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vitae, neque reiciendis id voluptates nobis quidem impedit. Rem, consectetur laborum. Consequatur fugiat corporis temporibus, magni neque possimus doloremque vero voluptates, accusantium sint tenetur? Vel porro eos, facere rerum ullam veritatis enim. Magnam corporis iure aperiam cum reiciendis pariatur assumenda iste facilis, obcaecati magni quas voluptatibus animi consequatur? Totam nam ipsum, asperiores a aliquam minus fugit dignissimos. Eius cupiditate laborum deleniti error, deserunt ipsa cum fugit corrupti? Distinctio quisquam magnam possimus perspiciatis odio ut, itaque placeat non molestias nisi saepe, adipisci excepturi ipsum fuga ducimus labore dolorum, in suscipit perferendis iusto sequi. Fugit atque aliquam iure ducimus omnis ea consequatur similique sed. Quo ipsum deserunt vitae qui dicta similique, atque possimus cupiditate. Adipisci, expedita dignissimos labore deleniti voluptate sapiente aliquam ad, non quibusdam autem quisquam placeat corporis numquam, dicta magnam perferendis vel. Dolorem quos numquam at debitis distinctio nisi in modi vero, cupiditate dicta delectus minima adipisci architecto ipsam voluptatem, porro perferendis ipsa fugit nobis quia, alias accusantium iste excepturi! Animi labore dolores hic fuga temporibus praesentium quas eligendi qui minima. Quos reiciendis unde numquam tempora esse rerum molestias nobis aperiam fuga, beatae dolor, temporibus magnam voluptatem iure doloremque distinctio dolore. -->
  </AccessibilityMenu>
  