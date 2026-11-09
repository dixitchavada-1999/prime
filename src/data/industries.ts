import {
  Car,
  Cog,
  Droplets,
  Factory,
  Fuel,
  HardHat,
  Tractor,
  Zap,
} from 'lucide-react'
import type { Industry } from '../types'

/* ==================================================================
   INDUSTRIES WE SERVE
   ------------------------------------------------------------------
   Edit names, descriptions and icons. Icons from lucide-react.
   ================================================================== */

export const industries: Industry[] = [
  {
    id: 1,
    name: 'Automotive',
    description: 'Shafts, bushes, brackets and fixtures for vehicle and component manufacturers.',
    icon: Car,
  },
  {
    id: 2,
    name: 'General Engineering',
    description: 'Made-to-drawing parts for machine builders, fabricators and maintenance teams.',
    icon: Cog,
  },
  {
    id: 3,
    name: 'Pumps & Valves',
    description: 'Flanges, sleeves, seats and housings machined for flow-control equipment.',
    icon: Droplets,
  },
  {
    id: 4,
    name: 'Oil & Gas',
    description: 'Adapters, fittings and machined components for process and field equipment.',
    icon: Fuel,
  },
  {
    id: 5,
    name: 'Agricultural Machinery',
    description: 'Durable pins, shafts and brackets for farm equipment and implements.',
    icon: Tractor,
  },
  {
    id: 6,
    name: 'Electrical & Power',
    description: 'Terminal blocks, bus-bar fittings and machined enclosures in brass and aluminium.',
    icon: Zap,
  },
  {
    id: 7,
    name: 'Construction Equipment',
    description: 'Heavy-duty pins, bushes and plates for earth-moving and material handling.',
    icon: HardHat,
  },
  {
    id: 8,
    name: 'Industrial Machinery',
    description: 'Precision spare parts and sub-assemblies for plant and production machinery.',
    icon: Factory,
  },
]
