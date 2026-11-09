import type { Machine } from '../types'

/* ==================================================================
   OUR MACHINES
   ------------------------------------------------------------------
   Sample machine cards. Brand, model and every specification below
   is a PLACEHOLDER in [square brackets]. Replace with the actual
   machine details from your shop floor. Add or remove entries freely;
   the section renders whatever is in this array.
   ================================================================== */

export const machines: Machine[] = [
  {
    id: 1,
    name: 'CNC Turning Centre',
    type: 'CNC Turning',
    brand: '[Machine Brand]',
    model: '[Model Number]',
    specifications: [
      'Chuck size: [e.g. 8 inch]',
      'Max turning diameter: [e.g. 300 mm]',
      'Max turning length: [e.g. 500 mm]',
      'Spindle speed: [e.g. 4000 rpm]',
      'Turret stations: [e.g. 8]',
      'Controller: [Controller name]',
    ],
    image:
      'https://images.unsplash.com/photo-1727292485858-588c7652ad69?auto=format&fit=crop&w=1000&q=80',
    description:
      'Slant-bed CNC turning centre for shafts, bushes, flanges and other round components in steel, stainless steel, aluminium and brass.',
  },
  {
    id: 2,
    name: 'CNC Lathe (Bar Work)',
    type: 'CNC Turning',
    brand: '[Machine Brand]',
    model: '[Model Number]',
    specifications: [
      'Bar capacity: [e.g. 42 mm]',
      'Chuck size: [e.g. 6 inch]',
      'Max turning length: [e.g. 350 mm]',
      'Spindle speed: [e.g. 5000 rpm]',
      'Controller: [Controller name]',
    ],
    image:
      'https://images.unsplash.com/photo-1689942007817-679c21614b25?auto=format&fit=crop&w=1000&q=80',
    description:
      'Configured for repeat batch production of pins, studs, fittings and small turned parts directly from bar stock.',
  },
  {
    id: 3,
    name: 'CNC Lathe (Heavy Duty)',
    type: 'CNC Turning',
    brand: '[Machine Brand]',
    model: '[Model Number]',
    specifications: [
      'Swing over bed: [e.g. 500 mm]',
      'Max turning length: [e.g. 1000 mm]',
      'Chuck size: [e.g. 12 inch]',
      'Spindle power: [e.g. 15 kW]',
      'Controller: [Controller name]',
    ],
    image:
      'https://images.unsplash.com/photo-1666634157070-6fd830fb5672?auto=format&fit=crop&w=1000&q=80',
    description:
      'Larger-capacity turning for long shafts, heavy flanges and components that need rigid clamping and strong cuts.',
  },
  {
    id: 4,
    name: 'Vertical Machining Centre',
    type: 'VMC Machining',
    brand: '[Machine Brand]',
    model: '[Model Number]',
    specifications: [
      'Table size: [e.g. 800 x 400 mm]',
      'Travel X / Y / Z: [e.g. 600 / 400 / 450 mm]',
      'Spindle speed: [e.g. 8000 rpm]',
      'Tool magazine: [e.g. 20 tools]',
      'Controller: [Controller name]',
    ],
    image:
      'https://images.unsplash.com/photo-1713371398485-7bde1bde9def?auto=format&fit=crop&w=1000&q=80',
    description:
      '3-axis vertical machining centre for housings, brackets, plates and prismatic parts requiring milling, drilling, boring and tapping in one setup.',
  },
  {
    id: 5,
    name: 'VMC (Large Table)',
    type: 'VMC Machining',
    brand: '[Machine Brand]',
    model: '[Model Number]',
    specifications: [
      'Table size: [e.g. 1200 x 600 mm]',
      'Travel X / Y / Z: [e.g. 1000 / 600 / 600 mm]',
      'Spindle speed: [e.g. 10000 rpm]',
      'Tool magazine: [e.g. 24 tools]',
      'Controller: [Controller name]',
    ],
    image:
      'https://images.unsplash.com/photo-1652888510609-ed2d2ad64d6b?auto=format&fit=crop&w=1000&q=80',
    description:
      'Larger work envelope for bigger plates, blocks and multi-part fixtures, allowing several components to be machined per cycle.',
  },
  {
    id: 6,
    name: 'VMC (High Speed)',
    type: 'VMC Machining',
    brand: '[Machine Brand]',
    model: '[Model Number]',
    specifications: [
      'Table size: [e.g. 600 x 400 mm]',
      'Travel X / Y / Z: [e.g. 500 / 400 / 400 mm]',
      'Spindle speed: [e.g. 12000 rpm]',
      'Rapid traverse: [e.g. 36 m/min]',
      'Controller: [Controller name]',
    ],
    image:
      'https://images.unsplash.com/photo-1713371398484-cc4e4f6a262a?auto=format&fit=crop&w=1000&q=80',
    description:
      'Higher spindle speeds suited to aluminium components, fine finishing passes and detailed profile milling.',
  },
]
