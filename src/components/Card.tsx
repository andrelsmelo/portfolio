import Image from 'next/image'
import Button from './ui/Button'
import { Status } from '@/utils/enums'
import { useTranslations } from 'next-intl'

interface CardProps {
  title: string
  description: string
  status: Status
  image: string
  live: string
  code: string
}

const Card = ({ title, description, image, status, live, code }: CardProps) => {
  const t = useTranslations('Card')

  return (
    <div
      className="rounded-lg border bg-card text-card-foreground shadow-sm"
      data-v0-t="card"
    >
      <Image
        src={`/${image}`}
        width="400"
        height="225"
        alt={title}
        className="rounded-t-lg object-cover w-full aspect-[16/9]"
      />
      <div className="p-4 md:p-6">
        <div className="space-y-2">
          <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
            {title} - {status === Status.DONE ? '✅' : '🚧'}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex items-center gap-2">
            <a href={live}>
              <Button variant="light">{t('live')}</Button>
            </a>
            <a href={code}>
              <Button variant="dark">{t('code')}</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
