# Project guidance

This repository contains the English-language Burgas Logistics website prototype.

## Local design skills

The user requested the Taste Skill package from https://github.com/Leonxlnx/taste-skill.
Its fourteen skills are copied under `.agents/skills/`, including their supporting
references, libraries, assets and scripts. Select the skill appropriate to the task
and read its `SKILL.md` before applying it. Do not apply all skills together.

- Website art direction: `.agents/skills/design-taste-frontend/SKILL.md`.
- Improving the existing site: `.agents/skills/redesign-existing-projects/SKILL.md`.
- Website image concepts: `.agents/skills/imagegen-frontend-web/SKILL.md`.
- Brand exploration: `.agents/skills/brandkit/SKILL.md`.

Installation provenance and upstream revision are in
`.agents/skills/taste-skill-source.json`; the upstream MIT license is retained.
These are project-local skills, not an account-wide ChatGPT plugin installation.
Preserve the upstream files when making website changes.

Impeccable is also installed at `.agents/skills/impeccable/SKILL.md`, from
pbakaus/impeccable version 4.5.2. Its CLI cache is configured with
`IMPECCABLE_HOME=/workspace/.impeccable-cache` in this environment. Native automatic
hooks are not enabled; use its instructed manual detector when relevant. Read
PRODUCT.md, DESIGN.md and `.impeccable/surfaces/home.md` for the current site.

## User requirements

- Keep the website in English and the office location Burgas, Bulgaria.
- Preserve the full twelve-section homepage, partner strip and footer when changing
  its visual style, unless the user explicitly changes the scope.
- The user wants less visual similarity to Cargov while preserving the originally
  selected style from `design/prototype-3.jpg`. They rejected radical style changes.
  The user subsequently requested execution with Taste Skill and Impeccable.
  The current homepage implements that refinement across every section; see
  `design/redesign-20261015/`. Earlier three-option comparison sets and their ZIP
  are historical explorations, not the current approval state.
- Fictional figures, routes, partners and testimonials are authorized for this
  prototype and must remain clearly labelled as illustrative.
- Preserve working interactions. Enquiry forms currently review and download data
  locally; they do not send a message.
- User-facing cloud file artifacts have failed in this chat. GitHub previews and
  downloads on the `website-prototype` branch have worked.

See README.md for development and verification commands.
