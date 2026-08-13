import RevealWrapper from './RevealWrapper'

const SWATCHES = [
  '#FF4757', '#FFA502', '#FFDD59',
  '#2ED573', '#1E90FF', '#5352ED',
  '#FF6B81', '#70A1FF', '#A29BFE',
]

const PROJECTS = [
  {
    title: 'Satur8',
    statusLabel: 'Live · Try it now',
    tagline: 'A fun color memory game where players recreate colors from memory.',
    description:
      'Sole designer and developer — explored the limits of what one PM with the right tools can ship end-to-end. Designed the game loop, the visual system, and the entire interaction model.',
    ctaLabel: '▶ Play Satur8',
    ctaHref: '#',
    secondaryLabel: 'More coming soon',
    meta: [
      { label: 'Role', value: 'Designer + Developer' },
      { label: 'Built With', value: 'Claude Code' },
      { label: 'Status', value: 'Shipped' },
    ],
    techStack: [
      'Game Design',
      'Web App',
      'Interaction Design',
    ],
    gradient: 'linear-gradient(135deg,#FFE5D9 0%,#FFB088 50%,#FF6B3D 100%)',
    visual: 'swatches',
  },
  {
    title: 'Swiggy Instamart Recipe Ingredients Finder',
    statusLabel: 'Open Source · GitHub',
    tagline: 'Paste in a recipe and get a Instamart cart with matching ingredients.',
    description:
      'Extracts ingredients via Claude, searches Swiggy\'s Instamart MCP server for each item, and stages the cart so you can review and confirm before checkout.',
    ctaLabel: 'View on GitHub',
    ctaHref: 'https://github.com/aryananand0409/SwiggyInstamart-RecipeIngredientsFinder',
    meta: [
      { label: 'Club', value: 'Swiggy Builders Club' },
      { label: 'Stack', value: 'Node.js / Express + React (Vite)' },
      { label: 'AI', value: 'Claude API' },
    ],
    techStack: [
      'Node.js / Express',
      'React (Vite)',
      'Claude API',
      'OAuth 2.1 + PKCE',
      'MCP (Model Context Protocol)',
      'CLI + Web App',
    ],
    gradient: 'linear-gradient(135deg,#EAFBFF 0%,#D3F2FF 35%,#94D5FF 100%)',
    visual: 'recipe-cart',
  },
]

function ProjectVisual({ project }: { project: (typeof PROJECTS)[number] }) {
  if (project.visual === 'recipe-cart') {
    return (
      <div
        className="min-h-[320px] max-md:min-h-[220px] relative overflow-hidden flex items-center justify-center p-8"
        style={{ background: project.gradient }}
      >
        <div className="w-full max-w-[360px] rounded-[22px] border border-white/50 bg-white/30 backdrop-blur-[2px] p-4 shadow-[0_18px_40px_-18px_rgba(27,60,97,0.45)]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-600 font-medium">Recipe</div>
              <div className="text-[20px] font-bold tracking-[-0.04em] text-slate-800">Paneer Masala</div>
            </div>
            <div className="rounded-full bg-[#31B46E] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">MCP</div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {['Paneer', 'Tomato', 'Onion', 'Garlic', 'Spinach', 'Cream'].map((item) => (
              <span key={item} className="rounded-full bg-white/70 px-2.5 py-1 text-[10px] font-medium text-slate-700 border border-slate-200">
                {item}
              </span>
            ))}
          </div>

          <div className="space-y-2.5">
            {[
              { name: 'Paneer Cubes', qty: '250 g', color: '#FFB6A0' },
              { name: 'Tomato Puree', qty: '1 pack', color: '#FF6B57' },
              { name: 'Onion', qty: '1 bag', color: '#FFDA7A' },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-2xl bg-white/80 px-3 py-2.5 shadow-[0_6px_16px_-10px_rgba(15,23,42,0.45)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
                  <span className="text-[12px] font-medium text-slate-700">{item.name}</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.12em] text-slate-500">{item.qty}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-900 px-3 py-2.5 text-white">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-slate-300">
              <span>Cart</span>
              <span>4 items</span>
            </div>
            <div className="mt-1 text-[18px] font-bold tracking-[-0.04em]">₹ 642</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-h-[320px] max-md:min-h-[220px] relative overflow-hidden flex items-center justify-center"
      style={{ background: project.gradient }}
    >
      <div className="grid grid-cols-3 gap-3 w-[70%] max-w-[320px] aspect-square">
        {SWATCHES.map((color) => (
          <div
            key={`${project.title}-${color}`}
            className="rounded-lg shadow-[0_8px_24px_-6px_rgba(0,0,0,0.15)] transition-transform duration-[400ms] group-hover:translate-y-[-2px] group-hover:rotate-[2deg] [&:nth-child(2n)]:group-hover:translate-y-[2px] [&:nth-child(2n)]:group-hover:rotate-[-2deg] [&:nth-child(3n)]:group-hover:translate-y-[-1px] [&:nth-child(3n)]:group-hover:rotate-[1deg]"
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  )
}

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
          {PROJECTS.map((project) => (
            <RevealWrapper
              key={project.title}
              delay={1}
              className="group grid grid-cols-[1.1fr_1fr] max-md:grid-cols-1 border border-[var(--border)] rounded-[2px] overflow-hidden bg-card-bg mt-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-[3px] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] cursor-pointer"
            >
              <ProjectVisual project={project} />

              <div className="p-10 max-md:p-7 flex flex-col justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] uppercase text-[#22A06B] before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#22A06B] before:rounded-full before:shadow-[0_0_0_4px_rgba(34,160,107,0.18)]">
                    {project.statusLabel}
                  </div>

                  <h3 className="text-[38px] max-md:text-[28px] font-bold tracking-[-0.03em] leading-none my-3">
                    {project.title}
                  </h3>

                  <p className="text-[14px] text-muted italic mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-[14.5px] text-[#444] leading-[1.65]">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border)]">
                  <div className="flex flex-wrap gap-5 mb-4">
                    {project.meta.map(({ label, value }) => (
                      <div key={`${project.title}-${label}`} className="flex flex-col gap-0.5">
                        <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-muted">{label}</span>
                        <span className="text-[13px] font-medium">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((item) => (
                      <span
                        key={`${project.title}-${item}`}
                        className="inline-flex items-center border border-[var(--border)] rounded-full px-2.5 py-1 text-[10px] font-medium tracking-[0.05em] text-muted uppercase"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2.5 items-center flex-wrap">
                  <a
                    href={project.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-fg text-bg px-6 py-3 text-[13px] font-semibold tracking-[0.03em] no-underline rounded-[2px] transition-[background,transform] duration-200 hover:bg-accent hover:-translate-y-px"
                  >
                    {project.ctaLabel}
                  </a>
                  {project.secondaryLabel ? (
                    <span className="inline-flex items-center gap-1.5 bg-transparent text-fg px-[22px] py-[11px] text-[13px] font-medium rounded-[2px] border border-[var(--border)] cursor-default opacity-60">
                      {project.secondaryLabel}
                    </span>
                  ) : null}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
