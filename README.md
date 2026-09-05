# CerevityAI Partnership Assistant

A small static site with a keyword-matching FAQ chatbot about CerevityAI's
school partnership program, plus a floating WhatsApp CTA button. Plain
HTML/CSS/JS — no API key, no backend, no build step. Everything the bot
"knows" is stored directly in `script.js` and matched locally in the browser.

## Project structure

```
.
├── index.html   # page markup (hero + chat widget + WhatsApp button)
├── style.css    # all styling
├── script.js    # chat UI + the bot's knowledge base + matching logic
└── package.json
```

## Hindi / English toggle

There's a language button in the header (shows "हिं" when in English, "EN"
when in Hindi — it always shows the language you'd switch TO). Toggling
it:
- Switches all UI text (placeholder, footer, header subtitle) and all
  23 knowledge-base answers to the selected language
- Restarts the conversation with a fresh greeting in that language
  (any in-progress lead-capture flow is reset)
- Remembers the choice via `localStorage` for the next visit
- Also switches the voice-reply language (`hi-IN` / `en-IN`) if voice
  replies are turned on

**Note on matching**: the bot still matches incoming questions using the
same keyword list regardless of language (mostly English/Hinglish terms
like "robotics", "pricing", "WhatsApp" — words Hindi speakers commonly
use in everyday Hinglish). Pure Devanagari-typed questions may not match
as reliably. All bilingual content lives in `KNOWLEDGE_BASE`,
`FALLBACK_ANSWERS`, `GREETING`, `GREETING_REPLIES`, `STARTER_CHIPS`,
`UI_TEXT`, and `LEAD_TEXT` near the top of `script.js` — each has an
`en` and `hi` version.

## Privacy Policy page

`privacy.html` is a standalone branded page explaining what the
chatbot collects (name/school/email, only if the visitor engages) and
how it's used (nothing is stored on a server — it's only ever sent if
the visitor taps the WhatsApp button themselves). It's linked from the
chat's footer. Marked `noindex` so it won't show up in Google search
results, but is still reachable via the link.

## SEO — before you go live

This project ships with basic SEO already wired in: meta description,
keywords, Open Graph/Twitter tags, `robots.txt`, `sitemap.xml`, and
JSON-LD structured data (tells Google this is a real business, not just
a page).

**You must do this one thing** before it'll actually help your Google
ranking: replace every occurrence of the placeholder domain
`https://cerevityai.vercel.app/` with your real, final domain — it
appears in:
- `index.html` (`<link rel="canonical">`, `og:url`)
- `robots.txt` (the `Sitemap:` line)
- `sitemap.xml` (the `<loc>` value)

**After deploying**, submit your site to Google for faster indexing:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your domain as a property
3. Submit `https://yourdomain.com/sitemap.xml`

Ranking on Google also depends on real backlinks, page speed, and
content — this setup gives Google everything it needs to understand
and index the page correctly, but a brand-new domain still takes time
(often weeks) to actually rank.

## Lead capture

After a visitor asks a couple of real questions (or immediately if they ask
about pricing, contract terms, or how to get in touch), the bot asks for
their **name**, **school**, and **email** right inside the chat. They can
type "skip" at any point to opt out.

There's no backend, so the collected details aren't stored anywhere — 
instead, once collected, the bot shows a **"Send my details on WhatsApp"**
button that opens a pre-filled WhatsApp message (name + school) to your
number. The visitor taps it, and the lead lands directly in your WhatsApp.

This only triggers once per browser tab (tracked via `sessionStorage`), so
it won't nag the same visitor repeatedly. The trigger logic and WhatsApp
number live in the `WHATSAPP_NUMBER` constant and the lead-capture block
near the top of `script.js` — keep `WHATSAPP_NUMBER` in sync with the
floating button's number in `index.html` if you change one.

## Voice replies

There's a speaker toggle in the chat header. When turned on, every bot
reply is read aloud using the browser's built-in **Web Speech API**
(`SpeechSynthesis`) — no library, no API key, no cost. The preference is
remembered per-browser via `localStorage`. Supported in Chrome, Edge,
Safari, and most mobile browsers; on unsupported browsers the toggle is
disabled automatically.

## How the bot answers questions

`script.js` contains a `KNOWLEDGE_BASE` array — a list of topics, each with
some `keywords` and a canned `answer`. When someone sends a message, the
bot lowercases it and scores each topic by how many of its keywords appear
in the message; the highest-scoring topic's answer is shown. If nothing
scores above zero, it falls back to a generic "ask on WhatsApp" reply.

To change what the bot knows, or how it phrases something, just edit the
`KNOWLEDGE_BASE` array (and `FALLBACK_ANSWER` / `GREETING`) at the top of
`script.js` — no other file needs to change. To add a new topic:

```js
{
  id: 'my-topic',
  keywords: ['keyword one', 'keyword two'],
  answer: `Your answer text, **bold** works, and
- bullet points work too`
}
```

## Before you deploy

**Set your WhatsApp number.** In `index.html`, find the `wa-fab` link and
replace the placeholder number in the `href`:
```html
href="https://wa.me/910000000000?text=..."
```
Use the full number in international format, no `+`, no spaces
(e.g. `919876543210`). You can also edit the pre-filled message text
after `?text=`.

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
cd cerevityai-site
vercel
```
Follow the prompts to link/create a project. That's it — it's a static
site, so there's nothing else to configure.

**Option B — GitHub + Vercel dashboard**
1. Push this folder to a GitHub repo.
2. In the Vercel dashboard, click "New Project" and import the repo.
3. No build settings, no environment variables needed.

## Local testing

Just open `index.html` in a browser, or serve the folder with any static
server, e.g.:
```bash
npx serve .
```
