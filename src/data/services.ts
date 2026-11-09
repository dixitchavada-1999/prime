import {
  Boxes,
  CircleDot,
  Crosshair,
  Drill,
  FlaskConical,
  Layers3,
  PencilRuler,
} from 'lucide-react'
import type { Service } from '../types'

/* ==================================================================
   OUR SERVICES
   ------------------------------------------------------------------
   Edit titles, descriptions, highlights and icons here. Icons come
   from lucide-react (https://lucide.dev/icons).
   ================================================================== */

export const services: Service[] = [
  {
    id: 1,
    title: 'CNC Turning',
    description:
      'Precision turning of shafts, bushes, pins, flanges and other cylindrical components on CNC turning centres.',
    icon: CircleDot,
    highlights: ['OD / ID turning', 'Facing, grooving & threading', 'Bar and chuck work'],
  },
  {
    id: 2,
    title: 'VMC Milling',
    description:
      'Vertical machining of housings, brackets, plates and complex profiles with milling, boring and pocketing in one setup.',
    icon: Layers3,
    highlights: ['3-axis milling', 'Profile & pocket machining', 'Boring & face milling'],
  },
  {
    id: 3,
    title: 'Precision Machining',
    description:
      'Tight-tolerance components machined with careful process planning, quality tooling and in-process inspection.',
    icon: Crosshair,
    highlights: ['Close-tolerance features', 'Fine surface finishes', 'Inspection before dispatch'],
  },
  {
    id: 4,
    title: 'Custom Component Manufacturing',
    description:
      'Made-to-drawing parts manufactured from your 2D drawings or 3D models in the material you specify.',
    icon: PencilRuler,
    highlights: ['Built to your drawing', 'Material as specified', 'Engineering support'],
  },
  {
    id: 5,
    title: 'Drilling & Tapping',
    description:
      'Accurate hole patterns, counterbores, reaming and tapped threads produced on CNC equipment for repeatability.',
    icon: Drill,
    highlights: ['Hole patterns & PCDs', 'Reaming & counterboring', 'Metric & imperial threads'],
  },
  {
    id: 6,
    title: 'Prototype Manufacturing',
    description:
      'Quick-turn single pieces and small lots so you can validate a design before committing to production.',
    icon: FlaskConical,
    highlights: ['Single piece & small lots', 'Design feedback', 'Fast turnaround'],
  },
  {
    id: 7,
    title: 'Batch Production',
    description:
      'Repeat production runs with consistent quality, dedicated fixturing and planned delivery schedules.',
    icon: Boxes,
    highlights: ['Repeat orders', 'Dedicated fixtures', 'Scheduled deliveries'],
  },
]
