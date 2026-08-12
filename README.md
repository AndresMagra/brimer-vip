# Brimer VIP

Landing page for **Brimer VIP** — vehicle rental and private chauffeur services based in La Romana, Dominican Republic (serving La Romana, Punta Cana, Santo Domingo, and Casa de Campo).

## Stack

Plain static site — no build step, no framework.

- `index.html` — page structure/content
- `styles.css` — all styling (black / silver / gold theme matching the logo), mobile-first responsive
- `main.js` — Spanish/English language toggle + WhatsApp link config
- `assets/images/logo.jpeg` — the real Brimer VIP logo

## Run locally

Just open `index.html` in a browser, or serve it (recommended, avoids some browser file:// quirks):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## To finish setup

Edit the top of `main.js`:

```js
const CONFIG = {
  whatsappNumber: "18095550123", // replace with the real WhatsApp number (digits only, country code first, no + or spaces)
  ...
};
```

Also update the placeholder phone/email in `index.html` under the `#contact` section (currently `+1 (809) 555-0123` / `info@brimervip.com`).

## Adding real vehicle photos

Drop images into `assets/images/` (e.g. `suv.jpg`, `sedan.jpg`, `van.jpg`, `bus.jpg`) and in `index.html` replace each `<div class="fleet-img placeholder-img">...</div>` block with:

```html
<img src="assets/images/suv.jpg" alt="SUV de Lujo" class="fleet-img">
```

## Continuing on your PC

This repo lives on GitHub at `andresmagra/brimer-vip`, branch `claude/project-continuity-plan-fjjgrk`.

```bash
git clone https://github.com/andresmagra/brimer-vip.git
cd brimer-vip
git checkout claude/project-continuity-plan-fjjgrk
```

From there you can open the folder in any editor (or Claude Code) and keep working — everything needed (logo, code, this README) is committed to the branch.

## Deploying

Since it's a static site, it can be hosted for free on Netlify, Vercel, or GitHub Pages by pointing them at this repo/branch with no build command (root = publish directory).
