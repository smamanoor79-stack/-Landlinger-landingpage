# Landlinger Landingpage

A modern, responsive landing page built with React, Vite, Tailwind CSS, and Framer Motion — featuring scroll-triggered animations throughout.

## Tech Stack

- **React** — component-based UI
- **Vite** — dev server and build tool
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — scroll and interaction animations

## Sections

- **Navbar** — site navigation
- **Hero** — headline, CTA, and floating stat card over an image
- **Business Success** — value proposition with team highlights and a "Payment Successful" phone mockup
- **Stats** — animated count-up statistics
- **Pricing** — plan comparison cards
- **Testimonials** — customer quotes with photo and highlight cards
- **Newsletter** — email signup with word-by-word text reveal
- **Footer** — site links, contact info, and social links

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    BusinessSuccess.jsx
    Stats.jsx
    Pricing.jsx
    Testimonials.jsx
    Newsletter.jsx
    Footer.jsx
  App.jsx
  App.css
  index.css
  main.jsx
public/
  (images and static assets)
```

## Notes

- Images referenced in components (e.g. `bs1.avif`, `bs2.avif`, `bs3.avif`, testimonial and newsletter background images) should be placed in the `public/` folder and referenced with a leading `/` (e.g. `/bs1.avif`), not `/public/bs1.avif`.
- Animations use Framer Motion's `whileInView` with `viewport={{ once: true }}`, so each section animates in once when scrolled into view and does not replay on re-scroll.

## Live Demo
https://landlinger-landingpage.vercel.app/

## License

This project is private and not licensed for public reuse.
