import RevealWrapper from './RevealWrapper'

const SWATCHES = [
  '#FF4757', '#FFA502', '#FFDD59',
  '#2ED573', '#1E90FF', '#5352ED',
  '#FF6B81', '#70A1FF', '#A29BFE',
]

const META = [
  { label: 'Role',       value: 'Designer + Developer' },
  { label: 'Built With', value: 'Claude Code' },
  { label: 'Status',     value: 'Shipped' },
]

export default function Projects() {
  return (
    <section id="projects" className="border-b border-[var(--border)]">
      <div className="max-w-[1160px] mx-auto px-10 max-md:px-5">

        <RevealWrapper className="flex items-baseline justify-between py-12 pb-8 border-b border-[var(--border)]">
          <h2 className="font-bold tracking-[-0.03em] leading-none" style={{ fontSize: 'clamp(28px,3vw,40px)' }}>
            Personal Projects
          </h2>
          <span className="font-mono text-[11px] text-muted tracking-[0.1em]">Built on the side</span>
        </RevealWrapper>

        <div className="pb-12">
          <RevealWrapper
            delay={1}
            className="group grid grid-cols-[1.1fr_1fr] max-md:grid-cols-1 border border-[var(--border)] rounded-[2px] overflow-hidden bg-card-bg mt-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-[3px] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] cursor-pointer"
          >
            {/* Visual panel */}
            <div
              className="min-h-[320px] max-md:min-h-[220px] relative overflow-hidden flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#FFE5D9 0%,#FFB088 50%,#FF6B3D 100%)' }}
            >
              <div className="grid grid-cols-3 gap-3 w-[70%] max-w-[320px] aspect-square">
                {SWATCHES.map((color) => (
                  <div
                    key={color}
                    className="rounded-lg shadow-[0_8px_24px_-6px_rgba(0,0,0,0.15)] transition-transform duration-[400ms] group-hover:translate-y-[-2px] group-hover:rotate-[2deg] [&:nth-child(2n)]:group-hover:translate-y-[2px] [&:nth-child(2n)]:group-hover:rotate-[-2deg] [&:nth-child(3n)]:group-hover:translate-y-[-1px] [&:nth-child(3n)]:group-hover:rotate-[1deg]"
                    style={{ background: color }}
                  />
                ))}
              </div>
            </div>

            {/* Body panel */}
            <div className="p-10 max-md:p-7 flex flex-col justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] uppercase text-[#22A06B] before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#22A06B] before:rounded-full before:shadow-[0_0_0_4px_rgba(34,160,107,0.18)]">
                  Live · Try it now
                </div>
                <h3 className="text-[38px] max-md:text-[28px] font-bold tracking-[-0.03em] leading-none my-3">
                  Satur8
                </h3>
                <p className="text-[14px] text-muted italic mb-3">
                  A fun color memory game where players recreate colors from memory.
                </p>
                <p className="text-[14.5px] text-[#444] leading-[1.65]">
                  Sole designer and developer — explored the limits of what one PM with the right tools can ship end-to-end. Designed the game loop, the visual system, and the entire interaction model.
                </p>
              </div>

              <div className="flex flex-wrap gap-5 pt-4 border-t border-[var(--border)]">
                {META.map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-muted">{label}</span>
                    <span className="text-[13px] font-medium">{value}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-2.5 items-center flex-wrap">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-fg text-bg px-6 py-3 text-[13px] font-semibold tracking-[0.03em] no-underline rounded-[2px] transition-[background,transform] duration-200 hover:bg-accent hover:-translate-y-px"
                >
                  ▶ Play Satur8
                </a>
                <span className="inline-flex items-center gap-1.5 bg-transparent text-fg px-[22px] py-[11px] text-[13px] font-medium rounded-[2px] border border-[var(--border)] cursor-default opacity-60">
                  More coming soon
                </span>
              </div>
            </div>
          </RevealWrapper>
        </div>

      </div>
    </section>
  )
}
