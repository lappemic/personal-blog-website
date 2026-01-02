import { Metadata } from 'next'
import { getLinks } from '@/lib/getLinks'

export const metadata: Metadata = {
  title: 'Links',
  description: 'Interesting links I come across',
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  } catch {
    return dateString
  }
}

function getDomain(url: string): string {
  try {
    const hostname = new URL(url).hostname
    return hostname.replace('www.', '')
  } catch {
    return url
  }
}

export default async function LinksPage() {
  const links = await getLinks()

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-9">
          Links
        </h1>
        <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
          Interesting stuff I come across
        </p>
      </div>

      <div className="pt-8">
        {links.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No links yet.</p>
        ) : (
          <ul className="space-y-4">
            {links.map((link, index) => (
              <li key={`${link.url}-${index}`} className="group">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg p-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <h2 className="text-base font-medium text-gray-900 group-hover:text-primary-500 dark:text-gray-100 dark:group-hover:text-primary-400">
                        {link.title || getDomain(link.url)}
                      </h2>
                      <p className="mt-1 truncate text-sm text-gray-500 dark:text-gray-400">
                        {getDomain(link.url)}
                      </p>
                    </div>
                    <time className="shrink-0 text-sm text-gray-400 dark:text-gray-500">
                      {formatDate(link.date)}
                    </time>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
