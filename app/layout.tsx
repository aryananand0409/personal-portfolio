import type { Metadata } from 'next'
import { DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aryan Anand — Product Manager & Builder',
  description:
    'Product Manager at Optum (UnitedHealth Group). Shipping AI-driven experiences used by millions. Open to high-impact PM roles.',
  openGraph: {
    title: 'Aryan Anand — Product Manager & Builder',
    description:
      'Shipping AI-driven experiences at scale — 7.7M+ members impacted, $1.3M+ in annual savings.',
    url: 'https://aryananand.in',
    siteName: 'Aryan Anand',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aryan Anand — Product Manager & Builder',
    description: 'PM at Optum. 0→1 builder. AI products.',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aryan Anand',
  jobTitle: 'Product Manager',
  worksFor: { '@type': 'Organization', name: 'Optum (UnitedHealth Group)' },
  alumniOf: [
    { '@type': 'EducationalOrganization', name: 'Indian Institute of Management, Kozhikode' },
    { '@type': 'EducationalOrganization', name: 'IIIT Delhi' },
  ],
  email: 'aryana02lsm@iimklive.com',
  url: 'https://aryananand.in',
  sameAs: [
    'https://www.linkedin.com/in/aryananand-/',
    'https://instagram.com/aryanxanand',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
