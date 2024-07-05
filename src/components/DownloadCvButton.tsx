'use client'

import Button from './ui/Button'

const DownloadCvButton = () => {
  const downloadCv = () => {
    const link = document.createElement('a')
    link.href = '/andre-melo-cv.pdf'
    link.download = 'andre-melo-cv.pdf'
    link.click()
  }

  return (
    <Button variant="dark" onClick={downloadCv}>
      Download CV
    </Button>
  )
}

export default DownloadCvButton
