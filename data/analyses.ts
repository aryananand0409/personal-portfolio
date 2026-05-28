export type Analysis = {
  slug: string
  title: string
  tags: string[]
  readTimeMin: number
  coverImage?: string
  url: string
  status: 'published' | 'draft'
}

// Empty by default → State A (section hidden, no nav link).
// Add a published entry here to flip to State B automatically.
export const analyses: Analysis[] = []

export function publishedAnalyses(): Analysis[] {
  return analyses.filter(a => a.status === 'published')
}
