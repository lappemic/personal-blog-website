/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  const baseClasses =
    'underline decoration-neutral-400 decoration-1 underline-offset-2 hover:decoration-neutral-600 dark:decoration-neutral-700 dark:hover:decoration-neutral-500'

  if (isInternalLink) {
    return <Link href={href} className={baseClasses} {...rest} />
  }

  if (isAnchorLink) {
    return <a href={href} className={baseClasses} {...rest} />
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses} {...rest} />
  )
}

export default CustomLink
