import RevealWrapper from './RevealWrapper'

type Workstream = {
  name: string
  type: string
  bullets: string[]
  chips: string[]
}

const workstreams: Workstream[] = [
  {
    name: 'myUHC Mobile App',
    type: 'B2C · Mobile · 7.7M+ Members',
    bullets: [
      'Shipped Apple & Google Wallet auto-refresh for 7.7M+ members — reduced ID card support issues by 18%.',
      'Built an AI-driven ID card parser to extract state- and policy-specific routing info, cutting call routing errors by 4%.',
      'Led payments friction strategy — prioritised mobile OCR card auto-capture, improving payment setup success rate for new members.',
      'Defined and launched the maternity experience roadmap for 16K+ monthly users — reduced escalations, drove higher PCP engagement.',
    ],
    chips: ['Apple/Google Wallet', 'AI ID Parser', 'OCR Payments', 'Maternity Journey'],
  },
  {
    name: 'UHC Store',
    type: 'B2C · E-commerce',
    bullets: [
      'Defined shopping automation strategy and delivered an AI-driven voice agent for secure purchases & subscriptions — drove a 10% adoption uplift.',
      'Prototyped an AI review system that summarised reviews and extracted sentiment themes — delivered an 11% conversion uplift for key products.',
      'Improved search relevance via semantic matching, context-aware ranking, and intent detection.',
      'Built the vendor onboarding automation roadmap with AI-led doc parsing — cut manual review effort by 60%.',
    ],
    chips: ['AI Voice Agent', 'AI Review Summarizer', 'Semantic Search', 'Vendor Onboarding'],
  },
  {
    name: 'Optum Insight',
    type: 'B2B · Ops Platform',
    bullets: [
      'Established the vision for AI Lien Validation automation — generated $1.2M annual savings with improved accuracy and turnaround.',
      'Delivered Post-Payment automation — $125K annual savings, raised QA scores from 96.8% → 97.7%.',
      'Redesigned SLA & audit workflows via data-led root-cause analysis — 70% reduction in Post Pay variances, quality scores up 95.1% → 96.5%.',
      'Rebuilt cross-team task allocation — 87.5% reduction in late task reassignment (2 hrs → 15 min weekly).',
    ],
    chips: ['AI Lien Validation', 'Post-Pay Automation', 'SLA Workflows', 'Task Routing'],
  },
]

const boldMap: Record<string, Record<number, string[]>> = {
  'myUHC Mobile App': {
    0: ['Apple & Google Wallet auto-refresh'],
    1: ['AI-driven ID card parser'],
    2: ['payments friction strategy'],
    3: ['maternity experience roadmap'],
  },
  'UHC Store': {
    0: ['AI-driven voice agent', '10% adoption uplift'],
    1: ['AI review system', '11% conversion uplift'],
    2: ['search relevance'],
    3: ['vendor onboarding automation roadmap', '60%'],
  },
  'Optum Insight': {
    0: ['AI Lien Validation', '$1.2M annual savings'],
    1: ['Post-Payment automation', '$125K annual savings'],
    2: ['70% reduction in Post Pay variances'],
    3: ['87.5% reduction'],
  },
}

function HighlightedBullet({ text, bolds = [] }: { text: string; bolds?: string[] }) {
  if (!bolds.length) return <>{text}</>
  const pattern = new RegExp(
    `(${bolds.map(b => b.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'g'
  )
  const parts = text.split(pattern)
  return (
    <>
      {parts.map((part, i) =>
        bolds.includes(part) ? (
          <b
            key={i}
            className="text-fg font-semibold px-[2px]"
            style={{ background: 'linear-gradient(180deg,transparent 60%,rgba(55,0,255,0.10) 60%)' }}
          >
            {part}
          </b>
        ) : (
          part
        )
      )}
    </>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="border-b border-[var(--border)]">
      <div className="max-w-[1160px] mx-auto px-10 max-md:px-5">

        <RevealWrapper className="flex items-baseline justify-between py-12 pb-8 border-b border-[var(--border)]">
          <h2 className="font-bold tracking-[-0.03em] leading-none" style={{ fontSize: 'clamp(28px,3vw,40px)' }}>
            Experience
          </h2>
          <span className="font-mono text-[11px] text-muted tracking-[0.1em]">May 2023 — Present</span>
        </RevealWrapper>

        <RevealWrapper
          delay={1}
          className="grid grid-cols-[180px_1fr] max-md:grid-cols-1 gap-0 border-b border-[var(--border)] py-9 transition-colors duration-200 hover:bg-[rgba(55,0,255,0.02)]"
        >
          {/* Meta */}
          <div className="pr-8 max-md:pr-0 max-md:mb-3">
            <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted mb-1.5">2023 — Present</div>
            <div className="text-[13px] font-semibold text-fg mb-1">Optum (UnitedHealth Group)</div>
            <div className="text-[11px] text-muted">Fortune 5 · Health-tech · Gurugram</div>
          </div>

          {/* Content */}
          <div>
            <div className="text-[22px] font-bold tracking-[-0.02em] mb-2.5">Product Manager</div>
            <p className="text-[14px] text-muted leading-[1.65] mb-4 max-w-[560px]">
              Driving strategy, discovery and delivery of AI-driven products across consumer mobile experiences and operational platforms — spanning three product lines impacting 7.7M+ members.
            </p>

            {/* Workstream cards */}
            <div className="flex flex-col gap-px bg-[var(--border)] border border-[var(--border)] mt-5 rounded-[2px] overflow-hidden">
              {workstreams.map(ws => (
                <div
                  key={ws.name}
                  className="bg-card-bg px-7 py-6 transition-colors duration-200 hover:bg-[#faf8f5] max-md:px-5"
                >
                  <div className="flex items-baseline justify-between gap-4 mb-3.5">
                    <div className="text-[17px] font-bold tracking-[-0.01em] flex items-baseline gap-2.5 before:content-[''] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full before:translate-y-[-2px] before:flex-shrink-0">
                      {ws.name}
                    </div>
                    <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted whitespace-nowrap">
                      {ws.type}
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2 mb-3.5 list-none">
                    {ws.bullets.map((bullet, bi) => (
                      <li
                        key={bi}
                        className="text-[13.5px] text-[#444] leading-[1.55] pl-[18px] relative before:content-['→'] before:absolute before:left-0 before:top-0 before:text-accent before:font-semibold before:text-[12px]"
                      >
                        <HighlightedBullet text={bullet} bolds={boldMap[ws.name]?.[bi]} />
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-dashed border-[var(--border)]">
                    {ws.chips.map(chip => (
                      <span
                        key={chip}
                        className="inline-flex items-center gap-[5px] bg-[rgba(17,17,17,0.05)] px-2.5 py-1 text-[11px] font-medium rounded-[2px] text-fg border border-transparent transition-[border-color,background] duration-200 hover:border-accent hover:bg-[rgba(55,0,255,0.05)] before:content-[''] before:w-[5px] before:h-[5px] before:bg-accent before:rounded-full before:opacity-60"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>

      </div>
    </section>
  )
}
