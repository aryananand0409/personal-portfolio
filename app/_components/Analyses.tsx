import { publishedAnalyses, type Analysis } from '@/data/analyses'
import RevealWrapper from './RevealWrapper'

function zeroPad(n: number) {
  return n.toString().padStart(2, '0')
}

function AnalysisCard({ a, delay }: { a: Analysis; delay?: 1 | 2 | 3 | 4 }) {
  return (
    <RevealWrapper delay={delay}>
      <a
        href={a.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-card-bg p-8 flex flex-col gap-4 relative overflow-hidden no-underline text-fg transition-colors duration-200 hover:bg-[#faf8f5] before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-[2px] before:bg-accent before:transition-[width] before:duration-[350ms] hover:before:w-full h-full block"
      >
        {/* Cover image */}
        <div className="w-full aspect-video bg-[#E8E3DC] rounded-[2px] overflow-hidden flex items-center justify-center relative">
          {a.coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={a.coverImage} alt={a.title} className="w-full h-full object-cover" />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(-45deg,transparent,transparent 10px,rgba(0,0,0,0.035) 10px,rgba(0,0,0,0.035) 11px)',
              }}
            >
              <span className="font-mono text-[10px] text-[#aaa] tracking-[0.08em] bg-white/70 px-2 py-1">
                cover image
              </span>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex gap-1.5 flex-wrap">
          {a.tags.map(tag => (
            <span
              key={tag}
              className="font-mono text-[9px] tracking-[0.12em] uppercase text-accent border rounded-[1px] px-2 py-[3px]"
              style={{ borderColor: 'rgba(55,0,255,0.3)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="text-[20px] font-bold tracking-[-0.02em] leading-[1.2]">{a.title}</div>

        <div className="flex items-center justify-between pt-3 border-t border-[var(--border)] mt-auto">
          <span className="font-mono text-[10px] tracking-[0.1em] text-muted">{a.readTimeMin} min read</span>
          <div className="w-7 h-7 border border-[var(--border)] rounded-full flex items-center justify-center text-[12px] transition-[background,border-color,color,transform] duration-200 group-hover:bg-accent group-hover:border-accent group-hover:text-white group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
            ↗
          </div>
        </div>
      </a>
    </RevealWrapper>
  )
}

export default function Analyses() {
  const items = publishedAnalyses()
  if (items.length === 0) return null

  const count = `${zeroPad(items.length)} ${items.length === 1 ? 'teardown' : 'teardowns'}`

  return (
    <section id="analyses" className="border-b border-[var(--border)]">
      <div className="max-w-[1160px] mx-auto px-10 max-md:px-5">
        <RevealWrapper className="flex items-baseline justify-between py-12 pb-8 border-b border-[var(--border)]">
          <h2 className="font-bold tracking-[-0.03em] leading-none" style={{ fontSize: 'clamp(28px,3vw,40px)' }}>
            Product Analyses
          </h2>
          <span className="font-mono text-[11px] text-muted tracking-[0.1em]">{count}</span>
        </RevealWrapper>
        <div
          className={`grid gap-px bg-[var(--border)] border border-[var(--border)] ${items.length === 1 ? 'grid-cols-1 max-w-lg' : 'grid-cols-2 max-md:grid-cols-1'}`}
        >
          {items.map((a, i) => (
            <AnalysisCard key={a.slug} a={a} delay={i > 0 ? (Math.min(i, 4) as 1 | 2 | 3 | 4) : undefined} />
          ))}
        </div>
      </div>
    </section>
  )
}
