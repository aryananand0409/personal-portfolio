import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { publishedEssays } from '@/data/writing'
import type { ReactNode } from 'react'

type Props = { params: { slug: string } }

function formatInline(text: string): ReactNode[] {
  return text.split(/(\*\*.+?\*\*|\*.+?\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>
    if (part.startsWith('*') && part.endsWith('*')) return <em key={index}>{part.slice(1, -1)}</em>
    return part
  })
}

export function generateStaticParams() {
  return publishedEssays().map(essay => ({ slug: essay.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const essay = publishedEssays().find(item => item.slug === params.slug)
  return essay ? { title: `${essay.title} — Aryan Anand`, description: essay.dek } : {}
}

export default function EssayPage({ params }: Props) {
  const essay = publishedEssays().find(item => item.slug === params.slug)
  if (!essay) notFound()

  return (
    <main className="min-h-screen">
      <header className="max-w-[1160px] mx-auto px-10 max-md:px-5 pt-10">
        <Link href="/writing" className="font-mono text-[11px] tracking-[0.1em] text-muted no-underline hover:text-accent">← ALL WRITING</Link>
      </header>
      <article className="max-w-[760px] mx-auto px-10 max-md:px-5 pt-20 pb-28">
        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent mb-5">{essay.category}</div>
        <h1 className="font-bold tracking-[-0.045em] leading-[1.02]" style={{ fontSize: 'clamp(40px,7vw,72px)' }}>{essay.title}</h1>
        <p className="text-[18px] text-muted leading-[1.6] mt-6">{essay.dek}</p>
        <div className="flex gap-5 font-mono text-[10px] tracking-[0.08em] uppercase text-muted border-b border-[var(--border)] py-6 mt-7">
          <time dateTime={essay.date}>{new Date(essay.date).toLocaleDateString('en', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          <span>{essay.readTimeMin} min read</span>
        </div>
        {essay.coverImage && (
          <figure className="my-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={essay.coverImage} alt={essay.title} className="w-full max-h-[480px] object-cover" />
          </figure>
        )}
        <div className="essay-copy mt-10">
          {essay.blocks.map((block, index) => {
            if (block.type === 'heading') return <h2 key={index}>{block.text}</h2>
            if (block.type === 'quote') return <blockquote key={index}><p>{block.text}</p>{block.attribution && <cite>{block.attribution}</cite>}</blockquote>
            if (block.type === 'image') return <figure key={index} className="essay-image"><img src={block.src} alt={block.alt} />{block.caption && <figcaption>{block.caption}</figcaption>}</figure>
            return <p key={index}>{formatInline(block.text)}</p>
          })}
        </div>
        <div className="border-t border-[var(--border)] mt-16 pt-6">
          <Link href="/writing" className="font-mono text-[11px] tracking-[0.1em] text-muted no-underline hover:text-accent">← MORE ESSAYS & READING</Link>
        </div>
      </article>
    </main>
  )
}
