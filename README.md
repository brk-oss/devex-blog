# devex-blog

Personal blog - notes from the field on developer experience in an agentic world. Plain HTML/CSS, no build step, deployed via GitHub Pages' Actions-based pipeline ([`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)) on every push to `main`.

Live at **https://brk-oss.github.io/devex-blog/**.

Add a post under `posts/`, link it from `index.html`, push to `main` (through a PR - branch protection requires it).

Every post, and every `<h2>` subsection inside a post, should have a stable `id` and a `#` anchor link next to it (see the existing post/list entry for the pattern) - so a specific post or section always has a direct, grabable URL.

&copy; 2026 [Henrique Andrade](https://github.com/thehcma)
