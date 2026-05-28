'use client'

import { useEffect, useState } from 'react'

interface Props {
  showAnalyses: boolean
}

export default function Nav({ showAnalyses }: Props) {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id) })
      },
      { threshold: 0.4 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const linkBase =
    'text-[13px] font-medium tracking-[0.01em] no-underline relative transition-colors duration-200 ' +
    'after:content-[\'\'] after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] ' +
    'after:bg-accent after:transition-[width] after:duration-[250ms] ' +
    'hover:text-fg hover:after:w-full'

  function linkClass(id: string) {
    return `${linkBase} ${activeId === id ? 'text-fg after:w-full' : 'text-muted after:w-0'}`
  }

  const navLinks = ['experience', 'projects', ...(showAnalyses ? ['analyses'] : []), 'recognition']

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 h-16 border-b border-[var(--border)] transition-[background] duration-300 max-md:px-5"
      style={{ background: 'rgba(232,231,238,0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
    >
      {/* Logo */}
      <a href="#hero" className="font-mono text-[15px] font-medium tracking-[-0.02em] no-underline text-fg">
        AA<span className="text-accent">.</span>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(id => (
          <a key={id} href={`#${id}`} className={linkClass(id)}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        <a
          href="#contact"
          className="bg-fg text-bg px-[18px] py-2 rounded-[2px] text-[12px] font-semibold tracking-[0.04em] whitespace-nowrap no-underline transition-[background] duration-200 hover:bg-accent"
        >
          Let&apos;s Talk
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
      >
        <span className={`block h-[1.5px] w-5 bg-fg transition-transform duration-200 origin-center ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
        <span className={`block h-[1.5px] w-5 bg-fg transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
        <span className={`block h-[1.5px] w-5 bg-fg transition-transform duration-200 origin-center ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
      </button>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden absolute top-16 left-0 right-0 flex flex-col border-b border-[var(--border)]"
          style={{ background: 'rgba(232,231,238,0.97)', backdropFilter: 'blur(12px)' }}
        >
          {navLinks.map(id => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="px-5 py-4 text-[13px] font-medium text-muted border-b border-[var(--border)] no-underline capitalize hover:text-fg transition-colors duration-200"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="px-5 py-4 text-[13px] font-semibold text-accent no-underline hover:text-fg transition-colors duration-200"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </nav>
  )
}
