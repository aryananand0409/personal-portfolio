import RevealWrapper from './RevealWrapper'

const TOPICS = [
  'AI product design',
  'PM craft',
  'Discovery → delivery',
  'Mobile UX patterns',
  'Operational AI',
]

export default function Writing() {
  return (
    <section id="writing" className="border-b border-[var(--border)]">
      <div className="max-w-[1160px] mx-auto px-10 max-md:px-5">

        <RevealWrapper className="flex items-baseline justify-between py-12 pb-8 border-b border-[var(--border)]">
          <h2 className="font-bold tracking-[-0.03em] leading-none" style={{ fontSize: 'clamp(28px,3vw,40px)' }}>
            Writing
          </h2>
          <span className="font-mono text-[11px] text-muted tracking-[0.1em]">Coming soon</span>
        </RevealWrapper>

        <RevealWrapper
          delay={1}
          className="pt-[60px] pb-20 flex items-center justify-between gap-10 max-md:flex-col max-md:items-start"
        >
          {/* Left */}
          <div className="flex-1 max-w-[480px]">
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-accent mb-4 inline-flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full before:animate-blink">
              In Progress
            </div>
            <h3
              className="font-bold tracking-[-0.02em] leading-[1.1] mb-4"
              style={{ fontSize: 'clamp(28px,3vw,38px)' }}
            >
              Notes on building products in the age of AI.
            </h3>
            <p className="text-[15px] text-muted leading-[1.6] mb-6">
              I&apos;m putting together a series of essays on shipping AI-driven products, the new craft of being a PM in 2026, and what I&apos;ve learned scaling 0→1 at a Fortune 5.
            </p>
            <div className="flex flex-wrap gap-2">
              {TOPICS.map(t => (
                <span
                  key={t}
                  className="text-[12px] text-fg border border-dashed border-[var(--border)] px-3 py-1 rounded-[2px]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — ghost cards */}
          <div className="grid grid-cols-3 gap-2 w-[320px] flex-shrink-0 max-md:w-full">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className="aspect-[3/4] border border-dashed border-[var(--border)] rounded-[2px] flex items-end p-3"
                style={{ background: 'linear-gradient(180deg,rgba(255,255,255,0.6),transparent)' }}
              >
                <div className="w-full flex flex-col gap-1">
                  <div className="h-1.5 bg-[var(--border)] rounded-[2px]" />
                  <div className="h-1.5 w-[60%] bg-[var(--border)] rounded-[2px]" />
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>

      </div>
    </section>
  )
}
