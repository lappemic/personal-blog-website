import Image from 'next/image'
import Link from 'next/link'
import { parseMarkdownLinks } from '../utils/markdown'

interface CardProps {
  title: string
  description: string
  imgSrc?: string
  href?: string
  badge?: string
}

export default function Card({ title, description, imgSrc, href, badge }: CardProps) {
  return (
    <div className="w-full">
      <div className="flex overflow-hidden rounded-md border border-neutral-200 dark:border-neutral-800">
        {imgSrc && (
          <div className="hidden w-1/4 max-w-[180px] sm:block">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                <Image
                  alt={title}
                  src={imgSrc}
                  className="h-full object-cover object-center"
                  width={180}
                  height={120}
                />
              </Link>
            ) : (
              <Image
                alt={title}
                src={imgSrc}
                className="h-full object-cover object-center"
                width={180}
                height={120}
              />
            )}
          </div>
        )}
        <div className="flex-1 p-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-medium leading-6 tracking-tight text-neutral-900 dark:text-neutral-100">
              {href ? (
                <Link href={href} aria-label={`Link to ${title}`}>
                  {title}
                </Link>
              ) : (
                title
              )}
            </h2>
            {badge && (
              <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">
                {badge}
              </span>
            )}
          </div>
          <p
            className="prose mt-1 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-300"
            dangerouslySetInnerHTML={{ __html: parseMarkdownLinks(description) }}
          />
          {href && (
            <Link
              href={href}
              className="mt-2 inline-block text-xs font-medium text-neutral-900 underline decoration-neutral-400 decoration-1 underline-offset-2 hover:decoration-neutral-600 dark:text-neutral-100 dark:decoration-neutral-600 dark:hover:decoration-neutral-400"
              aria-label={`Link to ${title}`}
            >
              Read more
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
