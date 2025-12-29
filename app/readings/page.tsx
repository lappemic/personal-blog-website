import { allReadings } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ReadingCard from '@/components/ReadingCard'

export const metadata = genPageMetadata({ title: 'Readings' })

export default function ReadingsPage() {
  const readings = allReadings
    .filter((r) => !r.draft)
    .sort((a, b) => new Date(b.dateRead).getTime() - new Date(a.dateRead).getTime())

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-6 pt-6 md:space-y-4">
        <h1 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-9">
          Readings
        </h1>
        <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
          Articles, essays, and blog posts I've read with notes and takeaways.
        </p>
      </div>
      <div className="py-6">
        {readings.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No readings yet.</p>
        ) : (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {readings.map((reading) => (
              <li key={reading.slug}>
                <ReadingCard
                  title={reading.title}
                  author={reading.author}
                  url={reading.url}
                  dateRead={reading.dateRead}
                  category={reading.category}
                  summary={reading.summary}
                  slug={reading.slug}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
