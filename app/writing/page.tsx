import type { Metadata } from 'next'
import Link from 'next/link'
import { publishedEssays } from '@/data/writing'

export const metadata: Metadata = {
  title: 'Writing — Aryan Anand',
  description: 'Essays and reading notes on product, technology, and the ideas behind the work.',
}

export default function WritingPage() {
  const essays = publishedEssays()

  return (
    <main className="min-h-screen">
      <header className="max-w-[1160px] mx-auto px-10 max-md:px-5 pt-10">
        <Link href="/#writing" className="font-mono text-[11px] tracking-[0.1em] text-muted no-underline hover:text-accent">← BACK TO PORTFOLIO</Link>
      </header>
      <section className="max-w-[860px] mx-auto px-10 max-md:px-5 pt-24 pb-20">
        <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-accent mb-5">Essays & reading</div>
        <h1 className="font-bold tracking-[-0.05em] leading-[0.98]" style={{ fontSize: 'clamp(44px,8vw,88px)' }}>The notebook<span className="text-accent">.</span></h1>
        <p className="text-[17px] text-muted leading-[1.7] max-w-[580px] mt-6">Ideas on product, technology, and the things I’m reading along the way.</p>

        {essays.length ? (
          <div className="mt-16 border-t border-[var(--border)]">
            {essays.map(essay => (
              <Link key={essay.slug} href={`/writing/${essay.slug}`} className="group grid grid-cols-[1fr_auto] gap-8 py-8 border-b border-[var(--border)] no-underline text-fg max-md:grid-cols-1">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.13em] text-accent mb-3">{essay.category}</div>
                  <h2 className="font-bold tracking-[-0.025em] text-[25px] leading-[1.15] mb-3 group-hover:text-accent transition-colors">{essay.title}</h2>
                  <p className="text-[14px] text-muted leading-[1.65] max-w-[600px]">{essay.dek}</p>
                </div>
                <div className="flex items-start gap-5 font-mono text-[10px] tracking-[0.08em] text-muted max-md:justify-between">
                  <span>{new Date(essay.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  <span>{essay.readTimeMin} MIN</span>
                  <span className="text-fg group-hover:text-accent">↗</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-16 border-t border-[var(--border)] py-10 flex justify-between items-start gap-8 max-sm:flex-col">
            <div>
              <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent mb-3">First entry in progress</div>
              <h2 className="font-bold tracking-[-0.025em] text-[25px] mb-3">A little more soon.</h2>
              <p className="text-[14px] text-muted leading-[1.65] max-w-[500px]">This notebook is taking shape. Essays, reading notes, and the occasional idea that deserves more than a passing thought will find a home here.</p>
            </div>
            <span className="font-mono text-[10px] tracking-[0.1em] text-muted whitespace-nowrap">01 / IN PROGRESS</span>
          </div>
        )}
      </section>
    </main>
  )
}
