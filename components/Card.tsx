import Image from 'next/image'
import Link from 'next/link'
import { parseMarkdownLinks } from '../utils/markdown'

interface CardProps {
  title: string
  description: string
  imgSrc?: string
  href?: string
}

export default function Card({ title, description, imgSrc, href }: CardProps) {
  return (
    <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
      <div className="h-full overflow-hidden border border-neutral-200 dark:border-neutral-800">
        {href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            {imgSrc && (
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
              />
            )}
          </Link>
        ) : (
          imgSrc && (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          )
        )}
        <div className="p-6">
          <h2 className="mb-3 text-xl font-medium leading-8 tracking-tight text-neutral-900 dark:text-neutral-100">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p
            className="prose mb-3 max-w-none text-neutral-600 dark:text-neutral-400"
            dangerouslySetInnerHTML={{ __html: parseMarkdownLinks(description) }}
          />
          {href && (
            <Link
              href={href}
              className="text-sm font-medium text-neutral-900 underline decoration-neutral-400 decoration-1 underline-offset-2 hover:decoration-neutral-600 dark:text-neutral-100 dark:decoration-neutral-700 dark:hover:decoration-neutral-500"
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
