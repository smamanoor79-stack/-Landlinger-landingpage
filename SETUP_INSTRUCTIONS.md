# Landinger — Next.js Setup Guide

## 1. Install dependencies
```
cd landinger-nextjs
npm install
```

## 2. Create your `.env.local` file
Copy `.env.local.example` to `.env.local` and fill in your real values:
```
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Notes:
- `EMAIL_PASS` should be a Gmail **App Password**, not your normal Gmail password
  (Google Account → Security → 2-Step Verification → App Passwords).
- `STRIPE_SECRET_KEY` should be your **test mode** secret key from the Stripe Dashboard
  (Developers → API keys). It starts with `sk_test_`.
- `MONGODB_URI` — get this from MongoDB Atlas (or any Mongo host). Contact form
  submissions get saved here in addition to the email being sent.

## 3. Run locally
```
npm run dev
```
Open http://localhost:3000

Test the contact form — it should send you a real email.
Test a "Get Started" button on Pricing — it should redirect to a real Stripe
test-mode checkout page. Use Stripe's test card `4242 4242 4242 4242`,
any future expiry date, any CVC.

## 4. Deploy to Vercel
- Push this project to a GitHub repo
- Import it into Vercel
- In Vercel → Project → Settings → Environment Variables, add the same
  4 variables from `.env.local` (MONGODB_URI, EMAIL_USER, EMAIL_PASS, STRIPE_SECRET_KEY).
  `NEXT_PUBLIC_BASE_URL` isn't required in production (the checkout route
  falls back to the request's origin automatically).
- Deploy — everything (frontend + API routes) ships as a single project/deployment.

## What changed vs. the old Vite project
- `src/components/*.jsx` — copied from the old project, each now starts with
  `"use client"` (required since they use hooks/framer-motion in the App Router).
- `src/components/Contact.jsx` — now calls `fetch("/api/contact")` instead of
  just `console.log`-ing the form data.
- `src/components/Pricing.jsx` — both "Get Started" buttons now call
  `fetch("/api/checkout")` and redirect to the real Stripe Checkout page.
- `src/app/api/contact/route.js` — sends the email via Nodemailer and saves
  the submission to MongoDB.
- `src/app/api/checkout/route.js` — creates a Stripe Checkout Session
  (Basic plan $19/mo, Custom plan $49/mo — adjust the amounts in this file
  as needed).
- `src/lib/db.js`, `src/lib/email.js`, `src/models/Contact.js` — backend helpers.

## Adjusting plan prices
Open `src/app/api/checkout/route.js` and edit the `PLANS` object — change the
`amount` (in cents) or `interval` ("month" / "year") for either plan.
