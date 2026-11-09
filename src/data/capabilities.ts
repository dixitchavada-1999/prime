import { Gauge, Layers, Ruler, Wrench } from 'lucide-react'
import type { Capability } from '../types'

/* ==================================================================
   OUR CAPABILITIES
   ------------------------------------------------------------------
   Materials, processes and quality practices. Items in [brackets]
   are PLACEHOLDERS - fill in real figures (tolerances, sizes,
   instruments) only if you can stand behind them.
   ================================================================== */

export const capabilities: Capability[] = [
  {
    id: 1,
    title: 'Materials We Machine',
    description: 'Experience across common engineering metals and plastics.',
    icon: Layers,
    items: [
      'Mild steel & alloy steels',
      'Stainless steel (304 / 316)',
      'Aluminium alloys',
      'Brass, copper & bronze',
      'Cast iron',
      'Engineering plastics (Nylon, Delrin, PTFE)',
    ],
  },
  {
    id: 2,
    title: 'Machining Processes',
    description: 'Turning and milling operations covered under one roof.',
    icon: Wrench,
    items: [
      'CNC turning & facing',
      'VMC milling & profiling',
      'Boring & reaming',
      'Drilling & tapping',
      'Grooving & threading',
      'Pocketing & slotting',
    ],
  },
  {
    id: 3,
    title: 'Size & Tolerance',
    description: 'Working envelope and accuracy the shop is set up for.',
    icon: Ruler,
    items: [
      'Turning diameter up to [e.g. 300 mm]',
      'Turning length up to [e.g. 1000 mm]',
      'Milling envelope up to [e.g. 1000 x 600 x 600 mm]',
      'Typical tolerance [e.g. +/- 0.01 mm] as per drawing',
      'Surface finish as specified',
    ],
  },
  {
    id: 4,
    title: 'Quality & Inspection',
    description: 'Checks that happen before a part leaves the shop.',
    icon: Gauge,
    items: [
      'Drawing review before machining',
      'First-piece approval',
      'In-process dimensional checks',
      'Final inspection with calibrated instruments',
      'Inspection report on request',
    ],
  },
]
