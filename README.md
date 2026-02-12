# Valentine Cats Page

An immersive, cat-themed Valentine experience built with Next.js 14 and the App Router. The page stages a long-distance dinner-and-a-movie date for Valentine's day, blending floating heart animations, curated GIF art, and a tasting-menu style itinerary.

## Tech Stack
- [Next.js](https://nextjs.org/) with the App Router
- TypeScript + React Server Components
- `next/font` for loading Google Playfair Display
- Tailwind-like utility classes (via the default global CSS) plus scoped `style jsx` blocks for custom animation work

## Run Locally
```bash
npm install
npm run dev
```
Visit `http://localhost:3000` in your browser. The page auto-refreshes on save.

## Customization Guide
- **Update itinerary copy** in `app/page.tsx` to adjust times, menu names, or tone.
- **Swap GIFs** by changing the `src` attributes in the hero frame, floating rose companion, or footer.
- **Adjust ambience** by editing the `.menu-background`, `.heart`, and `.menu-shell` styles inside the same file.
- **Fonts** – tweak the `Playfair_Display` config at the top of `app/page.tsx` to load additional weights.

## Deployment
Any static-friendly host will work. For the quickest path, run `npm run build` and deploy the `.next` output or push to Vercel for zero-config hosting.

## Credits
- Cat GIFs sourced from Tenor and Giphy (see inline URLs in `app/page.tsx`).
- Design + copy crafted with ❤️ with Copilot
