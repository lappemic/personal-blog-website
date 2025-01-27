import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col items-center py-8">
        <div className="mb-4 flex space-x-3">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
          <SocialIcon kind="github" href={siteMetadata.github} size={5} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
          <SocialIcon kind="x" href={siteMetadata.x} size={5} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-neutral-600 dark:text-neutral-400">
          <span>{`© ${new Date().getFullYear()}`}</span>
          <span>{` • `}</span>
          <span>{siteMetadata.author}</span>
        </div>
        <div className="text-sm text-neutral-500 dark:text-neutral-500">
          <Link href="/">Home</Link>
          <span className="mx-2">·</span>
          <Link href="/blog">Writing</Link>
          <span className="mx-2">·</span>
          <Link href="/projects">Projects</Link>
          <span className="mx-2">·</span>
          <Link href="/now">Now</Link>
        </div>
      </div>
    </footer>
  )
}
