# Architecture Research: IEEE Student Branch Portfolio Website

## Component Boundaries

- `Site Shell`: global header, footer, nav, theme tokens
- `Content Pages`: about, leadership, council, members, societies, alumni, contact
- `Portfolio Pages`: events list, event detail, gallery, achievements
- `Social Proof`: testimonials/feedback and alumni highlights
- `Data Layer`: structured JSON/Markdown content collections
- `Admin Update Path (v1-light)`: file-based content updates through repository workflow

## Data Flow

1. Content maintainers update structured content files.
2. Build pipeline validates content shape.
3. Static pages are generated from content collections.
4. Visitors consume fast pre-rendered pages.
5. Feedback/contact forms submit to backend endpoint/email integration.

## Suggested Build Order

1. Design system + shared layout
2. About + leadership + council + members
3. Societies and alumni sections
4. Event portfolio and media structure
5. Testimonials/feedback and contact form
6. SEO, accessibility, QA, launch preparation
