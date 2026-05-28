'use client'

import { useRef, useEffect, useState, ReactNode, ElementType } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: 1 | 2 | 3 | 4
  as?: ElementType
}

export default function RevealWrapper({ children, className = '', delay, as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay ? `reveal-delay-${delay}` : ''

  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </Tag>
  )
}
