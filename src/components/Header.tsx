import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslations } from 'next-intl'

export default function Header() {
  const t = useTranslations('Header')

  return (
    <header className="flex items-center justify-between w-full h-24 px-8 border-b">
      <div className="flex items-center gap-4">
        <Link href="/">
          {/** Add Icon */}
          <h1 className="text-2xl font-bold">{t('title')}</h1>
        </Link>
        <LanguageSwitcher />
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#sobre" className="text-gray-500 hover:text-gray-700">
              {t('about')}
            </a>
          </li>
          <li>
            <a href="#projetos" className="text-gray-500 hover:text-gray-700">
              {t('projects')}
            </a>
          </li>
          <li>
            <a href="#contato" className="text-gray-500 hover:text-gray-700">
              {t('contact')}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
