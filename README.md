# Prime Engineering – CNC & VMC Machining Website

A premium, fully responsive single-page static website for **Prime Engineering**, built with React, TypeScript, Vite, Tailwind CSS, Lucide React and Framer Motion.

There is no backend, database, API or CMS. All content lives in editable TypeScript data files.

## Getting started

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # type-check and create the production build in /dist
npm run preview   # serve the production build locally
```

## Editing content

All text, images and contact details come from `src/data`:

| File                       | What it controls                                                                 |
| -------------------------- | -------------------------------------------------------------------------------- |
| `src/data/company.ts`      | Navigation links, hero copy, About section, Why Choose Us, contact details, social links, footer |
| `src/data/machines.ts`     | Machine cards (name, type, brand, model, specifications, image, description)      |
| `src/data/services.ts`     | Service cards (title, description, icon, highlights)                             |
| `src/data/products.ts`     | Product gallery items and categories                                             |
| `src/data/industries.ts`   | Industry cards                                                                   |
| `src/data/capabilities.ts` | Capability cards (materials, processes, size and tolerance, inspection)          |

Anything written in `[square brackets]` is a placeholder. Replace it with real information before going live. Machine brands, models, specifications and tolerances have intentionally **not** been invented; fill them in from your own equipment list.

The TypeScript interfaces for every data structure are in `src/types/index.ts`.

### Images

Image URLs currently point to royalty-free Unsplash photographs used as stand-ins. To use your own photography:

1. Put the files in `public/images/`.
2. Reference them as `/images/your-file.jpg` in the data files.

If an image fails to load, a branded placeholder (`public/images/placeholder.svg`) is shown automatically.

### Contact details

In `src/data/company.ts` under `contact`:

- `phoneDisplay` / `phoneDial` – shown number and the `tel:` link value.
- `whatsappNumber` – international format without `+` or spaces (e.g. `919876543210`).
- `email`, `address`, `workingHours`.
- `googleMapsUrl` – link for "Get directions".
- `googleMapsEmbedUrl` – paste the `src` from Google Maps > Share > Embed a map to show a map; leave empty to hide it.

### Contact form

The form validates input on the frontend only. Because there is no backend, it does not send or store anything. After validation it prepares the enquiry and offers two delivery options: open WhatsApp with the message pre-filled, or open the visitor's email client with the subject and body pre-filled. If you later connect a form service, replace the `onSubmit` handler in `src/components/Contact.tsx`.

## Project structure

```
src/
  components/        One component per section + Navbar, Footer, FloatingActions
    ui/              Reusable building blocks (Button, Reveal, SectionHeading, LazyImage, Logo, SocialIcon)
  data/              Editable static content
  hooks/             useActiveSection (nav highlighting), useScrolled
  lib/               scroll helpers, WhatsApp / mailto link builders
  types/             TypeScript interfaces for all data
  App.tsx            Assembles all sections
  index.css          Tailwind import + brand design tokens
public/
  favicon.svg
  images/placeholder.svg
```

## SEO

Page title, meta description, Open Graph and Twitter tags are in `index.html`. Update the canonical URL and `og:url` to your live domain and replace the `og:image` with an image hosted on your domain.
