# Go Easy Adventure — Car Rental Website

Next.js website for GO EASY ADVENTURE CAR RENTAL L.L.C (Dubai, License No. 1535456).

## Computer par chalana

```bash
npm install
npm run dev
```
Phir browser mein http://localhost:3000 kholein.

## Kya kahan badalna hai

| Kya badalna hai | File |
|---|---|
| Phone, WhatsApp, email, address, timings, Google Maps pin | `data/site.js` |
| Cars, rates, photos | `data/cars.js` |
| FAQs, documents, deposit, age | `data/faqs.js` |
| Colors | `app/globals.css` (sab se upar `:root`) |
| Logo | `public/logo.svg`, `public/logo-white.svg`, `public/logo-mark.svg` |

**Car photo lagana:** photo ko `public/cars/` folder mein daalein (jaise `corolla.jpg`), phir `data/cars.js` mein us car ki `image` line ko `"/cars/corolla.jpg"` kar dein.

Code mein jahan `TODO` likha hai, wo cheezein client se confirm karni hain.

## Vercel par deploy

1. Code GitHub par upload karein.
2. Vercel par **Add New → Project**, repo select karein, phir **Deploy**.
3. Vercel → Project → **Settings → Domains** mein `goeasyadventure.com` add karein.
4. Hostinger → **Domains → DNS** mein Vercel ke bataye hue records lagayein:
   - `A` record: `@` → `76.76.21.21`
   - `CNAME` record: `www` → `cname.vercel-dns.com`
   (Vercel jo values dikhaye, wohi use karein.)
