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

        <div className="py-8 flex flex-col gap-5">

          {/* Currently reading */}
          {current && (
            <RevealWrapper>
              <div
                className="inline-flex items-stretch gap-0 border border-[var(--border)] rounded-[2px] py-3 transition-[border-color,background] duration-200 hover:border-accent"
                style={{ background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(8px)' }}
              >
                <span className="flex flex-col gap-[3px] px-5">
                  <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-muted">Reading now</span>
                  <span className="text-[15px] font-semibold text-fg inline-flex items-center gap-[7px] tracking-[-0.01em]">
                    <span className="w-[7px] h-[7px] bg-accent rounded-full flex-shrink-0 animate-pulse-green" />
                    {current.title}
                  </span>
                  {current.author && (
                    <span className="font-mono text-[10px] tracking-[0.08em] text-muted mt-0.5">{current.author}</span>
                  )}
                </span>
              </div>
            </RevealWrapper>
          )}

          <RevealWrapper delay={1} className="flex items-center justify-between">
            <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-muted">Have read</span>
          </RevealWrapper>

          {/* Have read — responsive grid (show all books) */}
          <RevealWrapper delay={1} className="-mx-10 max-md:-mx-5">
            <div className="px-10 max-md:px-5">
              <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {read.map((book, i) => (
                  <div
                    key={book.title}
                    className="bg-card-bg border border-[var(--border)] rounded-[2px] px-3 py-3 flex flex-col justify-between transition-[border-color,transform] duration-200 hover:border-accent hover:-translate-y-[2px]"
                  >
                    <span className="font-mono text-[9px] tracking-[0.1em] text-muted">
                      {zeroPad(i + 1)}
                    </span>
                    <div className="mt-1">
                      <div className="text-[13px] font-semibold text-fg leading-[1.25] tracking-[-0.01em] mb-1">
                        {book.title}
                      </div>
                      {book.author && (
                        <div className="font-mono text-[10px] tracking-[0.04em] text-muted truncate">
                          {book.author}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>

        </div>
      </div>
    </section>
  )
}
