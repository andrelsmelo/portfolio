import Image from 'next/image'
import Button from './Button'

interface CardProps {
  title: string
  description: string
  image: string
  url: string
}

const Card = ({ title, description, image, url }: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-64 h-64 bg-white rounded-lg shadow-md">
      <Image
        src={`/${image}`}
        alt={title}
        className="w-32 h-32 rounded-full"
        width={250}
        height={250}
      />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-500">{description}</p>

      <Button variant="info">
        <a href={url}>Ver Projeto</a>
      </Button>
    </div>
  )
}

export default Card
