import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Now',
  description: "What I'm focusing on right now",
}

export default function Now() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-9">
            Now
          </h1>
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
            What I'm focusing on right now
          </p>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="dark:prose-dark prose max-w-none pb-8 pt-8 xl:col-span-3">
            <section className="mb-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Current Focus
              </h2>
              <p className="text-base text-gray-800 dark:text-gray-200">
                This is my personal "now page" — inspired by{' '}
                <Link
                  href="https://nownownow.com/about"
                  className="text-primary-500 hover:text-primary-400 dark:text-primary-400 dark:hover:text-primary-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Derek Sivers
                </Link>
                .
              </p>
            </section>

            <section className="mb-8">
              <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">
                Professional
              </h3>
              <ul className="list-disc space-y-1 pl-6 text-base text-gray-800 dark:text-gray-200">
                <li>
                  Working on{' '}
                  <Link
                    href="https://leadershipbuddy.ch"
                    className="text-primary-500 hover:text-primary-400 dark:text-primary-400 dark:hover:text-primary-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LeadershipBuddy.ch
                  </Link>
                </li>
                <li>
                  Rebranding from freelancing to engineering studio{' '}
                  <Link
                    href="https://bytebricks.ch"
                    className="text-primary-500 hover:text-primary-400 dark:text-primary-400 dark:hover:text-primary-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ByteBricks.ch
                  </Link>
                </li>
                <li>Recurring clients with smaller projects</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">Personal</h3>
              <ul className="list-disc space-y-1 pl-6 text-base text-gray-800 dark:text-gray-200">
                <li>Parenting takes up quite some time</li>
                <li>
                  Reading a lot since i heard{' '}
                  <Link
                    href="https://x.com/naval"
                    className="text-primary-500 hover:text-primary-400 dark:text-primary-400 dark:hover:text-primary-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Naval's
                  </Link>{' '}
                  podcast with{' '}
                  <Link
                    href="https://x.com/tferriss"
                    className="text-primary-500 hover:text-primary-400 dark:text-primary-400 dark:hover:text-primary-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tim Ferris
                  </Link>
                </li>
                <li>
                  I try to write (see{' '}
                  <Link
                    href="/blog"
                    className="text-primary-500 hover:text-primary-400 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    blog
                  </Link>
                  )
                </li>
                <li>Working on consistency</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
