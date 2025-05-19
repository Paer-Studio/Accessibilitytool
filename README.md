# Accessibility Tool (A11y Menu) for PAER Studio

## Overview

This is PAER Studio's official accessibility menu – a tool for making client websites more accessible. The menu is built to be dropped into any project and supports a11y standards out of the box. New features and changes should follow the standards and structure below.

> To install and demonstrate the tool, use the [PAER Studio Component Library](https://github.com/Paer-Studio/Component-Library).

---

## Standards & Conventions

- Use English for all code (naming, comments, variables).
- The interface starts in Dutch (NL) with a toggle to English (ENG).
- No CSS nesting — keep styles broadly compatible.
- Use camelCase in all code.
- Align with PAER values: progressive enhancement, accessibility, responsiveness, and performance.
- JavaScript should be minimal — functionality must work without it.
- Only use native HTML/CSS inputs — no JS-based custom controls.
- Components are loaded via an array and categorized in the menu, based on the user profile.
- Use `rem` units instead of `px`.
- Use CSS custom properties for all values.
- Use TypeScript when it adds clarity or safety — no overkill.

---

## Accessibility Requirements

- Follow accessibility standards: WCAG, ARIA, etc.
- Implement all visual and ARIA states: `hover`, `focus`, `active`, `expanded`, etc.
- Use semantic HTML and accurate ARIA roles.
- Provide accessible names via props, with fallback defaults.
- If ARIA IDs are required, generate them if not passed.
- All features must be fully keyboard-navigable.
- Test with screen readers like VoiceOver, NVDA, and JAWS.

---

## Technology Stack

- **Framework**: SvelteKit (Svelte 5)
- **Language**: HTML,CSS,JavaScript,TypeScript

- **Package Manager**: npm

---

## Development Plan

1. Upgrade to Svelte 5.
2. Convert to a private npm package.
3. Follow [Svelte packaging guidelines](https://svelte.dev/docs/kit/packaging).
4. Set up `package.json` for publishing.
5. Test with `npm run dev`.
6. Publish to npm (PAER account required).
7. Install in the component library site.
8. Import the component and verify.

---

## Tool Logic & Development

- Prioritize progressive enhancement.
- Responsive layout by default.
- Allow direct DOM interaction when needed.
- Store user settings with cookies, cache, or localStorage.
- Use SSR for JavaScript features.
- Use popovers for toggles and overlays.
- The menu is a form (or styled div) with input types: `select`, `range`, `checkbox`, `radio`.
- Each a11y feature should be its own component.
- Use client-side fallback for any server logic.
- Group related controls into categories in the menu.

---

## Design & UI

- Core design: black and white (for strong contrast).
- Use PAER brand colors for highlights and focus states.
- UI references for inspiration:
  - [Uiverse Checkboxes](https://uiverse.io/checkboxes)
  - [Storybook Showcase](https://storybook.js.org/showcase/glossary)
  - [Untitled UI Components](https://www.untitledui.com/components/log-in-pages)
  - [Tailwind UI Blocks](https://tailwindcss.com/plus/ui-blocks/marketing/elements/flyout-menus)
- Consider long-term support for a browser extension.

---

## Example Accessibility Options

- Change text size (increase/decrease).
- Adjust contrast (light/dark/high).
- Full keyboard support.
- Disable motion/animations.
- Highlight all links.
- Modify text spacing (line height).
- Highlight mouse pointer.

---

## Planned Features & User Options

### Languages

- Dutch / English toggle (checkbox or switch)

### User Profiles

- Blind
- Dyslexic
- Hard of hearing
- Screen reader only (future)

### Accessibility Functions

- Dark / light mode
- Contrast control (slider)
- Text size control (slider)
- Turn off animations
- Show link outlines
- Adjust line height
- Highlight mouse pointer

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Accessibilitytool
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

> For production use and demonstration, install and showcase this tool via the [PAER Studio Component Library](https://github.com/Paer-Studio/Component-Library).

## 🔄 Updating the npm Package
1. Update the version number in `package.json` according to [semantic versioning](https://semver.org/).
2. Build the package (if required):
   ```bash
   npm run build
   ```
3. Log in to npm (if not already logged in):
   ```bash
   npm login
   ```
4. Publish the package to npm:
   ```bash
   npm publish --access=public
   ```
   > Note: You may need the appropriate permissions for the PAER Studio npm account.
5. Install the updated package in your target project as needed:
   ```bash
   npm install <package-name>@latest
   ```
For private packages or additional configuration, refer to the [npm documentation](https://docs.npmjs.com/).

## Testing
Testing setup (e.g., with Playwright) will be added soon. Instructions for running tests and test coverage will be provided in a future update.

## Project Structure
```
Accessibilitytool/
  src/
    lib/
      components/
      stores/
    routes/
  static/
  e2e/  # (E2E tests will be added in the future)
  ...
```
- `src/` – Main source code
- `static/` – Static assets
- `e2e/` – End-to-end tests (not yet set up)

## Resources & Documentation
- [Svelte Packaging Guidelines](https://svelte.dev/docs/kit/packaging)
- UI inspiration links above

## Target Audience
This tool is intended for clients of PAER Studio who want to improve the accessibility of their websites and meet all major accessibility standards.

## License
_No license yet._

---

# Toegankelijkheidsmenu (A11y Menu) voor PAER Studio

## Overzicht
Dit is het officiële toegankelijkheidsmenu van PAER Studio – een tool om websites van klanten toegankelijker te maken. Het menu is ontworpen om eenvoudig in elk project te worden geïntegreerd en ondersteunt toegankelijkheidsstandaarden (a11y) direct. Nieuwe functies en wijzigingen moeten voldoen aan de onderstaande standaarden en structuur.

> Installeer en demonstreer de tool via de [PAER Studio Component Library](https://github.com/Paer-Studio/Component-Library).

---

## Standaarden & Conventies

- Gebruik Engels voor alle code (namen, commentaar, variabelen).
- De interface start in het Nederlands (NL) met een schakelaar naar Engels (ENG).
- Geen CSS-nesting — houd stijlen breed compatibel.
- Gebruik camelCase in alle code.
- Sluit aan bij PAER-waarden: progressive enhancement, toegankelijkheid, responsiviteit en performance.
- JavaScript moet minimaal zijn — functionaliteit moet zonder JS werken.
- Gebruik alleen native HTML/CSS inputs — geen JS-gestuurde custom controls.
- Componenten worden via een array geladen en in het menu gecategoriseerd op basis van gebruikersprofiel.
- Gebruik `rem`-eenheden in plaats van `px`.
- Gebruik CSS custom properties voor alle waarden.
- Gebruik TypeScript waar het duidelijkheid of veiligheid toevoegt — niet overdreven.

---

## Toegankelijkheidseisen

- Volg toegankelijkheidsstandaarden: WCAG, ARIA, enz.
- Implementeer alle visuele en ARIA-staten: `hover`, `focus`, `active`, `expanded`, enz.
- Gebruik semantische HTML en correcte ARIA-rollen.
- Voorzie toegankelijke namen via props, met fallback-standaarden.
- Als ARIA-ID's nodig zijn, genereer ze indien niet meegegeven.
- Alle functies moeten volledig met het toetsenbord te bedienen zijn.
- Test met screenreaders zoals VoiceOver, NVDA en JAWS.

---

## Technische Stack

- **Framework**: SvelteKit (Svelte 5)
- **Taal**: HTML,CSS,JavaScript,TypeScript
- **Pakketbeheer**: npm

---

## Ontwikkelplan

1. Upgrade naar Svelte 5.
2. Omzetten naar een privé npm-pakket.
3. Volg de [Svelte packaging guidelines](https://svelte.dev/docs/kit/packaging).
4. Stel `package.json` in voor publicatie.
5. Test met `npm run dev`.
6. Publiceer naar npm (PAER-account vereist).
7. Installeer in de component library site.
8. Importeer het component en controleer.

---

## Tool Logica & Ontwikkeling

- Progressive enhancement als uitgangspunt.
- Altijd responsief ontwerp.
- Directe DOM-interactie waar nodig.
- Sla gebruikersinstellingen op met cookies, cache of localStorage.
- Gebruik SSR voor JavaScript-functionaliteit.
- Gebruik popovers voor toggles en overlays.
- Het menu is een formulier (of gestylde div) met inputtypes: `select`, `range`, `checkbox`, `radio`.
- Elke a11y-functie is een eigen component.
- Gebruik client-side fallback voor serverlogica.
- Groepeer gerelateerde controls in categorieën in het menu.

---

## Design & UI

- Hoofddesign: zwart-wit (voor sterk contrast).
- Gebruik PAER-huisstijlkleuren voor highlights en focus.
- UI-referenties voor inspiratie:
  - [Uiverse Checkboxes](https://uiverse.io/checkboxes)
  - [Storybook Showcase](https://storybook.js.org/showcase/glossary)
  - [Untitled UI Components](https://www.untitledui.com/components/log-in-pages)
  - [Tailwind UI Blocks](https://tailwindcss.com/plus/ui-blocks/marketing/elements/flyout-menus)
- Overweeg op termijn ondersteuning voor een browserextensie.

---

## Voorbeelden van Toegankelijkheidsopties

- Tekstgrootte aanpassen (vergroten/verkleinen).
- Contrast aanpassen (licht/donker/hoog).
- Volledige toetsenbordondersteuning.
- Animaties/motion uitschakelen.
- Alle links markeren.
- Tekstafstand (line height) aanpassen.
- Muisaanwijzer highlighten.

---

## Geplande Functies & Gebruikersopties

### Talen

- Nederlands / Engels schakelaar (checkbox of switch)

### Profielen

- Blind
- Dyslexie
- Slechthorend
- Alleen screenreader (toekomst)

### Toegankelijkheidsfuncties

- Donkere / lichte modus
- Contrastregeling (slider)
- Tekstgrootte (slider)
- Animaties uitzetten
- Links zichtbaar maken
- Regelafstand aanpassen
- Muisaanwijzer highlighten

## Installatie
1. Clone deze repository:
   ```bash
   git clone <repository-url>
   cd Accessibilitytool
   ```
2. Installeer afhankelijkheden:
   ```bash
   npm install
   ```
3. Start de ontwikkelserver:
   ```bash
   npm run dev
   ```
4. Open je browser en ga naar:
   ```
   http://localhost:5173
   ```

> Voor productie en demonstratie: installeer en toon deze tool via de [PAER Studio Component Library](https://github.com/Paer-Studio/Component-Library).

## npm-pakket bijwerken
1. Verhoog het versienummer in `package.json` volgens [semantische versiebeheer](https://semver.org/).
2. Build het pakket (indien nodig):
   ```bash
   npm run build
   ```
3. Log in bij npm (indien nog niet ingelogd):
   ```bash
   npm login
   ```
4. Publiceer het pakket naar npm:
   ```bash
   npm publish --access=public
   ```
   > Let op: je hebt mogelijk de juiste rechten nodig voor het PAER Studio npm-account.
5. Installeer het bijgewerkte pakket in je doelproject:
   ```bash
   npm install <package-name>@latest
   ```
Voor privé-pakketten of extra configuratie, zie de [npm documentatie](https://docs.npmjs.com/).

## Testen
Testen (zoals Playwright) worden binnenkort toegevoegd. Instructies voor het uitvoeren van tests en test coverage volgen in een latere update.

## Projectstructuur
```
Accessibilitytool/
  src/
    lib/
      components/
      stores/
    routes/
  static/
  e2e/  # (E2E-tests worden later toegevoegd)
  ...
```
- `src/` – Broncode
- `static/` – Statische bestanden
- `e2e/` – End-to-end tests (nog niet opgezet)

## Bronnen & Documentatie
- [Svelte Packaging Guidelines](https://svelte.dev/docs/kit/packaging)
- UI-inspiratielinks hierboven

## Doelgroep
Deze tool is bedoeld voor klanten van PAER Studio die de toegankelijkheid van hun website willen verbeteren en aan alle belangrijke toegankelijkheidsstandaarden willen voldoen.

## Licentie
_Nog geen licentie._
