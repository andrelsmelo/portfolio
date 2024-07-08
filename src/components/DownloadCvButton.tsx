'use client'
import { useTranslations } from 'next-intl'
import Button from './ui/Button'

const DownloadCvButton = () => {
  const downloadCv = () => {
    const link = document.createElement('a')
    link.href = '/andre-melo-cv.pdf'
    link.download = 'andre-melo-cv.pdf'
    link.click()
  }

  const t = useTranslations('DownloadButton')

  return (
    <Button variant="dark" onClick={downloadCv}>
      {t('text')}
    </Button>
  )
}

export default DownloadCvButton
