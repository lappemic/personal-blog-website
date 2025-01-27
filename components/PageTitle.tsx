import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
      {children}
    </h1>
  )
}
