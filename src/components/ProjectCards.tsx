import Image from 'next/image'
import Button from './ui/Button'
import { Status } from '@/utils/enums'

interface CardProps {
  title: string
  description: string
  status: Status
  image: string
  url: string
}

const Card = ({ title, description, image, status, url }: CardProps) => {
  return (
    <div className="px-8 py-4 flex flex-col items-center justify-center min-w-40 flex-auto bg-white rounded-lg shadow-md">
      <Image
        src={`/${image}`}
        alt={title}
        className="w-32 h-32 rounded-lg flex-1"
        width={128}
        height={128}
      />
      <div className="flex flex-row items-start justify-around">
        <div>
          <h2 className="text-xl font-semibold text-start">{title}</h2>
          <p className="text-sm text-gray-500 text-start">{description}</p>
        </div>
        <div>
          <span className="text-nowrap text-xs border border-gray-600 rounded-lg px-2 py-1">
            {status}
          </span>
        </div>
      </div>

      <Button variant="info">
        <a href={url}>Ver Projeto</a>
      </Button>
    </div>
  )
}

export default Card
