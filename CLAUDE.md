# Brimer VIP

Project memory / context for the Brimer VIP website. Keyword: **Brimer VIP**.

## What this is
Landing page for **Brimer VIP**, a vehicle rental and private chauffeur company based in
La Romana, Dominican Republic. Services: vehicle rental, private chauffeur, Punta Cana
airport pickup, Santo Domingo event bus, private excursions, Casa de Campo / Punta Cana
chauffeur service.

## Stack
Static site, no framework, no build step: `index.html`, `styles.css`, `main.js`,
`assets/images/`. Spanish/English toggle built into `main.js` (i18n dictionary +
`data-i18n` attributes). Black / silver / gold color scheme, matched to the real logo
at `assets/images/logo.jpeg`.

## Branches
- `main` — untouched, only has the original placeholder README (do not confuse this
  with the real site — the real site is NOT on `main`).
- `claude/project-continuity-plan-fjjgrk` — the actual working branch with all site code.
- `gh-pages` — mirror of the working branch, used to serve GitHub Pages. Must be manually
  re-synced (checkout gh-pages, copy over working branch content, commit, push) whenever
  the working branch changes and the live site needs updating.

## Live URL
`https://andresmagra.github.io/brimer-vip/` — GitHub Pages, source = `gh-pages` branch,
root folder. Repo had to be made **public** for Pages to work (private repos need a paid
GitHub plan for Pages).

## Contact info (real, already wired in)
- WhatsApp / phone: **(849) 919-6203** — set in `main.js` (`CONFIG.whatsappNumber`) and in
  the contact section of `index.html`.
- Email: still a placeholder (`info@brimervip.com`) — needs the real one.

## Fleet (18 vehicles, all with real photos, grouped by category in index.html)
- **SUVs de Lujo**: Chevrolet Suburban High Country, Chevrolet Suburban LTZ, Chevrolet
  Tahoe, Jeep Grand Cherokee, Chevrolet Traverse (gray), Chevrolet Traverse (white), Kia
  Sonet, Suzuki XL7, Chevrolet Trax
- **Vans y Minibuses**: Mercedes-Benz Sprinter (white), Mercedes-Benz Sprinter (black),
  Toyota HiAce, Hyundai H1
- **Sedanes y Compactos**: Hyundai Elantra, Kia Optima, Kia Picanto
- **Buggies Todoterreno**: Buggy Tucan (purple/chameleon), Buggy 6 Pasajeros (white)

Every fleet card has a `data-gallery` id wired to a photo array in `main.js`
(`galleries` object) and opens in a lightbox on click. License plates were blurred
with PIL wherever visible in source photos (privacy).

## Design polish applied
Gold accent underline on section titles, gold glow on hero logo, elevated hover states
(shadow + lift) on service/fleet cards, gold ring on the floating WhatsApp button, hover
feedback on service-area pills.

## Still open / TODO
- Real email address (currently placeholder)
- Keep `gh-pages` branch in sync with the working branch after future edits
- User wants a 1080p video ad for Brimer VIP — no local ComfyUI/GPU available in this
  environment; planned to use the Higgsfield MCP tools (marketing_studio_video workflow)
  instead, using the real logo + vehicle photos already in `assets/images/`.
