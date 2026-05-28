import HeroRevealInit from './HeroRevealInit'

const STATS = [
  { num: '7.7M+',  label: 'Members Impacted' },
  { num: '$1.3M+', label: 'Annual Savings' },
  { num: '4+',     label: 'AI Products Shipped' },
  { num: '3',      label: 'Product Lines' },
]

const TAGS = ['0→1 Builder', 'AI Products', 'Mobile · B2C · B2B']

export default function Hero() {
  return (
    <section id="hero" className="pt-16 min-h-screen flex flex-col border-b border-[var(--border)]">
      <HeroRevealInit />
      <div className="max-w-[1160px] mx-auto px-10 w-full flex-1 flex flex-col max-md:px-5">
        <div className="flex-1 grid grid-cols-[1fr_360px] max-md:grid-cols-1 border-t border-[var(--border)]">

          {/* LEFT */}
          <div className="py-[60px] pr-12 flex flex-col justify-between border-r border-[var(--border)] max-md:py-10 max-md:pr-0 max-md:border-r-0 max-md:border-b max-md:border-[var(--border)]">
            <div>
              {/* Eyebrow */}
              <div className="reveal font-mono text-[11px] tracking-[0.18em] uppercase text-muted mb-5">
                Product Manager · Builder · Problem Solver
              </div>

              {/* Name */}
              <h1
                className="reveal reveal-delay-1 font-bold leading-[0.92] tracking-[-0.03em] mb-7"
                style={{ fontSize: 'clamp(56px,7vw,96px)' }}
              >
                Aryan<br />Anand
                <span
                  className="inline-block w-3 h-3 bg-accent rounded-full ml-1.5 align-middle"
                  style={{ transform: 'translateY(-8px)' }}
                />
              </h1>

              {/* Bio */}
              <p className="reveal reveal-delay-2 text-[18px] text-muted leading-[1.6] max-w-[420px] mb-9">
                I build products that solve real, messy problems — shipping AI-driven experiences used by millions and operational tools that save millions.
              </p>

              {/* Currently strip */}
              <div
                className="reveal reveal-delay-2 inline-flex items-stretch gap-0 border border-[var(--border)] rounded-[2px] py-3 mb-7 transition-[border-color,background] duration-200 hover:border-accent"
                style={{ background: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(8px)' }}
              >
                <span className="flex flex-col gap-[3px] px-5">
                  <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-muted">Currently</span>
                  <span className="text-[13px] font-semibold text-fg inline-flex items-center gap-[7px] tracking-[-0.005em]">
                    <span className="w-[7px] h-[7px] bg-[#22A06B] rounded-full flex-shrink-0 animate-pulse-green" />
                    Product Manager @ Optum
                  </span>
                </span>
                <span className="w-px bg-[var(--border)] self-stretch" />
                <span className="flex flex-col gap-[3px] px-5">
                  <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-muted">Experience</span>
                  <span className="text-[13px] font-semibold text-fg tracking-[-0.005em]">3+ years in product</span>
                </span>
              </div>

              {/* Tags */}
              <div className="reveal reveal-delay-3 flex flex-wrap gap-2 mb-10">
                <span className="inline-flex items-center gap-[5px] bg-accent text-white border border-accent px-3 py-[5px] text-[12px] font-medium tracking-[0.02em] rounded-[2px] before:content-[''] before:w-1.5 before:h-1.5 before:bg-white before:rounded-full before:animate-blink">
                  Looking for my next challenge
                </span>
                {TAGS.map(t => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-[5px] border border-[var(--border)] px-3 py-[5px] text-[12px] font-medium tracking-[0.02em] rounded-[2px] text-fg transition-[border-color,color] duration-200 hover:border-accent hover:text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="reveal reveal-delay-4 flex gap-3 items-center flex-wrap">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 bg-fg text-bg px-6 py-3 text-[13px] font-semibold tracking-[0.03em] no-underline rounded-[2px] transition-[background,transform] duration-200 hover:bg-accent hover:-translate-y-px"
              >
                See What I&apos;ve Built ↓
              </a>
              <a
                href="https://www.linkedin.com/in/aryananand-/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-transparent text-fg px-[22px] py-[11px] text-[13px] font-medium no-underline rounded-[2px] border border-[var(--border)] transition-[border-color,color,transform] duration-200 hover:border-accent hover:text-accent hover:-translate-y-px"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="py-[60px] pl-12 flex flex-col gap-6 justify-between max-md:py-8 max-md:pl-0">
            {/* Photo slot */}
            <div className="flex-1 rounded-[2px] relative overflow-hidden min-h-[280px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portfoliohs.jpeg"
                alt="Aryan Anand"
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>

            {/* Stats 2×2 */}
            <div className="grid grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)] rounded-[2px] overflow-hidden">
              {STATS.map(({ num, label }) => (
                <div key={label} className="bg-bg px-4 py-3.5">
                  <div className="text-[26px] font-bold tracking-[-0.04em] leading-none mb-[3px]">{num}</div>
                  <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-muted">{label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
