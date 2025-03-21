import projectsData from '@/data/projectsData'
import openSourceData from '@/data/openSourceData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-6 pt-6 md:space-y-4">
          <h1 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-9">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Selection of projects i have worked on. Some are just MVPs to validate an idea, others
            are more advanced web apps.
          </p>
        </div>
        <div className="container py-8">
          <div className="flex flex-col space-y-4">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2 pb-6 pt-6 md:space-y-4">
          <h1 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-9">
            Contributions
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Selection of my opensource contributions.
          </p>
        </div>
        <div className="container py-8">
          <div className="flex flex-col space-y-4">
            {openSourceData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
