# Resume For New Agent

You are taking over a static website project in `/run/media/stefano/CRUCIAL/VSCode/Legno`.

## Project Goal

This is no longer a consultant/demo site.

The site has been redesigned into a fake but believable Italian business website for a **regional family-owned timber supplier** serving professionals and companies.

The business positioning is:

- structural timber
- panels
- warehouse stock
- logistics and delivery
- local trust / family heritage

Language is Italian.

## Current Site Structure

- `index.html`: homepage
- `services.html`: services and logistics page
- `styles.css`: shared styling
- `script.js`: shared content/config and behavior

## Brand Direction

Current fake business identity:

- `F.lli Rinaldi Legnami`

The site should feel:

- modern
- attractive
- credible
- industrial but refined
- like a real supplier website, not a portfolio demo

## Content Direction

Homepage should communicate:

- real timber supplier
- available stock
- materials for trade clients
- warehouse capacity
- family business trust
- request-a-quote CTA

Secondary page should communicate:

- delivery and transport
- cutting and preparation
- stock support for professionals
- operations and service reliability

## Important Recent Redesign

The old "I improve your website" concept was removed.

The homepage hero was changed to use this image:

- `images/photo-showcases-well-organized-secure-timber-storage-facility-lumber-holding-yard-situated-wood-warehouse-330971759-1487841874.jpg`

Current hero direction:

- large image-led hero
- text overlaid on top of the image
- shorter copy than before
- business-first messaging

## Recent Problem Found

A real browser screenshot pass showed the hero and some sections were too dependent on animation timing and first paint state.

The page looked too washed out / too faded in screenshots.

Main causes that were identified:

- reveal classes were hiding content too aggressively before JS completed
- hero text contrast over the image needed stronger support
- the hero composition still needs visual tuning after the structural fix

## Recent CSS Fixes Already Applied

These were intended and should be verified in `styles.css`:

1. Stronger hero overlay gradient via `.hero-stage::after`
2. Hero overlay text kept above the gradient with higher `z-index`
3. Added text shadow to hero heading and lead
4. Removed fragile first-paint hidden states for reveal animations
5. Changed reveal behavior so content is visible by default and animated in safely
6. Strengthened the mobile hero gradient

## What To Verify First

Before making new design changes, verify:

1. `styles.css` contains the hero overlay and safer reveal logic
2. `node --check script.js` passes
3. the homepage is visually checked in a browser at multiple sizes

## Visual QA Workflow

Use a real browser pass, not CSS assumptions only.

Suggested checks:

1. small mobile
2. large mobile
3. tablet
4. desktop
5. wide desktop

Focus especially on:

- hero readability
- hero text position and width
- relation between text and image
- whether the hero card helps or hurts the composition
- spacing balance between sections
- mobile menu behavior

## Known Design Tension

The hero still may need refinement even after the recent CSS fixes.

Most likely next hero decisions:

1. remove or reduce the hero info card if it competes with the main message
2. widen or reposition the hero overlay text block
3. further strengthen the left-side gradient behind text
4. reduce headline size slightly if it feels oversized on desktop

## Working Style Requested By User

The user wants:

- visual review before confidently confirming design edits
- responsive behavior checked across resolutions
- modern but believable business design
- less confusion between "service website" and "actual supplier website"

Do not present layout work as finished without a real visual pass if the change is highly visual.

## Priority Next Step

Do a real screenshot/browser pass of the homepage hero and refine it from what is actually rendered.
