import RevealWrapper from './RevealWrapper'

const SOCIALS = [
  { platform: 'LinkedIn',  handle: 'aryananand-',              href: 'https://www.linkedin.com/in/aryananand-/' },
  { platform: 'Instagram', handle: '@aryanxanand',             href: 'https://instagram.com/aryanxanand' },
  { platform: 'Email',     handle: 'aryana02lsm@iimklive.com', href: 'mailto:aryana02lsm@iimklive.com' },
  { platform: 'Phone',     handle: '+91 85273 38797',          href: 'tel:+918527338797' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-[1160px] mx-auto px-10 max-md:px-5">
        <RevealWrapper className="grid grid-cols-2 max-md:grid-cols-1 gap-20 max-md:gap-10 items-center">

          {/* Left */}
          <div>
            <h2
              className="font-bold tracking-[-0.03em] leading-none mb-4"
              style={{ fontSize: 'clamp(36px,4vw,56px)' }}
            >
              Let&apos;s build something.
            </h2>
            <p className="text-[15px] text-muted leading-[1.6] mb-8">
              Not actively job-hunting — but always open to conversations about high-impact PM roles, advisory work, and interesting problems to solve.
            </p>
            <a
              href="mailto:aryana02lsm@iimklive.com"
              className="inline-flex items-center gap-1.5 bg-fg text-bg px-6 py-3 text-[13px] font-semibold tracking-[0.03em] no-underline rounded-[2px] transition-[background,transform] duration-200 hover:bg-accent hover:-translate-y-px"
            >
              Send an email →
            </a>
          </div>

          {/* Right — social links */}
          <div className="flex flex-col gap-3">
            {SOCIALS.map(({ platform, handle, href }) => (
              <a
                key={platform}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between px-5 py-4 border border-[var(--border)] rounded-[2px] no-underline text-fg transition-[border-color,transform] duration-200 hover:border-accent hover:translate-x-1"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted w-[72px]">
                    {platform}
                  </span>
                  <span className="text-[14px] font-medium">{handle}</span>
                </div>
                <span className="text-[14px] text-muted transition-colors duration-200 group-hover:text-accent">↗</span>
              </a>
            ))}
          </div>

        </RevealWrapper>
      </div>
    </section>
  )
}
