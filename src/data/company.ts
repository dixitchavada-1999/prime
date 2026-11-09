import { Award, Clock, Cog, Crosshair, ShieldCheck, Target, Users, Wrench } from 'lucide-react'
import type { CompanyInfo, NavLink } from '../types'

/* ==================================================================
   COMPANY CONTENT
   ------------------------------------------------------------------
   Everything in [square brackets] is a PLACEHOLDER. Replace it with
   the real company details before going live. Images are royalty-free
   Unsplash photographs used as stand-ins; swap them for your own
   factory photography (put files in /public/images and reference
   them as "/images/your-photo.jpg").
   ================================================================== */

export const navLinks: NavLink[] = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Capabilities', href: 'capabilities' },
  { label: 'Machines', href: 'machines' },
  { label: 'Services', href: 'services' },
  { label: 'Industries', href: 'industries' },
  { label: 'Products', href: 'products' },
  { label: 'Why Us', href: 'why-choose-us' },
  { label: 'Contact', href: 'contact' },
]

export const company: CompanyInfo = {
  name: 'Prime Engineering',
  tagline: 'Precision Engineering. Excellence in Manufacturing.',

  hero: {
    heading: 'Advanced CNC & VMC Machining Solutions',
    description:
      'Delivering precision-engineered components through advanced CNC and VMC machining technology, with a commitment to quality, accuracy and reliability.',
    image:
      'https://images.unsplash.com/photo-1740209475472-aa7d280f7452?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'VMC machining centre cutting a metal component with coolant',
  },

  about: {
    eyebrow: 'About Prime Engineering',
    heading: 'Precision components, built on process discipline',
    paragraphs: [
      'Prime Engineering is a CNC and VMC machining company focused on producing precision-engineered components for industrial customers. Our workshop combines modern CNC turning centres and vertical machining centres with experienced operators who understand what it takes to hold tight tolerances consistently.',
      'From one-off prototypes to repeat batch production, every job follows the same disciplined path: drawing review, process planning, machining, in-process inspection and final verification before dispatch.',
      // PLACEHOLDER: add a short note on your location, founding story or team here.
      '[Add a short paragraph about your company history, location and team.]',
    ],
    values: [
      {
        title: 'Quality',
        description: 'Every component is inspected against the drawing before it leaves the shop floor.',
        icon: ShieldCheck,
      },
      {
        title: 'Accuracy',
        description: 'Modern CNC and VMC equipment maintained for repeatable, precise results.',
        icon: Crosshair,
      },
      {
        title: 'Reliability',
        description: 'Clear communication and realistic delivery commitments on every order.',
        icon: Clock,
      },
    ],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1787039467622-ddec5c24320c?auto=format&fit=crop&w=1000&q=80',
        alt: 'CNC machines inside a bright industrial manufacturing workshop',
      },
      {
        src: 'https://images.unsplash.com/photo-1769147339214-076740872485?auto=format&fit=crop&w=800&q=80',
        alt: 'Two precision-machined metal parts resting on engineering drawings',
      },
    ],
  },

  whyChooseUs: [
    {
      title: 'Precision-Focused Machining',
      description:
        'CNC turning and VMC milling processes planned around the tolerances and finishes your drawings call for.',
      icon: Target,
    },
    {
      title: 'Quality at Every Stage',
      description:
        'Drawing review, in-process checks and final inspection are built into how every job runs.',
      icon: Award,
    },
    {
      title: 'Modern Equipment',
      description:
        'Well-maintained CNC and VMC machines, tooling and measuring instruments for consistent output.',
      icon: Cog,
    },
    {
      title: 'Experienced Team',
      description:
        'Skilled machinists and programmers who understand materials, fixturing and tool strategy.',
      icon: Users,
    },
    {
      title: 'Flexible Volumes',
      description:
        'From a single prototype to repeat batch orders, with the same attention to detail.',
      icon: Wrench,
    },
    {
      title: 'On-Time Delivery',
      description:
        'Transparent scheduling and proactive updates so you can plan your own production with confidence.',
      icon: Clock,
    },
  ],

  contact: {
    // PLACEHOLDERS - replace with real contact details
    phoneDisplay: '+91 00000 00000',
    phoneDial: '+910000000000',
    whatsappNumber: '910000000000',
    whatsappMessage: 'Hello Prime Engineering, I would like to enquire about CNC / VMC machining services.',
    email: 'info@primeengineering.example',
    address: {
      line1: '[Plot / Unit Number, Industrial Estate]',
      line2: '[Street / Area]',
      city: '[City]',
      state: '[State]',
      postalCode: '[Postal Code]',
      country: 'India',
    },
    googleMapsUrl: 'https://maps.google.com/?q=Prime+Engineering',
    // Paste the "src" value from Google Maps > Share > Embed a map. Leave "" to hide the map.
    googleMapsEmbedUrl: '',
    workingHours: [
      { days: 'Monday - Saturday', hours: '9:00 AM - 6:00 PM' },
      { days: 'Sunday', hours: 'Closed' },
    ],
  },

  // PLACEHOLDER URLs - replace with your profile links, or remove entries you don't use.
  social: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/', platform: 'linkedin' },
    { label: 'Facebook', url: 'https://www.facebook.com/', platform: 'facebook' },
    { label: 'Instagram', url: 'https://www.instagram.com/', platform: 'instagram' },
    { label: 'YouTube', url: 'https://www.youtube.com/', platform: 'youtube' },
  ],

  footer: {
    description:
      'Precision CNC turning and VMC milling for industrial customers who need accurate, reliable components delivered on time.',
    legalName: 'Prime Engineering',
  },
}
