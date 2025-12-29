import { ReactNode } from 'react'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'

interface ReadingLayoutProps {
  title: string
  author?: string
  url: string
  dateRead: string
  category: string
  children: ReactNode
}

const categoryColors: Record<string, string> = {
  blog: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  essay: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  substack: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  article: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  paper: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
}

export default function ReadingLayout({
  title,
  author,
  url,
  dateRead,
  category,
  children,
}: ReadingLayoutProps) {
  return (
    <SectionContainer>
      <article>
        <header className="space-y-4 pb-6 pt-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={dateRead}>{formatDate(dateRead, siteMetadata.locale)}</time>
            <span
              className={`rounded px-2 py-0.5 text-xs font-medium ${categoryColors[category] || categoryColors.article}`}
            >
              {category}
            </span>
          </div>
          <PageTitle>{title}</PageTitle>
          {author && <p className="text-lg text-gray-600 dark:text-gray-400">by {author}</p>}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600"
          >
            Read Original
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </header>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="prose max-w-none pb-8 pt-6 dark:prose-invert">{children}</div>
        </div>

        <footer className="pt-4">
          <Link
            href="/readings"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            &larr; Back to readings
          </Link>
        </footer>
      </article>
    </SectionContainer>
  )
}
