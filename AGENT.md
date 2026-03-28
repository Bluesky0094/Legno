# AGENT.md

This file gives Codex and other coding agents stable project context for this repository, independent of whether the workspace is opened on Windows or Linux.

## Project Identity

- Project name: `Legno`
- Type: static multi-page website
- Primary language: Italian
- Domain focus: presentation website for a timber and wood-supply business
- Current tone: practical, concrete, B2B, operational rather than corporate

## Stack

- HTML for page structure
- CSS for styling in `assets/css/styles.css`
- Vanilla JavaScript for behavior in `assets/js/main.js`
- Shared content and routing are data-driven
- No framework, bundler, or backend is assumed unless added later

## Key Files

- `index.html`: homepage entry point
- `assets/js/main.js`: shared site bootstrapping, content hydration, routes, component injection, motion, mobile menu
- `assets/css/styles.css`: global design system, layout, responsive behavior, motion
- `components/*.html`: reusable header/footer fragments loaded at runtime
- `data/content.json`: shared structured content, routes, contact data, navigation, list content
- `pages/*.html`: internal pages that reuse the same shared assets and content model

## How The Site Works

- Pages set `data-page` and `data-root` on `<body>`.
- JavaScript resolves relative paths through `data-root`, so the same code works for root pages and nested pages.
- Shared components are fetched from `components/`.
- Shared content is fetched from `data/content.json`.
- Route links use `data-route` and are resolved centrally in JavaScript.
- Contact values can be injected with `data-field` and `data-contact-link`.

## Cross-Platform Guidance

Agents should treat this repository as portable between Windows and Linux.

- Do not hardcode OS-specific absolute paths in source files.
- Prefer forward-slash relative paths in site code and documentation.
- Assume the repo may live under different root directories on different machines.
- When referring to local commands, prefer cross-platform-safe guidance where possible.
- If an OS-specific command is needed, provide both Windows PowerShell and Linux shell variants when relevant.

## Editing Rules For Agents

- Preserve the current visual language unless asked for a redesign.
- Keep the site in Italian unless the user explicitly requests another language.
- Maintain the practical commercial tone already used in the copy.
- Prefer small, targeted edits over broad rewrites.
- Reuse the existing `data-*` driven architecture instead of introducing duplicate hardcoded content.
- Keep the website static unless the user explicitly asks for a framework or backend migration.
- Respect responsive behavior and reduced-motion support when editing UI.

## Preferred Working Assumptions

- The repo may be edited from both Windows and Linux during its lifetime.
- File naming should remain simple and portable.
- Text files should use UTF-8 encoding when possible.
- If character-encoding issues appear, fix them explicitly rather than working around corrupted text.

## When Updating Content

- Business-facing copy should stay specific and useful, not generic.
- Calls to action should support direct contact, quotes, logistics, and operational clarity.
- New sections should fit the existing hierarchy and component approach.

## If Context Is Missing

If an agent is unsure about project intent, default to these assumptions:

- This is a static marketing/business website.
- The current implementation style is intentional and should be extended rather than replaced.
- Cross-page consistency matters more than one-off page customization.
- Simplicity is preferred over adding tooling.
