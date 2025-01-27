import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Now',
  description: "What I'm focusing on right now",
}

export default function Now() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Now
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            What I'm focusing on right now — Updated{' '}
            {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="dark:prose-dark prose max-w-none pb-8 pt-8 xl:col-span-3">
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Current Focus
              </h2>
              <p className="text-gray-800 dark:text-gray-200">
                This is my personal "now page" — inspired by{' '}
                <a
                  href="https://nownownow.com/about"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Derek Sivers
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Professional
              </h3>
              <ul className="list-disc space-y-1 pl-6 text-gray-800 dark:text-gray-200">
                <li>Working on [NextGenEnergyJobs.com](https://nextgenenergyjobs.com)</li>
                <li>Learning [Next.js, TypeScript]</li>
                <li>Reduced my working hours to ~25 hours a week</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">Personal</h3>
              <ul className="list-disc space-y-1 pl-6 text-gray-800 dark:text-gray-200">
                <li>Parenting takes up quite some time</li>
                <li>
                  Reading a lot since i heard [Navals](https://x.com/naval) podcast with [Tim
                  Ferris](https://x.com/tferriss)
                </li>
                <li>I try to write (still quite hesitant)</li>
                <li>Working on consistency</li>
              </ul>
            </section>

            <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
              <p>
                Last updated:{' '}
                {new Date().toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
