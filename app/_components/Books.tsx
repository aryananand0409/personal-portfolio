import RevealWrapper from './RevealWrapper'
import { currentlyReading, haveRead } from '@/data/books'

function zeroPad(n: number) {
  return n.toString().padStart(2, '0')
}

export default function Books() {
  const current = currentlyReading()
  const read = haveRead()
  const total = read.length + (current ? 1 : 0)

  return (
    <section id="reading" className="border-b border-[var(--border)]">
      <div className="max-w-[1160px] mx-auto px-10 max-md:px-5">

        <RevealWrapper className="flex items-baseline justify-between py-12 pb-8 border-b border-[var(--border)]">
          <h2 className="font-bold tracking-[-0.03em] leading-none" style={{ fontSize: 'clamp(28px,3vw,40px)' }}>
            Reading
          </h2>
          <span className="font-mono text-[11px] text-muted tracking-[0.1em]">{zeroPad(total)} books</span>
        </RevealWrapper>

        <div className="py-8 flex flex-col gap-0">

          {/* Currently reading */}
          {current && (
            <RevealWrapper className="mb-8">
              <div
                className="inline-flex items-stretch gap-0 border border-[var(--border)] rounded-[2px] py-3 transition-[border-color,background] duration-200 hover:border-accent"
                style={{ background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(8px)' }}
              >
                <span className="flex flex-col gap-[3px] px-5">
                  <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-muted">Reading now</span>
                  <span className="text-[15px] font-semibold text-fg inline-flex items-center gap-[7px] tracking-[-0.01em]">
                    <span className="w-[7px] h-[7px] bg-accent rounded-full flex-shrink-0 animate-pulse-green"
                          style={{ boxShadow: '0 0 0 0 rgba(55,0,255,0.4)', animationName: 'pulse-accent' }} />
                    {current.title}
                  </span>
                  {current.author && (
                    <span className="font-mono text-[10px] tracking-[0.08em] text-muted mt-0.5">{current.author}</span>
                  )}
                </span>
              </div>
            </RevealWrapper>
          )}

          {/* Have read list */}
          <RevealWrapper delay={1} className="flex flex-col gap-0 border border-[var(--border)] rounded-[2px] overflow-hidden">
            {read.map((book, i) => (
              <div
                key={book.title}
                className="flex items-baseline gap-5 px-5 py-3.5 bg-card-bg border-b border-[var(--border)] last:border-b-0 transition-colors duration-200 hover:bg-[rgba(55,0,255,0.02)]"
              >
                <span className="font-mono text-[10px] tracking-[0.1em] text-muted flex-shrink-0 w-6">
                  {zeroPad(i + 1)}
                </span>
                <span className="text-[14px] font-medium text-fg flex-1">{book.title}</span>
                {book.author && (
                  <span className="text-[12px] text-muted tracking-[-0.01em] text-right flex-shrink-0 max-md:hidden">
                    {book.author}
                  </span>
                )}
              </div>
            ))}
          </RevealWrapper>

        </div>
      </div>
    </section>
  )
}
