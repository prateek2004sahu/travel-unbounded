# Travel Unbounded

A travel company website built for the Travel Unbounded Full Stack Developer
assignment (Phase 1). Showcases destination packages, tells the company
story, and captures travel enquiries through a booking form that is
validated, persisted to MongoDB, and confirmed back to the user.

## Overview

- **Home** — hero banner, India destinations grid, International
  destinations grid, CTA.
- **About** — company story, office locations (Bengaluru, Kochi, Nairobi),
  "Why choose us" section.
- **Contact** — booking enquiry form with client + server-side validation,
  loading state, and a proper success/error UI (no `alert()`).

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Backend:** Next.js API Routes (`app/api/enquiry/route.js`)
- **Database:** MongoDB Atlas, via Mongoose
- **Deployment target:** Vercel (frontend + API routes) + MongoDB Atlas (DB)

## Project Structure

```
travel-unbounded/
├── app/
│   ├── layout.js            # Root layout (Navbar + Footer + metadata)
│   ├── page.js               # Home page
│   ├── about/page.js         # About page
│   ├── contact/page.js       # Contact / enquiry page
│   └── api/enquiry/route.js  # POST + GET /api/enquiry
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── DestinationCard.js
│   ├── DestinationSection.js
│   └── BookingForm.js
├── data/
│   └── destinations.js       # Static/dummy destination data
├── lib/
│   └── mongodb.js            # Cached Mongoose connection helper
├── models/
│   └── Enquiry.js            # Mongoose schema for enquiries
├── .env.example
└── README.md
```

## Local Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env.local` file in the project root (copy `.env.example`) and
   fill in your own MongoDB Atlas connection string:

   ```bash
   cp .env.example .env.local
   ```

   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/travel-unbounded?retryWrites=true&w=majority
   ```

3. Run the dev server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable       | Description                                      |
| -------------- | ------------------------------------------------- |
| `MONGODB_URI`  | MongoDB Atlas (or any MongoDB) connection string.  |

`.env.local` is git-ignored — never commit real credentials. `.env.example`
contains a placeholder for reference / CI setup.

## API

### `POST /api/enquiry`

Accepts a JSON body:

```json
{
  "fullName": "Aditi Sharma",
  "countryCode": "+91",
  "contactNumber": "9876543210",
  "email": "aditi@example.com",
  "dateOfTravel": "2026-12-20",
  "numberOfPeople": 2,
  "hotelCategory": "Deluxe",
  "numberOfChildren": 1
}
```

- Validates every field server-side (required fields, email format, phone
  format, future date, `numberOfPeople >= 1`, `numberOfChildren >= 0`,
  `hotelCategory` in `Standard | Deluxe | Luxury`).
- Returns `201` + `{ success: true, message, id }` on success.
- Returns `400` + `{ success: false, message, errors }` on validation
  failure.
- Returns `500` + `{ success: false, message }` on a database/server error.

### `GET /api/enquiry` (bonus)

Returns all stored enquiries, most recent first. Not wired to any UI in this
phase — a nice hook for a future `/admin` page.

## Deployment

1. Push this repository to GitHub.
2. Import the repo into [Vercel](https://vercel.com/new).
3. Add the `MONGODB_URI` environment variable in the Vercel project
   settings (Project → Settings → Environment Variables).
4. Deploy. Vercel builds and serves both the frontend and the
   `/api/enquiry` route from the same deployment.
5. On MongoDB Atlas, make sure Network Access allows connections from
   anywhere (`0.0.0.0/0`) or from Vercel's IP ranges, since Vercel functions
   don't have a fixed outbound IP on the free tier.
6. Verify end-to-end: submit the form on the live URL and confirm a new
   document appears in the Atlas collection.

## Assumptions / Features Skipped

- Used the **App Router** (not Pages Router).
- Destination and pricing data is static/dummy, stored in
  `data/destinations.js`, as explicitly allowed by the assignment.
- Destination images are hotlinked from Unsplash for placeholder purposes.
- No destination-details page was built — each card links straight to the
  Contact/Enquiry page, since the assignment doesn't require a details page.
- Phone number validation accepts 7–15 digits after the selected country
  code, since exact per-country phone formats were out of scope.
- No authentication, admin dashboard, payment gateway, or booking engine —
  explicitly out of scope for Phase 1 per the assignment brief.
- The `GET /api/enquiry` bonus endpoint is implemented but not surfaced in
  any UI, since an admin page was explicitly optional.

## Live Demo

https://travel-unbounded-beige.vercel.app/

## GitHub

https://github.com/prateek2004sahu/travel-unbounded
