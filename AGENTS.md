# Agent instructions for devex-blog

Plain HTML/CSS/JS, no build step, no framework. Keep it that way.

## Workflow

- `main` has branch protection - every change goes through a PR, never a direct push.
- Deploy is automatic: GitHub Pages' Actions-based pipeline (`.github/workflows/deploy-pages.yml`) runs on every push to `main`.
- Keep the repo's "About" section (description + website) in sync with reality when either changes.

## Post structure

- Prefer one consolidated post per event/topic over many fragmented posts (e.g. one "Debrief from the field" dispatch with numbered subsections, not a separate post per subsection).
- Every post gets a `<p class="post-meta">` line: "Filed by `<a href="https://github.com/thehcma">@thehcma</a>`" plus a `<time>` with a real timestamp.
- Every post, and every `<h2>` subsection inside a post, needs a stable `id` and a `<a class="anchor" href="#id" aria-label="Copy direct link to this ...">🔗</a>` right after it - see any existing post for the exact pattern. `script.js` makes clicking it copy the full URL to the clipboard while still updating the hash; don't reinvent this per-page, it's one shared script included on every page (`<script src="script.js" defer>` from the root, `../script.js` from `posts/`).
- Landing page (`index.html`) list entries follow the same id + anchor pattern as post subsections.

## Content rules

- Write original summaries in your own words. Never reproduce a transcript, article, or other source material verbatim at length - quote minimally if at all, and always link the original/full source.
- Never guess or fabricate a URL. Hyperlink a product, announcement, or person only once you've found a verified page for it (official site/docs/changelog first, reputable secondary coverage if that's genuinely all that exists - say so when it's secondary). If nothing verifiable turns up, leave it unlinked and say why, or ask.
- WebSearch won't run name-based people-lookup queries by policy - don't try to route around that for a person's LinkedIn/social profile. Ask the user for the link instead.
- Tone is informal and first-person, matching the author's own voice - contractions, direct, not corporate copy.

## Images

- Only the author's own photos. Resize/compress before committing - `sips -Z 1200` (or 1600 for a hero-ish shot) `-s formatOptions 75` gets multi-MB phone photos down to a few hundred KB.
- `.post-photo`: a subject photo (e.g. a speaker on stage) - 50% width, centered, subtle shadow.
- `.post-photo-small`: a smaller, lighter aside photo - 25% width, centered, shadow. Add `.post-photo-tilt` for a playful polaroid-style rotation on a fun/joke aside. Pair with a `<p class="photo-caption">` for the joke/caption text.

## Attribution and disclaimers

- Every page's footer includes `&copy; 2026 <a href="https://github.com/thehcma">Henrique Andrade</a>`.
- The landing page carries a `.disclaimer` line under the tagline: opinions are personal, not the employer's. Don't remove it.
- When naming a real person, link their LinkedIn if you have a verified URL for it (ask rather than guess - see Content rules above).
