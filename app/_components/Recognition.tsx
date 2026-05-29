import RevealWrapper from './RevealWrapper'

const AWARDS = [
  {
    icon: '🏆',
    title: 'International Winner — Optum Stratethon',
    meta: 'Pre-Placement Interview offered · 12,000+ participants from 3 nations · 2024',
  },
  {
    icon: '⭐',
    title: 'Bravo for Leadership',
    meta: 'Awarded by the COO of Business for leading AI Automated Lien Validation · 2024',
  },
]

const EDUCATION = [
  {
    period: 'May 2021 — Mar 2023',
    school: 'Indian Institute of Management, Kozhikode',
    degree: 'MBA',
  },
  {
    period: 'May 2016 — May 2020',
    school: 'IIIT Delhi',
    degree: 'B.Tech, Computer Science & Engineering',
  },
]

const CERTS = [
  'CSPO', 'Pendo AI in PM', 'Aha! PM Professional', 'AI Business Use Cases',
  'Adobe Analytics', 'Datadog', 'Tableau', 'Roadmapping', 'UX',
]

export default function Recognition() {
  return (
    <section id="recognition" className="border-b border-[var(--border)]">
      <div className="max-w-[1160px] mx-auto px-10 max-md:px-5">

        <RevealWrapper className="flex items-baseline justify-between py-12 pb-8 border-b border-[var(--border)]">
          <h2 className="font-bold tracking-[-0.03em] leading-none" style={{ fontSize: 'clamp(28px,3vw,40px)' }}>
            Recognition & Education
          </h2>
          <span className="font-mono text-[11px] text-muted tracking-[0.1em]">Where I&apos;ve been</span>
        </RevealWrapper>

        {/* 2-col grid */}
        <RevealWrapper
          delay={1}
          className="grid grid-cols-2 max-md:grid-cols-1 gap-px bg-[var(--border)] border border-[var(--border)] rounded-[2px] overflow-hidden my-6 mb-12"
        >
          {/* Awards */}
          <div className="bg-card-bg p-8">
            <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted mb-5 flex items-center gap-2.5 after:content-[''] after:flex-1 after:h-px after:bg-[var(--border)]">
              Awards
            </div>
            {AWARDS.map(({ icon, title, meta }) => (
              <div
                key={title}
                className="py-4 border-b border-dashed border-[var(--border)] last:border-b-0 flex gap-4 items-start"
              >
                <div
                  className="text-[22px] flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full"
                  style={{ background: 'rgba(55,0,255,0.08)' }}
                >
                  {icon}
                </div>
                <div>
                  <div className="text-[15px] font-semibold tracking-[-0.01em] leading-[1.3] mb-1">{title}</div>
                  <div className="text-[12px] text-muted leading-[1.5]">{meta}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="bg-card-bg p-8">
            <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted mb-5 flex items-center gap-2.5 after:content-[''] after:flex-1 after:h-px after:bg-[var(--border)]">
              Education
            </div>
            {EDUCATION.map(({ period, school, degree }) => (
              <div
                key={school}
                className="py-4 border-b border-dashed border-[var(--border)] last:border-b-0"
              >
                <div className="font-mono text-[10px] tracking-[0.1em] text-accent mb-1">{period}</div>
                <div className="text-[15px] font-semibold tracking-[-0.01em] leading-[1.3] mb-0.5">{school}</div>
                <div className="text-[13px] text-muted mt-0.5">{degree}</div>
              </div>
            ))}
          </div>
        </RevealWrapper>

        {/* Certifications strip */}
        <RevealWrapper delay={2} className="border-t border-[var(--border)] pt-6">
          <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted mb-5 flex items-center gap-2.5 after:content-[''] after:flex-1 after:h-px after:bg-[var(--border)]">
            Certifications & Tools
          </div>
          <div className="flex flex-wrap gap-2 pb-10">
            {CERTS.map(cert => (
              <span
                key={cert}
                className="font-mono text-[10px] tracking-[0.08em] uppercase text-fg border border-[var(--border)] px-3 py-1.5 rounded-[2px] transition-[border-color,color] duration-200 hover:border-accent hover:text-accent"
              >
                {cert}
              </span>
            ))}
          </div>
        </RevealWrapper>

      </div>
    </section>
  )
}
