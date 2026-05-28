'use client'

import { useRef, ReactNode, ElementType, MouseEvent } from 'react'

interface Props {
  children: ReactNode
  className?: string
  as?: ElementType
}

export default function MagneticWrapper({ children, className = '', as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null)

  function handleMouseMove(e: MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) * 0.18
    const dy = (e.clientY - cy) * 0.18
    el.style.transform = `translate(${dx}px, ${dy}px)`
  }

  function handleMouseLeave() {
    const el = ref.current
    if (el) el.style.transform = ''
  }

  return (
    <Tag
      ref={ref}
      className={`cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </Tag>
  )
}
