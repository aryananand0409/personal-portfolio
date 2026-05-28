'use client'

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="font-mono text-[10px] tracking-[0.1em] text-muted cursor-pointer bg-transparent border-none transition-colors duration-200 hover:text-accent"
    >
      ↑ Back to top
    </button>
  )
}
