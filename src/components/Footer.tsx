import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <p className="text-sm text-gray-500">
        {t('text')}{' '}
        <a href="https://github.com/andrelsmelo" target="_blank" rel="noopener">
          {t('link')}
        </a>
      </p>
    </footer>
  )
}
