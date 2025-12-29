import Link from 'next/link'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'

interface ReadingCardProps {
  title: string
  author?: string
  url: string
  dateRead: string
  category: string
  summary?: string
  slug: string
}

const categoryColors: Record<string, string> = {
  blog: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  essay: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  substack: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  article: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  paper: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
}

export default function ReadingCard({
  title,
  author,
  url,
  dateRead,
  category,
  summary,
  slug,
}: ReadingCardProps) {
  return (
    <article className="flex flex-col space-y-2 py-4">
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <time dateTime={dateRead}>{formatDate(dateRead, siteMetadata.locale)}</time>
        <span
          className={`rounded px-2 py-0.5 text-xs font-medium ${categoryColors[category] || categoryColors.article}`}
        >
          {category}
        </span>
      </div>
      <h2 className="text-xl font-bold leading-8 tracking-tight">
        <Link href={`/readings/${slug}`} className="text-gray-900 dark:text-gray-100">
          {title}
        </Link>
      </h2>
      {author && <p className="text-sm text-gray-600 dark:text-gray-400">by {author}</p>}
      {summary && <p className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</p>}
      <div className="flex gap-4 text-sm">
        <Link
          href={`/readings/${slug}`}
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        >
          Read notes &rarr;
        </Link>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
        >
          Original &nearr;
        </a>
      </div>
    </article>
  )
}
