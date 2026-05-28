import RevealWrapper from './RevealWrapper'

const INTERESTS = [
  { emoji: '♟️', label: 'Chess' },
  { emoji: '📚', label: 'Reading' },
  { emoji: '🏏', label: 'Cricket' },
  { emoji: '⚽', label: 'Football' },
]

export default function Interests() {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="max-w-[1160px] mx-auto px-10 max-md:px-5 py-10">
        <RevealWrapper className="flex items-center gap-5 flex-wrap">
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted whitespace-nowrap">
            When I&apos;m not shipping
          </span>
          <span className="w-px h-4 bg-[var(--border)] max-md:hidden" />
          <div className="flex gap-3 flex-wrap">
            {INTERESTS.map(({ emoji, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 bg-card-bg border border-[var(--border)] px-4 py-2.5 rounded-[2px] transition-[border-color,transform] duration-200 hover:border-accent hover:-translate-y-px"
              >
                <span className="text-[18px] leading-none">{emoji}</span>
                <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-fg font-medium">{label}</span>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
