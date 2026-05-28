'use client'

import { useEffect } from 'react'

export default function HeroRevealInit() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll('#hero .reveal').forEach(el => el.classList.add('visible'))
    }, 80)
    return () => clearTimeout(timer)
  }, [])

  return null
}
