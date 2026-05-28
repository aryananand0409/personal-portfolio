const KEYWORDS = [
  'AI Product Strategy',
  '0→1 Builder',
  'Mobile-first Experiences',
  'Operational Automation',
  'Discovery & Research',
  'Data-Led Decisions',
  'Cross-functional Leadership',
  'Roadmapping',
]

const items = [...KEYWORDS, ...KEYWORDS]

export default function Marquee() {
  return (
    <div className="bg-fg text-bg py-3.5 overflow-hidden border-b border-[var(--border)] whitespace-nowrap flex items-center">
      <div className="inline-flex items-center animate-marquee hover:[animation-play-state:paused]">
        {items.map((kw, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-8 font-mono text-[11px] tracking-[0.14em] uppercase text-white"
          >
            <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />
            {kw}
          </span>
        ))}
      </div>
    </div>
  )
}
