import type { LucideIcon } from 'lucide-react'

/* ------------------------------------------------------------------
   Shared TypeScript interfaces for all static website content.
   Every data file in src/data imports its shape from here.
   ------------------------------------------------------------------ */

export interface NavLink {
  /** Visible label in the navbar */
  label: string
  /** Section id (without the # ) that the link scrolls to */
  href: string
}

export type SocialPlatform = 'linkedin' | 'facebook' | 'instagram' | 'youtube'

export interface SocialLink {
  label: string
  url: string
  platform: SocialPlatform
}

export interface CompanyInfo {
  name: string
  tagline: string
  hero: {
    heading: string
    description: string
    /** Large background photograph for the hero section */
    image: string
    imageAlt: string
  }
  about: {
    eyebrow: string
    heading: string
    paragraphs: string[]
    /** Short pillars shown next to the About copy */
    values: Pillar[]
    images: { src: string; alt: string }[]
  }
  whyChooseUs: Pillar[]
  contact: ContactInfo
  social: SocialLink[]
  footer: {
    description: string
    legalName: string
  }
}

export interface Pillar {
  title: string
  description: string
  icon: LucideIcon
}

export interface ContactInfo {
  /** Display format, e.g. "+91 98765 43210" */
  phoneDisplay: string
  /** Dial format used in tel: links, digits only with country code, e.g. "+919876543210" */
  phoneDial: string
  /** WhatsApp number in international format WITHOUT "+" or spaces, e.g. "919876543210" */
  whatsappNumber: string
  /** Default text that pre-fills the WhatsApp chat */
  whatsappMessage: string
  email: string
  address: {
    line1: string
    line2: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  /** Link opened by "Get directions" */
  googleMapsUrl: string
  /** Google Maps "Embed a map" iframe src. Leave empty to hide the map. */
  googleMapsEmbedUrl: string
  workingHours: { days: string; hours: string }[]
}

export type MachineType = 'CNC Turning' | 'VMC Machining'

export interface Machine {
  id: number
  name: string
  type: MachineType
  brand: string
  model: string
  specifications: string[]
  image: string
  description: string
}

export interface Service {
  id: number
  title: string
  description: string
  icon: LucideIcon
  /** Short bullet points shown on the card */
  highlights: string[]
}

export interface Capability {
  id: number
  title: string
  description: string
  icon: LucideIcon
  items: string[]
}

export interface Industry {
  id: number
  name: string
  description: string
  icon: LucideIcon
}

export type ProductCategory =
  | 'Shafts & Pins'
  | 'Housings & Blocks'
  | 'Flanges & Rings'
  | 'Bushes & Sleeves'
  | 'Brackets & Plates'
  | 'Fasteners & Fittings'

export interface Product {
  id: number
  name: string
  category: ProductCategory
  material: string
  process: string
  description: string
  image: string
}
