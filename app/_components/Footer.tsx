import BackToTop from './BackToTop'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-6">
      <div className="max-w-[1160px] mx-auto px-10 max-md:px-5 flex items-center justify-between">
        <span className="font-mono text-[10px] text-muted tracking-[0.1em]">
          © 2026 Aryan Anand · Built with intention
        </span>
        <BackToTop />
      </div>
    </footer>
  )
}
