# Landinger Landingpage

A modern, responsive landing page built with Next.js (App Router), featuring scroll-triggered animations and real backend functionality: a working contact form, newsletter signup, and Stripe checkout.

**Live Demo:** https://landlinger-landingpage.vercel.app/

## Tech Stack

- **Next.js** (App Router) — framework, routing, and API routes
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — scroll and interaction animations
- **MongoDB** — stores contact and newsletter submissions
- **Nodemailer** — sends contact form emails
- **Stripe** — checkout sessions for the Pricing plans

## Sections

- **Navbar** — site navigation
- **Hero** — headline, CTA, and floating stat card over an image
- **Business Success** — value proposition with team highlights and a "Payment Successful" phone mockup
- **Stats** — animated count-up statistics
- **Pricing** — plan comparison cards, connected to Stripe Checkout
- **Testimonials** — customer quotes with photo and highlight cards
- **Newsletter** — email signup with word-by-word text reveal
- **Footer** — site links, contact info, and social links

## Features

- **Contact form** — submissions are emailed via Nodemailer and saved to MongoDB
- **Newsletter signup** — emails are saved to MongoDB
- **Pricing checkout** — "Get Started" buttons create a Stripe Checkout session and redirect the user to a real payment page

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
Create a `.env.local` file in the project root:
```
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Notes:
- `EMAIL_PASS` must be a Gmail **App Password**, not your regular password (Google Account → Security → 2-Step Verification → App Passwords).
- `STRIPE_SECRET_KEY` should be a **test mode** key from the Stripe Dashboard (Developers → API keys), starting with `sk_test_`.
- `MONGODB_URI` — get this from MongoDB Atlas or any Mongo host. Contact form and newsletter submissions are saved here.

### 3. Run the dev server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

Test the contact form (should send a real email) and a "Get Started" button on Pricing (should redirect to a real Stripe test-mode checkout — use test card `4242 4242 4242 4242`, any future expiry, any CVC).

### 4. Build for production
```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push this project to a GitHub repo.
2. Import it into Vercel.
3. In **Vercel → Project → Settings → Environment Variables**, add the same 4 variables used in `.env.local` (`MONGODB_URI`, `EMAIL_USER`, `EMAIL_PASS`, `STRIPE_SECRET_KEY`). `NEXT_PUBLIC_BASE_URL` isn't required in production — the checkout route falls back to the request's origin automatically.
4. Deploy — frontend and API routes ship together as a single project.

## Project Structure
```
src/
  app/
    api/
      contact/route.js
      checkout/route.js
      newsletter/route.js
    page.js
    layout.js
  components/
    Navbar.jsx
    Hero.jsx
    BusinessSuccess.jsx
    Stats.jsx
    Pricing.jsx
    Testimonials.jsx
    Newsletter.jsx
    Footer.jsx
  lib/
    db.js
    email.js
  models/
    Contact.js
    Newsletter.js
public/
  (images and static assets)
```

## Adjusting Plan Prices
Open `src/app/api/checkout/route.js` and edit the `PLANS` object — change `amount` (in cents) or `interval` (`"month"` / `"year"`) for either plan.

## Notes
- Images referenced in components (e.g. `bs1.avif`, `bs2.avif`, `bs3.avif`, testimonial and newsletter backgrounds) live in `public/` and are referenced with a leading `/` (e.g. `/bs1.avif`), not `/public/bs1.avif`.
- Animations use Framer Motion's `whileInView` with `viewport={{ once: true }}`, so each section animates in once when scrolled into view and doesn't replay on re-scroll.

## License
This project is private and not licensed for public reuse.
