import type { Product, ProductCategory } from '../types'

/* ==================================================================
   PRODUCTS GALLERY
   ------------------------------------------------------------------
   Sample products with royalty-free stand-in photographs. Replace
   the image URLs with photos of your own components and edit the
   names, materials and processes to match what you manufacture.
   Categories must match the ProductCategory type in src/types.
   ================================================================== */

export const productCategories: ProductCategory[] = [
  'Shafts & Pins',
  'Housings & Blocks',
  'Flanges & Rings',
  'Bushes & Sleeves',
  'Brackets & Plates',
  'Fasteners & Fittings',
]

export const products: Product[] = [
  {
    id: 1,
    name: 'Precision Stepped Shaft',
    category: 'Shafts & Pins',
    material: 'EN8 / EN19 Alloy Steel',
    process: 'CNC Turning, Grooving, Threading',
    description:
      'Multi-diameter shaft with keyway and threaded end, turned to drawing with controlled concentricity.',
    image:
      'https://images.unsplash.com/photo-1758873263428-f4b2edb45fe1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Hardened Dowel Pins',
    category: 'Shafts & Pins',
    material: 'Alloy Steel (Hardened)',
    process: 'CNC Turning, Chamfering',
    description:
      'Batch-produced locating pins with chamfered ends, suitable for fixtures, dies and assemblies.',
    image:
      'https://images.unsplash.com/photo-1758873263528-6dbd0422cf84?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Machined Aluminium Housing',
    category: 'Housings & Blocks',
    material: 'Aluminium 6061',
    process: 'VMC Milling, Boring, Tapping',
    description:
      'Multi-face housing with bored bearing seats, tapped mounting holes and pocketed interior.',
    image:
      'https://images.unsplash.com/photo-1723632670536-e3104577a19c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Manifold Block',
    category: 'Housings & Blocks',
    material: 'Mild Steel / Aluminium',
    process: 'VMC Milling, Deep Drilling, Tapping',
    description:
      'Hydraulic-style manifold block with cross-drilled ports and tapped connections machined in one setup.',
    image:
      'https://images.unsplash.com/photo-1784332307265-2f3bd31d0dd9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Turned Flange',
    category: 'Flanges & Rings',
    material: 'Stainless Steel 304 / 316',
    process: 'CNC Turning, Drilling (PCD)',
    description:
      'Flat-faced flange with bolt-hole PCD, turned and drilled for piping and equipment connections.',
    image:
      'https://images.unsplash.com/photo-1548683726-203119be6a39?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Precision Ring',
    category: 'Flanges & Rings',
    material: 'Alloy Steel / Brass',
    process: 'CNC Turning, Boring',
    description:
      'Thin-section ring with controlled bore and outer diameter for spacer and retaining applications.',
    image:
      'https://images.unsplash.com/photo-1780034766267-cf76b8484212?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    name: 'Bronze Bush',
    category: 'Bushes & Sleeves',
    material: 'Phosphor Bronze',
    process: 'CNC Turning, Boring, Reaming',
    description:
      'Plain bearing bush with reamed bore and chamfered edges for smooth fit and long service life.',
    image:
      'https://images.unsplash.com/photo-1769147339214-076740872485?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    name: 'Steel Sleeve',
    category: 'Bushes & Sleeves',
    material: 'EN8 Steel',
    process: 'CNC Turning, Grooving',
    description:
      'Cylindrical sleeve with external grooves and precise wall thickness for shaft protection.',
    image:
      'https://images.unsplash.com/photo-1606337321936-02d1b1a4d5ef?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    name: 'Mounting Bracket',
    category: 'Brackets & Plates',
    material: 'Mild Steel / Aluminium',
    process: 'VMC Milling, Drilling, Tapping',
    description:
      'L-shaped bracket with slotted mounting holes and machined datum faces for accurate assembly.',
    image:
      'https://images.unsplash.com/photo-1666618090858-fbcee636bd3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 10,
    name: 'Fixture Base Plate',
    category: 'Brackets & Plates',
    material: 'Mild Steel (Ground)',
    process: 'VMC Milling, Drilling, Tapping',
    description:
      'Flat base plate with hole grid and dowel locations for workholding and fixture builds.',
    image:
      'https://images.unsplash.com/photo-1727292485794-925866ec2372?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 11,
    name: 'Special Studs & Bolts',
    category: 'Fasteners & Fittings',
    material: 'Stainless Steel / Alloy Steel',
    process: 'CNC Turning, Threading',
    description:
      'Non-standard studs, bolts and threaded fasteners turned to length and thread specification.',
    image:
      'https://images.unsplash.com/photo-1758873263528-6dbd0422cf84?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 12,
    name: 'Threaded Adapter Fitting',
    category: 'Fasteners & Fittings',
    material: 'Brass / Stainless Steel',
    process: 'CNC Turning, Threading, Drilling',
    description:
      'Hex-body adapter with internal and external threads for fluid and pneumatic connections.',
    image:
      'https://images.unsplash.com/photo-1576142392214-a1794ffa0385?auto=format&fit=crop&w=800&q=80',
  },
]
