import { useLocale, useTranslations } from 'next-intl'
import LocaleSwitcherSelect from '@/components/LocaleSwitcherSelect'
import { locales } from '@/config'

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()

  const localesEmojis = {
    en: '🇺🇸',
    es: '🇪🇸',
    'pt-BR': '🇧🇷',
  }

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {localesEmojis[cur]} {cur}
        </option>
      ))}
    </LocaleSwitcherSelect>
  )
}
