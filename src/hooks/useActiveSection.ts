import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view so the navbar can
 * highlight the matching link. Uses IntersectionObserver with the
 * viewport trimmed so the section crossing the upper-middle of the
 * screen wins.
 */
export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const visible = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio)
          } else {
            visible.delete(entry.target.id)
          }
        }
        // Pick the first section (in document order) that is visible.
        const next = sectionIds.find((id) => visible.has(id))
        if (next) setActive(next)
      },
      {
        // Shrink the observation area to a band just below the navbar.
        rootMargin: '-30% 0px -60% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
