# brianharward.github.io

Personal site for **Brian Harward, PhD** — Research Scientist, Consultant, Ethicist.

Live at: https://brianharward.com (custom domain) and https://brianharward.github.io

## Editing the site

This site is intentionally simple — plain HTML + one CSS file. No build step, no framework.

\`\`\`
index.html         Main landing page (hero, services, LinkedIn reviews, Calendly CTA)
consulting.html    Consulting page
research.html      Research Science page
ethics.html        Ethics page
references.html    References page
styles.css         All styling (edit CSS variables at the top to retheme)
CNAME              Custom domain (brianharward.com)
\`\`\`

### Change theme colors / fonts
Open \`styles.css\` and edit the variables in the \`:root\` block at the top.

### Replace placeholder images
Search for \`placehold.co\` and swap with real image URLs (or upload images to this repo and reference them locally, e.g. \`headshot.jpg\`).

### Update reviews / references
Edit the \`.quote\` blocks in \`index.html\` and the \`.ref-item\` blocks in \`references.html\`.

### Update Calendly / LinkedIn links
Both are linked in every page. Search for \`calendly.com\` or \`linkedin.com\` to find and replace.

## Deployment

GitHub Pages automatically deploys from the \`main\` branch. Once the custom domain DNS is configured (CNAME record pointing `brianharward.com` to `ednaybers.github.io`), the site will be live at https://brianharward.com.
