import Link from 'next/link'
import { publishedEssays } from '@/data/writing'
import RevealWrapper from './RevealWrapper'

export default function Writing() {
  const essays = publishedEssays()
  const latest = essays[0]

  return (
    <section id="writing" className="border-b border-[var(--border)]">
      <div className="max-w-[1160px] mx-auto px-10 max-md:px-5">
        <RevealWrapper className="flex items-baseline justify-between py-12 pb-8 border-b border-[var(--border)]">
          <h2 className="font-bold tracking-[-0.03em] leading-none" style={{ fontSize: 'clamp(28px,3vw,40px)' }}>
            Writing
          </h2>
          <span className="font-mono text-[11px] text-muted tracking-[0.1em]">
            {essays.length ? `${String(essays.length).padStart(2, '0')} essays` : 'Essays & reading'}
          </span>
        </RevealWrapper>

        <RevealWrapper delay={1} className="py-14 flex items-center justify-between gap-10 max-md:flex-col max-md:items-start">
          <div className="flex-1 max-w-[560px]">
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-accent mb-4 inline-flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              {latest ? latest.category : 'A notebook in progress'}
            </div>
            <h3 className="font-bold tracking-[-0.02em] leading-[1.1] mb-4" style={{ fontSize: 'clamp(28px,3vw,38px)' }}>
              {latest ? latest.title : 'Notes on building products in the age of AI.'}
            </h3>
            <p className="text-[15px] text-muted leading-[1.7] mb-6">
              {latest ? latest.dek : 'Essays on product craft, technology, and the ideas worth carrying into the work. A place for considered notes and things I’m reading.'}
            </p>
            <Link href={latest ? `/writing/${latest.slug}` : '/writing'} className="inline-flex items-center gap-3 text-[13px] font-semibold text-fg no-underline group">
              {latest ? 'Read the latest essay' : 'Explore the notebook'}
              <span className="w-7 h-7 border border-[var(--border)] rounded-full flex items-center justify-center transition-all duration-200 group-hover:bg-accent group-hover:border-accent group-hover:text-white group-hover:translate-x-1">↗</span>
            </Link>
          </div>

          <Link href="/writing" aria-label="Browse all essays and reading notes" className="w-[320px] aspect-[4/3] flex-shrink-0 max-md:w-full relative overflow-hidden border border-[var(--border)] bg-[#dedce5] no-underline group">
            {latest?.coverImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={latest.coverImage} alt={latest.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            ) : (
              <div className="w-full h-full flex flex-col justify-between p-6" style={{ background: 'linear-gradient(145deg,rgba(255,255,255,.78),rgba(55,0,255,.07))' }}>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted">Field notes · 2026</span>
                <span className="font-bold text-[30px] leading-[1.05] tracking-[-0.04em] text-fg max-w-[220px]">Ideas in progress<span className="text-accent">.</span></span>
                <span className="font-mono text-[10px] tracking-[0.1em] text-muted">PRODUCT · PEOPLE · TECHNOLOGY</span>
              </div>
            )}
          </Link>
        </RevealWrapper>
      </div>
    </section>
  )
}
