import { allReadings } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'
import ReadingLayout from '@/layouts/ReadingLayout'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug)
  const reading = allReadings.find((r) => r.slug === slug)

  if (!reading) {
    return
  }

  return {
    title: reading.title,
    description: reading.summary || `Notes on ${reading.title} by ${reading.author}`,
    openGraph: {
      title: reading.title,
      description: reading.summary || `Notes on ${reading.title}`,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      url: `${siteMetadata.siteUrl}/readings/${slug}`,
    },
  }
}

export const generateStaticParams = async () => {
  return allReadings.filter((r) => !r.draft).map((r) => ({ slug: r.slug }))
}

export default async function ReadingPage({ params }: { params: { slug: string } }) {
  const slug = decodeURI(params.slug)
  const reading = allReadings.find((r) => r.slug === slug)

  if (!reading || reading.draft) {
    return notFound()
  }

  return (
    <ReadingLayout
      title={reading.title}
      author={reading.author}
      url={reading.url}
      dateRead={reading.dateRead}
      category={reading.category}
    >
      <MDXLayoutRenderer code={reading.body.code} components={components} />
    </ReadingLayout>
  )
}
