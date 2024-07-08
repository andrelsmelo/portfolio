'use client'

import clsx from 'clsx'
import { useParams } from 'next/navigation'
import {
  ChangeEvent,
  ReactNode,
  useEffect,
  useState,
  useTransition,
} from 'react'
import { useRouter, usePathname } from '@/navigation'

type Props = {
  children: ReactNode
  defaultValue: string
  label: string
}

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()
  const [locale, setLocale] = useState(defaultValue)

  useEffect(() => {
    const storedLocale = localStorage.getItem('locale')
    if (storedLocale) {
      setLocale(storedLocale)
    }
  }, [])

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value
    localStorage.setItem('locale', nextLocale)
    setLocale(nextLocale)
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      )
    })
  }

  return (
    <label
      className={clsx(
        'relative text-gray-400',
        isPending && 'transition-opacity [&:disabled]:opacity-30',
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        value={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
    </label>
  )
}
