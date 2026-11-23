# AppForge

**A visual, drag-and-drop app editor for small and medium-sized businesses.** AppForge helps SME owners create a polished, branded mobile app without writing code or hiring a development team.

## Why AppForge?

Small businesses need a simple way to showcase what they offer, keep customers informed, and make it easy to get in touch or place an order. AppForge brings those essentials into one customer-facing app that owners can build and update themselves.

The editor is designed for busy, non-technical business owners. Start with a useful layout, arrange ready-made blocks on a live mobile canvas, customize the content and brand, and publish when everything looks right.

## Build an app in four steps

1. **Start with your business** — Choose a starting layout for a shop, restaurant, salon, or service business.
2. **Arrange your content** — Add and reorder blocks such as a welcome banner, products, services, opening hours, reviews, and contact details.
3. **Customize the details** — Update copy, images, colors, and links. See changes in the mobile preview as you work.
4. **Preview and publish** — Review the customer experience, publish your app, and return whenever your business needs an update.

## The editor workspace

AppForge brings the key tools together in one visual workspace:

- **Pages and block library:** Navigate app pages and find reusable content blocks.
- **Live canvas:** Select and arrange app sections while viewing a realistic mobile screen.
- **Properties panel:** Edit the selected block’s content, appearance, layout, and visibility.
- **Preview and publishing controls:** Check the customer-facing experience and understand whether changes are saved or published.

The editor should feel approachable from the first visit: use plain language, sensible defaults, clear selection states, and helpful guidance. Drag-and-drop is complemented by accessible controls for adding and reordering blocks, so the editor remains usable without a mouse.

## Product principles

- **No coding required:** Make common tasks understandable to owners with no technical background.
- **Show, don’t guess:** Keep the mobile preview close to the editing controls.
- **Help owners get started:** Use practical templates and reusable blocks rather than a blank page.
- **Focus on business essentials:** Make products, services, hours, location, and customer contact easy to manage.
- **Work across devices:** Keep the editor responsive and the published experience mobile-first.
- **Make changes feel safe:** Communicate draft, saved, and published states clearly.

## First-release scope

- Business templates and basic app identity setup
- A mobile-first, single-page editor with add, select, edit, reorder, and remove actions
- Starter blocks for business information, images, products or services, and contact details
- A live preview and responsive editor layout
- Draft saving and a clear publish flow

## Technology

This project uses Next.js, React, TypeScript, and Tailwind CSS, with shadcn-style UI components and Radix primitives where appropriate. Keep the app’s ordered blocks as the source of truth so the canvas, properties panel, preview, and saved draft stay in sync.

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project scripts

- `npm run dev` — Start the local development server.
- `npm run build` — Create a production build.
- `npm run start` — Serve the production build.
- `npm run lint` — Run the configured lint command.
- `npm run format` — Format supported source and documentation files.
